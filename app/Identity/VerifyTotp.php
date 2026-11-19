<?php

declare(strict_types=1);

namespace App\Identity;

use App\Models\User;
use App\Models\Service;
use Illuminate\Support\Facades\DB;
use PragmaRX\Google2FA\Google2FA;

/** Verifies an enrolled factor once under a per-identity database lock. */
final class VerifyTotp
{
    public function __construct(private readonly Google2FA $totp, private readonly SyntheticDatabaseGuard $guard) {}

    public function verify(int $userId, #[\SensitiveParameter] string $code): bool
    {
        if (! preg_match('/\A[0-9]{6}\z/', $code)) {
            return false;
        }

        $this->guard->assertTarget();
        $installationId = Service::installationId();

        return DB::transaction(function () use ($userId, $code, $installationId): bool {
            $user = User::query()->whereKey($userId)
                ->where('installation_id', $installationId)->lockForUpdate()->first();

            if (! $user || ! $user->active || ! $user->two_factor_confirmed_at || ! $user->two_factor_secret) {
                return false;
            }

            // Supplying a numeric baseline makes the library return the accepted
            // time step, including when clock skew moves it into a future step.
            $step = $this->totp->verifyKeyNewer($user->two_factor_secret, $code, $user->last_totp_step ?? 0);
            if (! is_int($step)) {
                return false;
            }

            $user->last_totp_step = $step;
            $user->saveOrFail();

            return true;
        });
    }
}
