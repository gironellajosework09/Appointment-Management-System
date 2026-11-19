<?php

declare(strict_types=1);

namespace App\Identity;

final class PendingAuthentication
{
    private const MAX_AGE_SECONDS = 300;

    public static function valid(mixed $identity, mixed $startedAt, int $now): bool
    {
        return is_int($identity) && $identity > 0
            && is_int($startedAt) && $startedAt <= $now
            && $now - $startedAt <= self::MAX_AGE_SECONDS;
    }
}
