<?php

use App\Http\Controllers\Internal\Auth\ChallengeController;
use App\Http\Controllers\Internal\Auth\LoginController;
use App\Http\Controllers\Internal\ServiceController;
use App\Http\Middleware\RequireVerifiedInternalAccess;
use App\Identity\SyntheticDatabaseGuard;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;

Route::get('/', static fn () => response()->view('welcome', ['month' => now(config('app.timezone'))->startOfMonth()]));

// The target check precedes web middleware because sessions and rate limits use the database.
Route::middleware([\App\Http\Middleware\EnsureSyntheticInternalAvailable::class, 'web'])->prefix('internal')->name('internal.')->group(static function (): void {
    Route::get('/login', [LoginController::class, 'show'])->name('auth.login');
    Route::post('/login', [LoginController::class, 'store'])->name('auth.login.store');
    Route::get('/challenge', [ChallengeController::class, 'show'])->name('auth.challenge');
    Route::post('/challenge', [ChallengeController::class, 'store'])->name('auth.challenge.store');
    Route::post('/logout', [ChallengeController::class, 'logout'])->name('auth.logout');

    Route::middleware(RequireVerifiedInternalAccess::class)->prefix('services')->name('services.')->group(static function (): void {
        Route::get('/', [ServiceController::class, 'index'])->name('index');
        Route::get('/create', [ServiceController::class, 'create'])->name('create');
        Route::get('/{service}', [ServiceController::class, 'show'])->whereNumber('service')->name('show');
        Route::get('/{service}/edit', [ServiceController::class, 'edit'])->whereNumber('service')->name('edit');
        Route::post('/', [ServiceController::class, 'store'])->name('store');
        Route::put('/{service}', [ServiceController::class, 'update'])->whereNumber('service')->name('update');
    });
});
