<?php

declare(strict_types=1);

return [
    'installation_id' => getenv('ITAKDA_INSTALLATION_ID') ?: null,
    'bootstrap_enabled' => getenv('ITAKDA_BOOTSTRAP_ENABLED') === 'true',
    'internal_enabled' => getenv('ITAKDA_INTERNAL_ENABLED') === 'true',
    'service_admin_id' => getenv('ITAKDA_SERVICE_ADMIN_ID') ?: null,
];
