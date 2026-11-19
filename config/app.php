<?php

return [
    'name' => 'iTakda',
    'env' => getenv('APP_ENV'),
    'debug' => false,
    'timezone' => 'UTC',
    'locale' => 'en',
    'fallback_locale' => 'en',
    'key' => getenv('APP_KEY') ?: null,
    'cipher' => 'AES-256-CBC',
];
