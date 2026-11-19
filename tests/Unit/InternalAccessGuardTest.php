<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Http\Middleware\RequireVerifiedInternalAccess;
use Illuminate\Container\Container;
use Illuminate\Contracts\Routing\ResponseFactory;
use Illuminate\Http\Request;
use Illuminate\Http\Response;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

final class InternalAccessGuardTest extends TestCase
{
    protected function tearDown(): void
    {
        Container::setInstance(null);
        parent::tearDown();
    }

    #[DataProvider('internalRequests')]
    public function test_internal_access_fails_closed_without_calling_the_next_handler(string $method, string $path): void
    {
        $factory = $this->createMock(ResponseFactory::class);
        $factory->expects(self::once())
            ->method('make')
            ->with('Internal access is not available.', 503, [])
            ->willReturn(new Response('Internal access is not available.', 503));
        $container = new Container();
        $container->instance(ResponseFactory::class, $factory);
        Container::setInstance($container);

        $nextCalled = false;
        $response = (new RequireVerifiedInternalAccess())->handle(
            Request::create($path, $method),
            static function () use (&$nextCalled): Response {
                $nextCalled = true;
                return new Response('Unexpected access', 200);
            },
        );

        self::assertSame(503, $response->getStatusCode());
        self::assertSame('Internal access is not available.', $response->getContent());
        self::assertFalse($nextCalled);
    }

    public static function internalRequests(): array
    {
        return [
            'list services' => ['GET', '/internal/services'],
            'create form' => ['GET', '/internal/services/create'],
            'create service' => ['POST', '/internal/services'],
        ];
    }
}
