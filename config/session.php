<?php

declare(strict_types=1);

return [
    'driver' => getenv('ITAKDA_INTERNAL_ENABLED') === 'true' ? 'database' : 'array',
    'connection' => null,
    'table' => 'sessions',
    'lifetime' => 120,
    'expire_on_close' => true,
    'encrypt' => getenv('ITAKDA_INTERNAL_ENABLED') === 'true',
    'lottery' => [0, 100],
    'cookie' => 'itakda_local',
    'path' => '/',
    'domain' => null,
    // Loopback-only HTTP in the synthetic local environment; production is prohibited.
    'secure' => false,
    'http_only' => true,
    'same_site' => 'lax',
];
