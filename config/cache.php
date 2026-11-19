<?php

declare(strict_types=1);

return [
    'default' => 'database',
    'stores' => [
        'database' => [
            'driver' => 'database',
            'connection' => null,
            'table' => 'cache',
            'lock_connection' => null,
            'lock_table' => 'cache_locks',
        ],
    ],
    'prefix' => 'itakda_internal_',
];
