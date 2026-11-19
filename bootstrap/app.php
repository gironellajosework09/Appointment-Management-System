<?php

use Illuminate\Foundation\Application;

$app = Application::configure(basePath: dirname(__DIR__))
    ->withRouting(using: static function (): void {
        require dirname(__DIR__).'/routes/web.php';
    })
    ->withMiddleware(static function (\Illuminate\Foundation\Configuration\Middleware $middleware): void {})
    ->withExceptions()
    ->withCommands([App\Identity\ProvisionFirstAdministratorCommand::class])
    ->create();

$app->dontMergeFrameworkConfiguration();

return $app;
