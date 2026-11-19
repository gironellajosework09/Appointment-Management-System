<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Http\Requests\StoreServiceRequest;
use App\Http\Requests\UpdateServiceRequest;
use Illuminate\Container\Container;
use App\Models\User;
use Illuminate\Support\Facades\Facade;
use PHPUnit\Framework\TestCase;

final class ServiceAuthorizationTest extends TestCase
{
    protected function tearDown(): void
    {
        Facade::clearResolvedInstances();
        Facade::setFacadeApplication(null);
        Container::setInstance(null);
        parent::tearDown();
    }

    public function test_authenticated_user_without_create_permission_is_denied(): void
    {
        $this->assertPermissionResult(StoreServiceRequest::class, 'POST', 'service.create', false);
    }

    public function test_authenticated_user_with_create_permission_is_allowed(): void
    {
        $this->assertPermissionResult(StoreServiceRequest::class, 'POST', 'service.create', true);
    }

    public function test_authenticated_user_without_update_permission_is_denied(): void
    {
        $this->assertPermissionResult(UpdateServiceRequest::class, 'PUT', 'service.update', false);
    }

    public function test_authenticated_user_with_update_permission_is_allowed(): void
    {
        $this->assertPermissionResult(UpdateServiceRequest::class, 'PUT', 'service.update', true);
    }

    private function assertPermissionResult(string $requestClass, string $method, string $ability, bool $permitted): void
    {
        $container = new Container();
        $gate = new class($permitted) {
            public array $abilities = [];

            public function __construct(private bool $permitted) {}

            public function allows(string $ability): bool
            {
                $this->abilities[] = $ability;

                return $this->permitted;
            }
        };
        $container->instance(\Illuminate\Contracts\Auth\Access\Gate::class, $gate);
        Container::setInstance($container);
        Facade::setFacadeApplication($container);

        $request = $requestClass::create('/', $method, ['name' => 'Example']);
        $request->setUserResolver(static fn () => new User());

        self::assertSame($permitted, $request->authorize());
        self::assertSame([$ability], $gate->abilities);
    }
}


