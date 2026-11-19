<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Identity\ProvisionFirstAdministrator;
use App\Identity\SyntheticDatabaseGuard;
use Illuminate\Config\Repository;
use Illuminate\Container\Container;
use Illuminate\Support\Facades\Facade;
use Mockery;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use PragmaRX\Google2FA\Google2FA;
use RuntimeException;

final class ProvisionFirstAdministratorTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        $container = new Container();
        $container->instance('config', new Repository());
        $database = Mockery::mock();
        $database->shouldNotReceive('connection');
        $database->shouldNotReceive('transaction');
        $container->instance('db', $database);
        Container::setInstance($container);
        Facade::setFacadeApplication($container);
        config(['app.env' => 'testing', 'itakda.bootstrap_enabled' => true, 'itakda.installation_id' => 'synthetic-test']);
    }

    protected function tearDown(): void
    {
        Mockery::close();
        Facade::clearResolvedInstances();
        Facade::setFacadeApplication(null);
        Container::setInstance(null);
        parent::tearDown();
    }

    #[DataProvider('invalidContexts')]
    public function test_bootstrap_requires_explicit_local_authority(string $environment, bool $enabled): void
    {
        config(['app.env' => $environment, 'itakda.bootstrap_enabled' => $enabled]);
        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('Provisioning unavailable.');
        (new ProvisionFirstAdministrator(new Google2FA(), new SyntheticDatabaseGuard()))->provision('admin', 'synthetic-password', str_repeat('A', 32), '000000');
    }

    public static function invalidContexts(): array
    {
        return ['production' => ['production', true], 'disabled' => ['testing', false]];
    }

    #[DataProvider('invalidInputs')]
    public function test_invalid_provisioning_input_never_reaches_database(string $login, string $password, string $secret, string $code): void
    {
        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('Invalid provisioning input.');
        (new ProvisionFirstAdministrator(new Google2FA(), new SyntheticDatabaseGuard()))->provision($login, $password, $secret, $code);
    }

    public static function invalidInputs(): array
    {
        return [
            'empty login' => [' ', 'synthetic-password', str_repeat('A', 32), '000000'],
            'short password' => ['admin', 'short', str_repeat('A', 32), '000000'],
            'bad secret' => ['admin', 'synthetic-password', 'invalid', '000000'],
            'bad code' => ['admin', 'synthetic-password', str_repeat('A', 32), 'invalid'],
        ];
    }

    public function test_wrong_totp_code_fails_before_database_access(): void
    {
        $totp = new Google2FA();
        $secret = str_repeat('A', 32);
        // Choose a code the library rejects across its accepted clock-skew window.
        $wrong = null;
        for ($candidate = 0; $candidate < 100; $candidate++) {
            $code = str_pad((string) $candidate, 6, '0', STR_PAD_LEFT);
            if ($totp->verifyKeyNewer($secret, $code, 0) === false) {
                $wrong = $code;
                break;
            }
        }
        self::assertNotNull($wrong);
        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('MFA verification failed.');
        (new ProvisionFirstAdministrator($totp, new SyntheticDatabaseGuard()))->provision('admin', 'synthetic-password', $secret, $wrong);
    }
}
