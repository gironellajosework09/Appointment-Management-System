<?php

declare(strict_types=1);

namespace App\Identity;

use App\Models\Service;
use App\Models\User;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use PragmaRX\Google2FA\Google2FA;
use RuntimeException;

/** Bounded single-use provisioning; caller must verify the isolated database target. */
final class ProvisionFirstAdministrator
{
    public function __construct(private readonly Google2FA $totp, private readonly SyntheticDatabaseGuard $guard) {}

    public function provision(string $login, #[\SensitiveParameter] string $password, #[\SensitiveParameter] string $secret, #[\SensitiveParameter] string $code): void
    {
        if (config('itakda.bootstrap_enabled') !== true || ! in_array(config('app.env'), ['local', 'testing'], true)) {
            throw new RuntimeException('Provisioning unavailable.');
        }

        $installation = Service::installationId();
        $login = trim($login);
        if ($login === '' || mb_strlen($login) > 120 || strlen($password) < 12 || strlen($password) > 1024 || ! preg_match('/\A[A-Z2-7]{32}\z/', $secret) || ! preg_match('/\A[0-9]{6}\z/', $code)) {
            throw new RuntimeException('Invalid provisioning input.');
        }
        $step = $this->totp->verifyKeyNewer($secret, $code, 0);
        if (! is_int($step)) {
            throw new RuntimeException('MFA verification failed.');
        }
        $this->guard->assertTarget();
        $passwordHash = Hash::make($password);

        DB::transaction(function () use ($installation, $login, $passwordHash, $secret, $step): void {
            // A durable unique guard prevents subsequent bootstrap even if a user is removed.
            DB::table('identity_bootstrap_guard')->insert(['installation_id' => $installation, 'created_at' => now()]);
            if (User::query()->where('installation_id', $installation)->exists()) {
                throw new RuntimeException('Provisioning unavailable.');
            }
            $user = new User();
            $user->installation_id = $installation;
            $user->login = $login;
            $user->password = $passwordHash;
            $user->two_factor_secret = $secret;
            $user->two_factor_confirmed_at = now();
            $user->last_totp_step = $step;
            $user->active = true;
            $user->saveOrFail();
            if (! DB::table('audit_events')->insert([
                'installation_id' => $installation,
                'actor_id' => $user->getKey(),
                'action' => 'identity.provisioned',
                'subject_id' => $user->getKey(),
                'occurred_at' => now(),
                'outcome' => 'success',
            ])) {
                throw new RuntimeException('Required evidence unavailable.');
            }
        });
    }
}
