<?php

use Illuminate\Support\Facades\Route;

Route::get('/', static fn () => response()->view('welcome', ['month' => now(config('app.timezone'))->startOfMonth()]));
