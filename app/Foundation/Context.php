<?php

declare(strict_types=1);

namespace App\Foundation;

final class Context
{
    public static function isSafe(?string $context, ?string $environment, ?string $debug): bool
    {
        return in_array($context, ['local', 'testing'], true)
            && $context === $environment
            && in_array($debug, [null, '', 'false', '0'], true);
    }
}
