<?php

declare(strict_types=1);

namespace App\Http\Requests;

use Illuminate\Foundation\Http\FormRequest;
use Illuminate\Support\Facades\Gate;

final class UpdateServiceRequest extends FormRequest
{
    /** @var list<string> */
    private const ALLOWED_INPUT = ['name', '_token', '_method'];

    public function authorize(): bool
    {
        return $this->user() !== null && Gate::allows('service.update');
    }

    protected function prepareForValidation(): void
    {
        $name = $this->input('name');

        if (is_string($name)) {
            $this->merge(['name' => trim($name)]);
        }
    }

    public function rules(): array
    {
        $rules = ['name' => ['required', 'string', 'max:120']];

        // Only the service name is writable in this batch; reject anything else.
        foreach (array_diff(array_keys($this->all()), self::ALLOWED_INPUT) as $field) {
            $rules[$field] = ['prohibited'];
        }

        return $rules;
    }
}
