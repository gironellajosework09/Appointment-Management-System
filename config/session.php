<?php

return [
    'driver' => 'array',
    'lifetime' => 120,
    'expire_on_close' => true,
    'encrypt' => false,
    'lottery' => [0, 100],
    'cookie' => 'itakda_local',
    'path' => '/',
    'domain' => null,
    'secure' => false,
    'http_only' => true,
    'same_site' => 'lax',
];
