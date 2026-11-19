<?php

declare(strict_types=1);

namespace Tests;

use Illuminate\Foundation\Application;
use Illuminate\Foundation\Testing\TestCase as BaseTestCase;

abstract class TestCase extends BaseTestCase
{
    public function createApplication(): Application
    {
        // Deterministic synthetic-only defaults; real environment values take precedence.
        $defaults = [
            'APP_ENV' => 'testing',
            'APP_KEY' => 'base64:'.base64_encode(str_repeat('t', 32)),
            'ITAKDA_INSTALLATION_ID' => 'synthetic-http-test',
            'ITAKDA_INTERNAL_ENABLED' => 'true',
            'ITAKDA_SERVICE_ADMIN_ID' => '900001',
        ];
        foreach ($defaults as $name => $value) {
            if (getenv($name) === false || getenv($name) === '') {
                putenv($name.'='.$value);
            }
        }

        $app = require __DIR__.'/../bootstrap/app.php';
        // The application does not register framework testing providers; the test harness needs this one.
        $app->register(\Illuminate\Testing\ParallelTestingServiceProvider::class);
        $app->make(\Illuminate\Contracts\Console\Kernel::class)->bootstrap();

        return $app;
    }
}
