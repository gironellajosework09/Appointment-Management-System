<?php

declare(strict_types=1);

return [
    'defaults' => ['guard' => 'web'],
    'guards' => ['web' => ['driver' => 'session', 'provider' => 'internal_users']],
    'providers' => ['internal_users' => ['driver' => 'eloquent', 'model' => App\Models\User::class]],
];
