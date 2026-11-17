<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Foundation\Context;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;

final class FoundationContextTest extends TestCase
{
    #[DataProvider('contexts')]
    public function test_only_explicit_matching_safe_contexts_are_accepted(
        ?string $context,
        ?string $environment,
        ?string $debug,
        bool $expected,
    ): void {
        self::assertSame($expected, Context::isSafe($context, $environment, $debug));
    }

    public static function contexts(): array
    {
        return [
            'local' => ['local', 'local', 'false', true],
            'testing' => ['testing', 'testing', '0', true],
            'unset debug' => ['local', 'local', null, true],
            'missing context' => [null, 'local', 'false', false],
            'missing environment' => ['local', null, 'false', false],
            'mixed contexts' => ['testing', 'local', 'false', false],
            'production' => ['production', 'production', 'false', false],
            'invalid context' => ['client', 'client', 'false', false],
            'debug enabled' => ['local', 'local', 'true', false],
            'unknown debug' => ['testing', 'testing', 'maybe', false],
        ];
    }
}
