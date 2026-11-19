<?php

declare(strict_types=1);

namespace App\Http\Controllers\Internal\Auth;

use App\Identity\IdentityAttemptLimiter;
use App\Identity\PendingAuthentication;
use App\Identity\VerifyTotp;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\View\View;

final class ChallengeController
{
    public function show(Request $request): View|RedirectResponse
    {
        if (! PendingAuthentication::valid($request->session()->get('internal.pending_identity'), $request->session()->get('internal.pending_started'), time())) {
            $request->session()->forget(['internal.pending_identity', 'internal.pending_started']);
            return redirect()->route('internal.auth.login');
        }

        return view('internal.auth.challenge', ['action' => route('internal.auth.challenge.store')]);
    }

    public function store(Request $request, VerifyTotp $verifier, IdentityAttemptLimiter $limiter): RedirectResponse
    {
        $limit = $limiter->consume($request, 'mfa');
        if ($limit !== 200) {
            abort($limit, 'Verification is unavailable.');
        }

        $pending = $request->session()->get('internal.pending_identity');
        if (! PendingAuthentication::valid($pending, $request->session()->get('internal.pending_started'), time())) {
            $request->session()->forget(['internal.pending_identity', 'internal.pending_started']);
            return redirect()->route('internal.auth.login');
        }

        $values = $request->validate(['code' => ['required', 'string', 'regex:/\A[0-9]{6}\z/']]);
        if (! $verifier->verify($pending, $values['code'])) {
            return back()->withErrors(['code' => 'Verification could not be completed.']);
        }

        $user = User::query()->whereKey($pending)->where('installation_id', Service::installationId())
            ->where('active', true)->whereNotNull('two_factor_confirmed_at')->first();
        if (! $user) {
            $request->session()->forget(['internal.pending_identity', 'internal.pending_started']);
            return redirect()->route('internal.auth.login');
        }

        $request->session()->forget(['internal.pending_identity', 'internal.pending_started']);
        $request->session()->regenerate();
        Auth::login($user);
        $request->session()->put('internal.mfa_verified', $user->getAuthIdentifier());

        return redirect()->route('internal.services.index');
    }

    public function logout(Request $request): RedirectResponse
    {
        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();

        return redirect()->route('internal.auth.login');
    }
}
