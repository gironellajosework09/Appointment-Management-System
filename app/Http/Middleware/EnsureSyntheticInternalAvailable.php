<?php

declare(strict_types=1);

namespace App\Http\Middleware;

use App\Identity\SyntheticDatabaseGuard;
use Closure;
use Illuminate\Http\Request;
use Symfony\Component\HttpFoundation\Response;
use Throwable;

final class EnsureSyntheticInternalAvailable
{
    public function handle(Request $request, Closure $next): Response
    {
        if (config('itakda.internal_enabled') !== true || ! in_array($request->server('REMOTE_ADDR'), ['127.0.0.1', '::1'], true)) {
            return response('Internal access is not available.', 503);
        }
        try {
            (new SyntheticDatabaseGuard())->assertTarget();
        } catch (Throwable) {
            return response('Internal access is not available.', 503);
        }
        return $next($request);
    }
}
