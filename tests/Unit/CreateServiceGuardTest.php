<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Services\CreateService;
use App\Models\User;
use Illuminate\Config\Repository;
use Illuminate\Container\Container;
use Illuminate\Contracts\Auth\Authenticatable;
use Illuminate\Support\Facades\Facade;
use Mockery;
use PHPUnit\Framework\TestCase;
use RuntimeException;

final class CreateServiceGuardTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        $container = new Container();
        $container->instance('config', new Repository());
        $database = Mockery::mock();
        $database->shouldNotReceive('transaction');
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

    public function test_missing_installation_context_fails_before_database_access(): void
    {
        $actor = $this->createMock(Authenticatable::class);
        $actor->expects(self::never())->method('getAuthIdentifier');

        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('Installation context unavailable.');
        (new CreateService())->execute($actor, 'Example');
    }

    public function test_actor_from_another_installation_fails_before_database_access(): void
    {
        config(['itakda.installation_id' => 'synthetic-installation']);
        $actor = new User();
        $actor->setRawAttributes(['id' => 1, 'installation_id' => 'different-installation']);

        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('Actor installation context unavailable.');
        (new CreateService())->execute($actor, 'Example');
    }

    public function test_missing_actor_identifier_fails_before_database_access(): void
    {
        config(['itakda.installation_id' => 'synthetic-installation']);
        $actor = $this->createMock(Authenticatable::class);
        $actor->expects(self::once())->method('getAuthIdentifier')->willReturn(null);

        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('Actor context unavailable.');
        (new CreateService())->execute($actor, 'Example');
    }
}

