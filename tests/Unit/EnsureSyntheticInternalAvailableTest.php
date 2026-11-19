<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Http\Middleware\EnsureSyntheticInternalAvailable;
use Illuminate\Config\Repository;
use Illuminate\Container\Container;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

final class EnsureSyntheticInternalAvailableTest extends TestCase
{
    protected function tearDown(): void
    {
        Container::setInstance(null);
        parent::tearDown();
    }

    #[DataProvider('deniedContexts')]
    public function test_denies_before_database_access(bool $enabled, string $remote): void
    {
        $container = new Container();
        $container->instance('config', new Repository(['itakda' => ['internal_enabled' => $enabled]]));
        $factory = $this->createMock(ResponseFactory::class);
        $factory->expects(self::once())->method('make')->willReturn(new Response('Internal access is not available.', 503));
        $container->instance(ResponseFactory::class, $factory);
        Container::setInstance($container);
        $request = Request::create('/internal/login', 'GET', [], [], [], ['REMOTE_ADDR' => $remote]);
        $called = false;
        $response = (new EnsureSyntheticInternalAvailable())->handle($request, static function () use (&$called): Response {
            $called = true;
            return new Response('', 200);
        });
        self::assertSame(503, $response->getStatusCode());
        self::assertFalse($called);
    }

    public static function deniedContexts(): array
    {
        return [
            'disabled local' => [false, '127.0.0.1'],
            'enabled remote' => [true, '192.0.2.1'],
            'enabled absent address' => [true, ''],
        ];
    }
}
