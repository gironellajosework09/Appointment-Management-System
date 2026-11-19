@extends('layouts.internal')

@section('title', 'Service outcome unavailable')

@section('content')
<section aria-labelledby="outcome-title" class="mx-auto w-full max-w-2xl px-5 py-8 sm:py-12">
    <h1 id="outcome-title" class="text-3xl font-bold tracking-tight">Service outcome unavailable</h1>
    <p class="mt-4">The result could not be confirmed. Do not submit the same service again until the outcome has been checked.</p>
    <p class="mt-4"><a class="underline" href="{{ route('internal.services.index') }}">View services</a></p>
</section>
@endsection
