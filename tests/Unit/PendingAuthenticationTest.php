<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Identity\PendingAuthentication;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

final class PendingAuthenticationTest extends TestCase
{
    #[DataProvider('pendingCases')]
    public function test_pending_identity_must_be_valid_and_fresh(mixed $identity, mixed $started, int $now, bool $expected): void
    {
        self::assertSame($expected, PendingAuthentication::valid($identity, $started, $now));
    }

    public static function pendingCases(): array
    {
        return [
            'fresh' => [1, 1000, 1001, true],
            'boundary' => [1, 1000, 1300, true],
            'expired' => [1, 1000, 1301, false],
            'future' => [1, 1001, 1000, false],
            'missing timestamp' => [1, null, 1000, false],
            'missing identity' => [null, 1000, 1001, false],
            'string identity' => ['1', 1000, 1001, false],
            'zero identity' => [0, 1000, 1001, false],
        ];
    }
}
