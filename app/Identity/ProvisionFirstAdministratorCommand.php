<?php

declare(strict_types=1);

namespace App\Identity;

use Illuminate\Console\Command;
use Throwable;

final class ProvisionFirstAdministratorCommand extends Command
{
    protected $signature = 'itakda:provision-first-administrator';

    protected $description = 'Provision the first synthetic-local administrator once.';

    public function handle(SyntheticDatabaseGuard $guard, ProvisionFirstAdministrator $provisioner): int
    {
        try {
            if (config('itakda.bootstrap_enabled') !== true) {
                throw new \RuntimeException('Provisioning unavailable.');
            }
            if (! $this->input->isInteractive()) {
                throw new \RuntimeException('Interactive input required.');
            }
            $guard->assertTarget();
            $login = $this->ask('Synthetic administrator login');
            $password = $this->secret('Administrator password', false);
            $secret = $this->secret('Individually controlled TOTP secret', false);
            $code = $this->secret('Current TOTP verification code', false);
            if (! is_string($login) || ! is_string($password) || ! is_string($secret) || ! is_string($code)) {
                throw new \RuntimeException('Provisioning input unavailable.');
            }
            $provisioner->provision($login, $password, $secret, $code);
            $this->info('Administrator provisioned.');
            return self::SUCCESS;
        } catch (Throwable) {
            $this->error('Provisioning was not confirmed. Verify the authoritative state before another attempt.');
            return self::FAILURE;
        }
    }
}
