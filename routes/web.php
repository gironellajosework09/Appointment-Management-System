<?php

use Illuminate\Support\Facades\Route;

Route::get('/', static fn () => response('iTakda local foundation is ready.', 200)
    ->header('Content-Type', 'text/plain; charset=UTF-8'));
