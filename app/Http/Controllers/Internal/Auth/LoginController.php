<?php

declare(strict_types=1);

namespace App\Http\Controllers\Internal\Auth;

use App\Identity\IdentityAttemptLimiter;
use App\Identity\SyntheticDatabaseGuard;
use App\Models\Service;
use App\Models\User;
use Illuminate\Http\RedirectResponse;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Illuminate\Support\Facades\Hash;
use Illuminate\View\View;

final class LoginController
{
    public function show(): View
    {
        return view('internal.auth.login', ['action' => route('internal.auth.login.store')]);
    }

    public function store(Request $request, SyntheticDatabaseGuard $guard, IdentityAttemptLimiter $limiter): RedirectResponse
    {
        $limit = $limiter->consume($request, 'login');
        if ($limit !== 200) {
            abort($limit, 'Sign in is unavailable.');
        }

        $values = $request->validate(['identity' => ['required', 'string', 'max:120'], 'password' => ['required', 'string', 'max:1024']]);
        $request->session()->forget(['internal.pending_identity', 'internal.pending_started', 'internal.mfa_verified']);
        $guard->assertTarget();
        $user = User::query()->where('installation_id', Service::installationId())->where('login', $values['identity'])->first();

        // Perform a password check for unknown accounts as well as known accounts.
        $dummyHash = '$2y$10$92IXUNpkjO0rOQ5byMi.Ye4oKoEa3Ro9llC/.og/at2uheWG/igi.';
        $passwordValid = Hash::check($values['password'], $user?->password ?? $dummyHash);
        if (! $user || ! $user->active || ! $user->two_factor_confirmed_at || ! $user->two_factor_secret || ! $passwordValid) {
            return back()->withErrors(['identity' => 'Sign in could not be completed.'])->onlyInput('identity');
        }

        Auth::logout();
        $request->session()->invalidate();
        $request->session()->regenerateToken();
        $request->session()->put('internal.pending_identity', $user->getKey());
        $request->session()->put('internal.pending_started', time());

        return redirect()->route('internal.auth.challenge');
    }
}
