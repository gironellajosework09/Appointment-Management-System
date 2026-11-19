@extends('layouts.internal')

@section('title', 'Edit '.$service->name)

@section('content')
<section aria-labelledby="edit-service-title" class="mx-auto w-full max-w-2xl px-5 py-8 sm:py-12">
    <p class="text-sm"><a class="underline" href="{{ route('internal.services.show', $service) }}">Back to the service</a></p>
    <h1 id="edit-service-title" class="mt-3 text-3xl font-bold tracking-tight">Edit service</h1>
    <p class="mt-3 text-base">Change the name of this service. Leading and trailing spaces will be removed.</p>

    @if ($errors->any())
        <div class="mt-6 rounded-lg border border-red-800 bg-red-50 p-4 text-red-950" role="alert" aria-labelledby="service-error-title">
            <h2 id="service-error-title" class="font-bold">Check the service details</h2>
            <p class="mt-1"><a class="underline" href="#service-name">Review the service name error</a></p>
        </div>
    @endif

    <form method="POST" action="{{ $action }}" class="mt-6 space-y-5">
        @csrf
        @method('PUT')
        <div>
            <label for="service-name" class="block font-semibold">Service name <span aria-hidden="true">*</span></label>
            <p id="service-name-hint" class="mt-1 text-sm">Required. Up to 120 characters. Duplicate names are allowed.</p>
            <input id="service-name" name="name" type="text" value="{{ old('name', $service->name) }}" required maxlength="120"
                class="mt-2 block w-full rounded-md border border-slate-700 bg-white px-3 py-2 text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900"
                aria-describedby="service-name-hint @error('name') service-name-error @enderror"
                @error('name') aria-invalid="true" @enderror>
            @error('name')
                <p id="service-name-error" class="mt-2 font-semibold text-red-900">{{ $message }}</p>
            @enderror
        </div>
        <button type="submit" class="btn btn-primary min-h-11">Save changes</button>
    </form>

    <p class="mt-3 text-sm"><a class="underline" href="{{ route('internal.services.show', $service) }}">Cancel and return to the service</a></p>
</section>
@endsection
