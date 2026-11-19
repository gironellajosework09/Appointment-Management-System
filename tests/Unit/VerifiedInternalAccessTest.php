<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Http\Middleware\RequireVerifiedInternalAccess;
use App\Models\User;
use Illuminate\Config\Repository;
use Illuminate\Container\Container;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use Illuminate\Session\ArraySessionHandler;
use Illuminate\Session\Store;
use Illuminate\Support\Facades\Facade;
use Mockery;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

final class VerifiedInternalAccessTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        $container = new Container();
        $container->instance('config', new Repository([
            'app' => ['env' => 'testing'],
            'itakda' => ['installation_id' => 'synthetic-installation'],
            'database' => ['default' => 'mysql', 'connections' => ['mysql' => [
                'driver' => 'mysql', 'host' => '127.0.0.1', 'port' => 23372, 'database' => 'itakda_test_synthetic',
            ]]],
        ]));
        $connection = Mockery::mock();
        $connection->shouldReceive('selectOne')->zeroOrMoreTimes()->andReturn((object) [
            'database_name' => 'itakda_test_synthetic', 'server_hostname' => '3720417d0b4d',
        ]);
        $database = Mockery::mock();
        $database->shouldReceive('connection')->with('mysql')->zeroOrMoreTimes()->andReturn($connection);
        $container->instance('db', $database);
        $factory = Mockery::mock(ResponseFactory::class);
        $factory->shouldReceive('make')->with('Internal access is not available.', 503, [])->zeroOrMoreTimes()
            ->andReturn(new Response('Internal access is not available.', 503));
        $container->instance(ResponseFactory::class, $factory);
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

    #[DataProvider('accessCases')]
    public function test_only_matching_active_verified_identity_can_continue(array $attributes, mixed $verified, bool $allowed): void
    {
        $session = new Store('test', new ArraySessionHandler(120));
        $session->put('internal.mfa_verified', $verified);
        $request = Request::create('/internal/services');
        $request->setLaravelSession($session);
        $user = new User();
        $user->setRawAttributes(array_replace([
            'id' => 5, 'active' => true, 'two_factor_confirmed_at' => \Carbon\CarbonImmutable::parse('2026-01-01 00:00:00'),
            'two_factor_secret' => 'encrypted-secret', 'installation_id' => 'synthetic-installation',
        ], $attributes), true);
        $request->setUserResolver(static fn () => $user);
        if ($allowed) {
            (new \App\Identity\SyntheticDatabaseGuard())->assertTarget();
            self::assertNotNull($user->two_factor_confirmed_at);
        }
        $called = false;
        $response = (new RequireVerifiedInternalAccess())->handle($request, static function () use (&$called): Response {
            $called = true;
            return new Response('allowed', 200);
        });
        self::assertSame($allowed, $called);
        self::assertSame($allowed ? 200 : 503, $response->getStatusCode());
    }

    public static function accessCases(): array
    {
        return [
            'matching verified user' => [[], 5, true],
            'missing verification' => [[], null, false],
            'different verified user' => [[], 6, false],
            'string verification rejected' => [[], '5', false],
            'inactive' => [['active' => false], 5, false],
            'unconfirmed MFA' => [['two_factor_confirmed_at' => null], 5, false],
            'missing factor' => [['two_factor_secret' => null], 5, false],
            'different installation' => [['installation_id' => 'other'], 5, false],
        ];
    }
}
