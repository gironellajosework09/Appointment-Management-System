<?php

declare(strict_types=1);

namespace Tests\Unit;

use App\Http\Requests\UpdateServiceRequest;
use Illuminate\Translation\ArrayLoader;
use Illuminate\Translation\Translator;
use Illuminate\Validation\Factory;
use PHPUnit\Framework\Attributes\DataProvider;
use PHPUnit\Framework\TestCase;
use ReflectionMethod;

final class UpdateServiceRequestTest extends TestCase
{
    private function preparedRequest(array $input): UpdateServiceRequest
    {
        $request = UpdateServiceRequest::create('/', 'PUT', $input);
        (new ReflectionMethod(UpdateServiceRequest::class, 'prepareForValidation'))->invoke($request);

        return $request;
    }

    public function test_trims_name_and_denies_unauthenticated_requests(): void
    {
        $request = $this->preparedRequest(['name' => '  Renamed service  ']);

        self::assertSame('Renamed service', $request->input('name'));
        self::assertFalse($request->authorize());
    }

    #[DataProvider('names')]
    public function test_name_validation(mixed $name, bool $valid): void
    {
        $request = $this->preparedRequest(['name' => $name]);
        $validator = (new Factory(new Translator(new ArrayLoader(), 'en')))
            ->make($request->all(), $request->rules());

        self::assertSame($valid, $validator->passes());
    }

    public static function names(): array
    {
        return [
            'valid' => ['Renamed service', true],
            'at maximum' => [str_repeat('a', 120), true],
            'over maximum' => [str_repeat('a', 121), false],
            'empty' => ['', false],
            'whitespace only' => ['  ', false],
            'array rejected' => [['name'], false],
        ];
    }

    public function test_unexpected_writable_fields_are_rejected(): void
    {
        $request = $this->preparedRequest(['name' => 'Renamed service', 'installation_id' => 'other']);
        $validator = (new Factory(new Translator(new ArrayLoader(), 'en')))
            ->make($request->all(), $request->rules());

        self::assertFalse($validator->passes());
        self::assertArrayHasKey('installation_id', $validator->errors()->toArray());
    }

    public function test_supported_csrf_and_method_fields_do_not_fail_validation(): void
    {
        $request = $this->preparedRequest(['name' => 'Renamed service', '_token' => 'token', '_method' => 'PUT']);
        $validator = (new Factory(new Translator(new ArrayLoader(), 'en')))
            ->make($request->all(), $request->rules());

        self::assertTrue($validator->passes());
    }
}
