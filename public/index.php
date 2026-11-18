<?php

declare(strict_types=1);

use App\Foundation\Context;
use Illuminate\Contracts\Http\Kernel;
use Illuminate\Foundation\Bootstrap\LoadEnvironmentVariables;
use Illuminate\Http\Request;

ini_set('display_errors', '0');
require __DIR__.'/../app/Foundation/Context.php';

$value = static fn (string $key): ?string => ($result = getenv($key)) === false ? null : $result;

if (! Context::isSafe($value('ITAKDA_CONTEXT'), $value('APP_ENV'), $value('APP_DEBUG'))) {
    http_response_code(503);
    header('Content-Type: text/plain; charset=UTF-8');
    echo 'Local foundation unavailable.';

    return;
}

try {
    putenv('PAO_DISABLE=1');
    require __DIR__.'/../vendor/autoload.php';
    $app = require __DIR__.'/../bootstrap/app.php';
    // An environment file can change the resolved cache path.
    (new LoadEnvironmentVariables())->bootstrap($app);
    $app->forgetInstance('config_loaded_from_cache');
    if ($app->configurationIsCached()) {
        throw new RuntimeException('Cached configuration is unavailable in this foundation.');
    }
    $request = Request::capture();
    $app->instance('request', $request);
    $app->make(Kernel::class)->bootstrap();
    $app->handleRequest($request);
} catch (Throwable) {
    http_response_code(503);
    header('Content-Type: text/plain; charset=UTF-8');
    echo 'Local foundation unavailable.';
}
