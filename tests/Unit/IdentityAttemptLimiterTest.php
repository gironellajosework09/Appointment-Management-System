<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Identity\IdentityAttemptLimiter;
use Illuminate\Container\Container;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Facade;
use Illuminate\Support\Facades\RateLimiter;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use RuntimeException;

final class IdentityAttemptLimiterTest extends TestCase
{
    protected function setUp(): void
    {
        parent::setUp();
        $container = new Container();
        $container->instance(\Illuminate\Cache\RateLimiter::class, new IdentityAttemptLimiterFake());
        Container::setInstance($container);
        Facade::setFacadeApplication($container);
    }

    protected function tearDown(): void
    {

        Facade::clearResolvedInstances();
        Facade::setFacadeApplication(null);
        Container::setInstance(null);
        parent::tearDown();
    }

    #[DataProvider('attemptCases')]
    public function test_rate_limit_outcomes(int $attempt, int $status): void
    {
        $request = Request::create('/internal/login', 'POST', [], [], [], ['REMOTE_ADDR' => '127.0.0.1']);
        $fake = app(\Illuminate\Cache\RateLimiter::class);
        $fake->attempt = $attempt;
        self::assertSame($status, (new IdentityAttemptLimiter())->consume($request, 'login'));
        self::assertSame(['itakda:internal:login:'.hash('sha256', '127.0.0.1'), 60], $fake->called);
    }

    public static function attemptCases(): array
    {
        return ['first' => [1, 200], 'fifth' => [5, 200], 'sixth' => [6, 429], 'failed counter' => [0, 503]];
    }

    public function test_cache_exception_fails_closed(): void
    {
        $request = Request::create('/internal/mfa', 'POST', [], [], [], ['REMOTE_ADDR' => '127.0.0.1']);
        app(\Illuminate\Cache\RateLimiter::class)->fail = true;
        self::assertSame(503, (new IdentityAttemptLimiter())->consume($request, 'mfa'));
    }

    public function test_unknown_purpose_is_rejected_without_accessing_the_cache(): void
    {
        $request = Request::create('/', 'POST', [], [], [], ['REMOTE_ADDR' => '127.0.0.1']);
        $fake = app(\Illuminate\Cache\RateLimiter::class);
        self::assertSame(503, (new IdentityAttemptLimiter())->consume($request, 'other'));
        self::assertNull($fake->called);
    }
}

final class IdentityAttemptLimiterFake
{
    public int $attempt = 1;
    public bool $fail = false;
    public ?array $called = null;

    public function hit(string $key, int $seconds): int
    {
        $this->called = [$key, $seconds];
        if ($this->fail) {
            throw new RuntimeException('cache unavailable');
        }
        return $this->attempt;
    }
}
