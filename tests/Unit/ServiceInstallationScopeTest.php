<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Models\Service;
use Illuminate\Config\Repository;
use Illuminate\Container\Container;
use Illuminate\Database\Eloquent\Builder;
use Illuminate\Support\Facades\Facade;
use Mockery;
use PHPUnit\Framework\TestCase;
use RuntimeException;

final class ServiceInstallationScopeTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        $container = new Container();
        $container->instance('config', new Repository());
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

    public function test_scope_restricts_query_to_current_installation(): void
    {
        config(['itakda.installation_id' => 'synthetic-installation']);
        $query = Mockery::mock(Builder::class);
        $query->shouldReceive('where')->once()->with('installation_id', 'synthetic-installation')->andReturnSelf();

        self::assertSame($query, (new Service())->scopeForInstallation($query));
    }

    public function test_scope_refuses_missing_installation_before_query(): void
    {
        $query = Mockery::mock(Builder::class);
        $query->shouldNotReceive('where');

        $this->expectException(RuntimeException::class);
        $this->expectExceptionMessage('Installation context unavailable.');
        (new Service())->scopeForInstallation($query);
    }
}
