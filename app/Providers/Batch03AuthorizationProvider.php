<?php

declare(strict_types=1);

namespace App\Providers;

use App\Models\Service;
use App\Models\User;
use Illuminate\Support\Facades\Gate;
use Illuminate\Support\ServiceProvider;
use Throwable;

final class Batch03AuthorizationProvider extends ServiceProvider
{
    public function register(): void
    {
        // Fortify's stock routes include recovery paths outside this local scope.
        \Laravel\Fortify\Fortify::ignoreRoutes();
    }

    public function boot(): void
    {
        $allowed = static function (User $user): bool {
            try {
                $id = $user->getAuthIdentifier();
                $adminId = config('itakda.service_admin_id');
                $request = request();
                return config('itakda.internal_enabled') === true
                    && is_string($adminId) && $adminId !== ''
                    && (string) $id === $adminId
                    && $request->hasSession()
                    && (string) $request->session()->get('internal.mfa_verified') === $adminId
                    && $user->active && $user->two_factor_confirmed_at !== null
                    && ! empty($user->getRawOriginal('two_factor_secret'))
                    && $user->installation_id === Service::installationId();
            } catch (Throwable) {
                return false;
            }
        };
        Gate::define('service.create', $allowed);
        Gate::define('service.view', $allowed);
        Gate::define('service.update', $allowed);
    }
}
