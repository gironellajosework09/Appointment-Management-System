<?php

use Illuminate\Foundation\Application;

$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(using: static function (): void {
        require dirname(__DIR__).'/routes/web.php';
    })
    ->withExceptions()
    ->create();

$app->dontMergeFrameworkConfiguration();

return $app;
