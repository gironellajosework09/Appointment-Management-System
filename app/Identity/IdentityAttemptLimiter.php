<?php

declare(strict_types=1);

namespace App\Identity;

use Illuminate\Http\Request;
use Illuminate\Support\Facades\RateLimiter;
use Throwable;

final class IdentityAttemptLimiter
{
    private const MAX_ATTEMPTS = 5;
    private const DECAY_SECONDS = 60;

    /** Return 200 when permitted, 429 when limited, or 503 when the limiter is unavailable. */
    public function consume(Request $request, string $purpose): int
    {
        $ip = $request->ip();
        if (! in_array($purpose, ['login', 'mfa'], true) || ! is_string($ip) || filter_var($ip, FILTER_VALIDATE_IP) === false) {
            return 503;
        }

        try {
            // Do not store login names, credentials or factor values in the limiter.
            $key = 'itakda:internal:'.$purpose.':'.hash('sha256', $ip);
            $attempt = RateLimiter::hit($key, self::DECAY_SECONDS);
            if (! is_int($attempt) || $attempt < 1) {
                return 503;
            }
            return $attempt > self::MAX_ATTEMPTS ? 429 : 200;
        } catch (Throwable) {
            return 503;
        }
    }
}
