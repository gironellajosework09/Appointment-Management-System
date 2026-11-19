<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Http\Requests\StoreServiceRequest;
use Illuminate\Translation\ArrayLoader;
use Illuminate\Translation\Translator;
use Illuminate\Validation\Factory;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use ReflectionMethod;

final class StoreServiceRequestTest extends TestCase
{
    private function preparedRequest(mixed $name): StoreServiceRequest
    {
        $request = StoreServiceRequest::create('/', 'POST', ['name' => $name]);
        (new ReflectionMethod(StoreServiceRequest::class, 'prepareForValidation'))->invoke($request);

        return $request;
    }

    public function test_trims_name_and_denies_unauthenticated_requests(): void
    {
        $request = $this->preparedRequest('  Example service  ');

        self::assertSame('Example service', $request->input('name'));
        self::assertFalse($request->authorize());
    }

    #[DataProvider('names')]
    public function test_name_validation(mixed $name, bool $valid): void
    {
        $request = $this->preparedRequest($name);
        $validator = (new Factory(new Translator(new ArrayLoader(), 'en')))
            ->make($request->all(), $request->rules());

        self::assertSame($valid, $validator->passes());
    }

    public static function names(): array
    {
        return [
            'valid' => ['Dental service', true],
            'at maximum' => [str_repeat('a', 120), true],
            'over maximum' => [str_repeat('a', 121), false],
            'empty' => ['', false],
            'whitespace only' => ['  ', false],
            'array rejected' => [['name'], false],
        ];
    }
}
