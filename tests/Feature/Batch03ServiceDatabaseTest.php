<?php

declare(strict_types=1);

namespace Tests\Feature;

use App\Identity\SyntheticDatabaseGuard;
use App\Models\User;
use App\Services\CreateService;
use App\Services\UpdateService;
use Illuminate\Config\Repository;
use Illuminate\Container\Container;
use Illuminate\Database\Capsule\Manager;
use Illuminate\Database\Eloquent\ModelNotFoundException;
use Illuminate\Database\QueryException;
use Illuminate\Support\Facades\Facade;
use PDO;
use PHPUnit\Framework\TestCase;
use RuntimeException;

/**
 * Synthetic-only persistence checks; never migrates or cleans up existing records.
 *
 * Target and credentials come from environment variables so the file is portable:
 * ITAKDA_SYNTHETIC_DB_HOST, _PORT, _DATABASE, _HOSTNAME, _CREDENTIAL_DIR,
 * _APP_USER and _READER_USER. Without a credential directory the tests skip.
 */
final class Batch03ServiceDatabaseTest extends TestCase
{
    private const INSTALLATION = 'synthetic-service-test';

    private Manager $capsule;
    private PDO $reader;

    protected function setUp(): void
    {
        parent::setUp();
        if (getenv('ITAKDA_RUN_SYNTHETIC_DB_TESTS') !== '1') {
            self::markTestSkipped('Synthetic database tests require explicit opt-in.');
        }

        $credentialDirectory = $this->env('ITAKDA_SYNTHETIC_DB_CREDENTIAL_DIR');
        if ($credentialDirectory === '' || ! is_dir($credentialDirectory)) {
            self::markTestSkipped('Synthetic database credential directory is not configured.');
        }

        $host = $this->env('ITAKDA_SYNTHETIC_DB_HOST', '127.0.0.1');
        $port = (int) $this->env('ITAKDA_SYNTHETIC_DB_PORT', '23372');
        $database = $this->env('ITAKDA_SYNTHETIC_DB_DATABASE', 'itakda_test_synthetic');
        $hostname = $this->env('ITAKDA_SYNTHETIC_DB_HOSTNAME');

        $app = $this->credentials($credentialDirectory, 'app.cnf', $this->env('ITAKDA_SYNTHETIC_DB_APP_USER', 'app_test'));
        $reader = $this->credentials($credentialDirectory, 'migration.cnf', $this->env('ITAKDA_SYNTHETIC_DB_READER_USER', 'migrate_test'));
        $connection = [
            'driver' => 'mysql', 'host' => $host, 'port' => $port,
            'database' => $database, 'username' => $app['user'], 'password' => $app['password'],
            'charset' => 'utf8mb4', 'collation' => 'utf8mb4_unicode_ci', 'prefix' => '', 'strict' => true,
        ];
        $container = new Container();
        $container->instance('config', new Repository([
            'app' => ['env' => 'testing'], 'itakda' => ['installation_id' => self::INSTALLATION],
            'database' => ['default' => 'mysql', 'connections' => ['mysql' => $connection]],
        ]));
        Container::setInstance($container);
        Facade::setFacadeApplication($container);
        $this->capsule = new Manager($container);
        $this->capsule->addConnection($connection);
        $this->capsule->setAsGlobal();
        $this->capsule->bootEloquent();
        $container->instance('db', $this->capsule->getDatabaseManager());

        // The guard checks configured endpoint and live database/hostname before any data access.
        (new SyntheticDatabaseGuard())->assertTarget();
        $appIdentity = $this->capsule->getConnection()->selectOne('SELECT CURRENT_USER() AS actor');
        if (! $appIdentity || ! str_starts_with($appIdentity->actor ?? '', $app['user'].'@')) {
            throw new RuntimeException('Synthetic application account identity mismatch.');
        }
        $this->reader = new PDO(
            'mysql:host='.$host.';port='.$port.';dbname='.$database.';charset=utf8mb4',
            $reader['user'], $reader['password'], [PDO::ATTR_ERRMODE => PDO::ERRMODE_EXCEPTION],
        );
        $identity = $this->reader->query('SELECT DATABASE() AS db, @@hostname AS host, CURRENT_USER() AS actor')->fetch(PDO::FETCH_ASSOC);
        if ($identity['db'] !== $database
            || ($hostname !== '' && $identity['host'] !== $hostname)
            || ! str_starts_with($identity['actor'], $reader['user'].'@')) {
            throw new RuntimeException('Synthetic reader target identity mismatch.');
        }
        $this->capsule->getConnection()->statement("SET SESSION sql_mode='STRICT_ALL_TABLES'");
    }

    private function env(string $name, string $default = ''): string
    {
        $value = getenv($name);

        return is_string($value) && $value !== '' ? $value : $default;
    }

    private function credentials(string $directory, string $file, string $expectedUser): array
    {
        $path = $directory.'/'.$file;
        $values = parse_ini_file($path, true, INI_SCANNER_RAW)['client'] ?? [];
        if (array_diff(array_keys($values), ['user', 'password']) || ($values['user'] ?? null) !== $expectedUser || empty($values['password'])) {
            throw new RuntimeException('Synthetic credential file is invalid.');
        }

        return $values;
    }

