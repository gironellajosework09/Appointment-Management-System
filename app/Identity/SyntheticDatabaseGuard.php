<?php

declare(strict_types=1);

namespace App\Identity;

use Illuminate\Support\Facades\DB;
use RuntimeException;

final class SyntheticDatabaseGuard
{
    public function assertTarget(): void
    {
        $expected = match (config('app.env')) {
            'local' => ['database' => 'itakda_dev_synthetic', 'port' => 23371, 'hostname' => 'a2438b050118'],
            'testing' => ['database' => 'itakda_test_synthetic', 'port' => 23372, 'hostname' => '3720417d0b4d'],
            default => throw new RuntimeException('Synthetic database target unavailable.'),
        };

        $name = config('database.default');
        $settings = is_string($name) ? config('database.connections.'.$name) : null;
        if (! is_array($settings)
            || ($settings['driver'] ?? null) !== 'mysql'
            || ($settings['host'] ?? null) !== '127.0.0.1'
            || (string) ($settings['port'] ?? '') !== (string) $expected['port']
            || ($settings['database'] ?? null) !== $expected['database']
            || ! empty($settings['url']) || ! empty($settings['unix_socket'])
            || ! empty($settings['read']) || ! empty($settings['write'])) {
            throw new RuntimeException('Synthetic database target unavailable.');
        }

        // Connection identity must match the reviewed container, not just its name or port.
        $identity = DB::connection($name)->selectOne('SELECT DATABASE() AS database_name, @@hostname AS server_hostname');
        if (! $identity || ($identity->database_name ?? null) !== $expected['database'] || ($identity->server_hostname ?? null) !== $expected['hostname']) {
            throw new RuntimeException('Synthetic database target unavailable.');
        }
    }
}
