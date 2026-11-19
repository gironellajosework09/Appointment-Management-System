<?php

declare(strict_types=1);

// The target is fixed per local context. SyntheticDatabaseGuard verifies container identity before use.
$environment = getenv('APP_ENV');
$target = match ($environment) {
    'local' => ['port' => 23371, 'database' => 'itakda_dev_synthetic'],
    'testing' => ['port' => 23372, 'database' => 'itakda_test_synthetic'],
    default => null,
};
$credentialFile = getenv('ITAKDA_DB_CREDENTIAL_FILE');
$credentials = is_string($credentialFile) && $credentialFile !== '' ? @parse_ini_file($credentialFile, true, INI_SCANNER_RAW) : false;
$client = is_array($credentials) && isset($credentials['client']) && is_array($credentials['client']) ? $credentials['client'] : [];

return [
    'default' => 'synthetic',
    'connections' => [
        'synthetic' => [
            'driver' => 'mysql',
            'host' => '127.0.0.1',
            'port' => $target['port'] ?? 0,
            'database' => $target['database'] ?? '',
            'username' => $client['user'] ?? '',
            'password' => $client['password'] ?? '',
            'charset' => 'utf8mb4',
            'collation' => 'utf8mb4_unicode_ci',
            'prefix' => '',
            'strict' => true,
        ],
    ],
];
