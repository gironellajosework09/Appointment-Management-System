<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use App\Identity\SyntheticDatabaseGuard;
use App\Models\Service;
use App\Models\User;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

final class RequireVerifiedInternalAccess
{
    public function handle(Request $request, Closure $next): Response
    {
        try {
            if (! $request->hasSession()) {
                return response('Internal access is not available.', 503);
            }
            $verified = $request->session()->get('internal.mfa_verified');
            if (! (is_int($verified) && $verified > 0)) {
                return response('Internal access is not available.', 503);
            }

            // Identity resolution can query the database; verify its target first.
            (new SyntheticDatabaseGuard())->assertTarget();
            $user = $request->user();
            if (! $user instanceof User
                || ! $user->active
                || ! $user->two_factor_confirmed_at
                || ! $user->getRawOriginal('two_factor_secret')
                || $user->installation_id !== Service::installationId()
                || (string) $user->getAuthIdentifier() !== (string) $verified) {
                return response('Internal access is not available.', 503);
            }

        } catch (Throwable) {
            return response('Internal access is not available.', 503);
        }

        return $next($request);
    }
}