    protected function tearDown(): void
    {
        Facade::clearResolvedInstances();
        Facade::setFacadeApplication(null);
        Container::setInstance(null);
        parent::tearDown();
    }

    public function test_service_and_attributable_audit_are_persisted_together(): void
    {
        $actor = $this->actor();
        $name = 'synthetic-service-'.bin2hex(random_bytes(8));
        $service = (new CreateService())->execute($actor, $name);
        $query = $this->reader->prepare('SELECT action, actor_id, outcome FROM audit_events WHERE installation_id = ? AND subject_id = ? AND action = ?');
        $query->execute([self::INSTALLATION, $service->getKey(), 'service.created']);
        $events = $query->fetchAll(PDO::FETCH_ASSOC);
        self::assertSame($name, $this->capsule->getConnection()->table('services')->where('id', $service->getKey())->value('name'));
        self::assertCount(1, $events);
        self::assertSame((string) $actor->getAuthIdentifier(), $events[0]['actor_id']);
        self::assertSame('success', $events[0]['outcome']);
    }

    public function test_failed_audit_insert_rolls_back_service(): void
    {
        $name = 'synthetic-audit-failure-'.bin2hex(random_bytes(8));
        $actor = $this->actor(str_repeat('x', 500));
        $query = $this->capsule->getConnection()->table('services')->where('installation_id', self::INSTALLATION)->where('name', $name);
        self::assertSame(0, $query->count());
        try {
            (new CreateService())->execute($actor, $name);
            self::fail('Expected audit insert to fail.');
        } catch (QueryException $e) {
            self::assertStringContainsString('audit_events', strtolower($e->getSql()));
            self::assertSame('22001', $e->errorInfo[0] ?? null);
            self::assertSame(1406, (int) ($e->errorInfo[1] ?? 0));
        }
        self::assertSame(0, $query->count());
    }

    public function test_service_name_update_and_attributable_audit_are_persisted_together(): void
    {
        $actor = $this->actor();
        $service = (new CreateService())->execute($actor, 'synthetic-before-'.bin2hex(random_bytes(8)));
        $renamed = 'synthetic-after-'.bin2hex(random_bytes(8));

        (new UpdateService())->execute($actor, (string) $service->getKey(), $renamed);

        $query = $this->reader->prepare('SELECT action, actor_id, outcome FROM audit_events WHERE installation_id = ? AND subject_id = ? AND action = ?');
        $query->execute([self::INSTALLATION, $service->getKey(), 'service.updated']);
        $events = $query->fetchAll(PDO::FETCH_ASSOC);
        self::assertSame($renamed, $this->capsule->getConnection()->table('services')->where('id', $service->getKey())->value('name'));
        self::assertCount(1, $events);
        self::assertSame((string) $actor->getAuthIdentifier(), $events[0]['actor_id']);
        self::assertSame('success', $events[0]['outcome']);
    }

    public function test_failed_audit_insert_rolls_back_service_update(): void
    {
        $service = (new CreateService())->execute($this->actor(), 'synthetic-keep-'.bin2hex(random_bytes(8)));
        $original = $service->name;
        $actor = $this->actor(str_repeat('x', 500));

        try {
            (new UpdateService())->execute($actor, (string) $service->getKey(), 'synthetic-rolled-back');
            self::fail('Expected audit insert to fail.');
        } catch (QueryException $e) {
            self::assertStringContainsString('audit_events', strtolower($e->getSql()));
        }

        self::assertSame($original, $this->capsule->getConnection()->table('services')->where('id', $service->getKey())->value('name'));
    }

    public function test_update_cannot_reach_another_installation(): void
    {
        $id = $this->capsule->getConnection()->table('services')->insertGetId([
            'installation_id' => 'synthetic-other-installation',
            'name' => 'foreign-service',
        ]);

        try {
            (new UpdateService())->execute($this->actor(), (string) $id, 'cross-installation-rewrite');
            self::fail('Expected the other installation service to be unreachable.');
        } catch (ModelNotFoundException) {
        }

        self::assertSame('foreign-service', $this->capsule->getConnection()->table('services')->where('id', $id)->value('name'));
    }

    public function test_listing_is_installation_scoped(): void
    {
        $mine = (new CreateService())->execute($this->actor(), 'synthetic-listed-'.bin2hex(random_bytes(8)));
        $this->capsule->getConnection()->table('services')->insert([
            'installation_id' => 'synthetic-other-installation',
            'name' => 'foreign-listed-'.bin2hex(random_bytes(8)),
        ]);

        $names = \App\Models\Service::query()->forInstallation()->orderBy('name')->pluck('name')->all();

        self::assertContains($mine->name, $names);
        self::assertSame([], array_filter($names, static fn (string $name): bool => str_starts_with($name, 'foreign-listed-')));
    }

    private function actor(string $id = ''): User
    {
        $actor = new User();
        $actor->setKeyType('string');
        $actor->setRawAttributes(['id' => $id !== '' ? $id : 'synthetic-'.bin2hex(random_bytes(8)), 'installation_id' => self::INSTALLATION]);

        return $actor;
    }
}
