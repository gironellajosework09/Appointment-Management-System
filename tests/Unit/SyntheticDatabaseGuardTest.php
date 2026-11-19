<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Identity\SyntheticDatabaseGuard;
use Illuminate\Config\Repository;
use Illuminate\Container\Container;
use Illuminate\Support\Facades\Facade;
use Mockery;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use RuntimeException;

final class SyntheticDatabaseGuardTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        $container = new Container();
        $container->instance('config', new Repository());
        $database = Mockery::mock();
        $database->shouldNotReceive('connection');
        $container->instance('db', $database);
        Container::setInstance($container);
        Facade::setFacadeApplication($container);
    }

    protected function tearDown(): void
    {
        Mockery::close();
        Facade::clearResolvedInstances();
        Facade::setFacadeApplication(null);
        Container::setInstance(null);
        parent::tearDown();
    }

    #[DataProvider('unsafeTargets')]
    public function test_unsafe_target_is_rejected_before_connecting(string $environment, array $overrides): void
    {
        config(['app.env' => $environment, 'database.default' => 'mysql', 'database.connections.mysql' => array_replace([
            'driver' => 'mysql', 'host' => '127.0.0.1', 'port' => 23371, 'database' => 'itakda_dev_synthetic',
        ], $overrides)]);
        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('Synthetic database target unavailable.');
        (new SyntheticDatabaseGuard())->assertTarget();
    }

    public static function unsafeTargets(): array
    {
        return [
            'production environment' => ['production', []],
            'different host' => ['local', ['host' => 'localhost']],
            'different port' => ['local', ['port' => 3306]],
            'different database' => ['local', ['database' => 'other']],
            'testing cannot use development database' => ['testing', []],
            'socket override' => ['local', ['unix_socket' => 'other']],
            'url override' => ['local', ['url' => 'mysql://other']],
            'read override' => ['local', ['read' => ['host' => 'other']]],
        ];
    }
}
