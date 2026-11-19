@extends('layouts.internal')

@section('title', $service->name)

@section('content')
<section aria-labelledby="service-title" class="mx-auto w-full max-w-2xl px-5 py-8 sm:py-12">
    <p class="text-sm"><a class="underline" href="{{ route('internal.services.index') }}">Back to services</a></p>
    <h1 id="service-title" class="mt-3 text-3xl font-bold tracking-tight">{{ $service->name }}</h1>

    @if (! empty($statusMessage))
        <p class="mt-6 rounded-lg border border-emerald-800 bg-emerald-50 p-4 text-emerald-950" role="status">{{ $statusMessage }}</p>
    @endif

    <dl class="mt-6 space-y-3 rounded-lg border border-slate-300 bg-white p-4 text-slate-950">
        <div>
            <dt class="font-semibold">Service name</dt>
            <dd class="mt-1 text-base">{{ $service->name }}</dd>
        </div>
        <div>
            <dt class="font-semibold">Reference</dt>
            <dd class="mt-1 text-base">{{ $service->getKey() }}</dd>
        </div>
        <div>
            <dt class="font-semibold">Created</dt>
            <dd class="mt-1 text-base"><time datetime="{{ $service->created_at?->toIso8601String() }}">{{ $service->created_at?->toDayDateTimeString() }}</time></dd>
        </div>
        <div>
            <dt class="font-semibold">Last updated</dt>
            <dd class="mt-1 text-base"><time datetime="{{ $service->updated_at?->toIso8601String() }}">{{ $service->updated_at?->toDayDateTimeString() }}</time></dd>
        </div>
    </dl>

    @if ($canEdit)
        <p class="mt-6"><a class="btn btn-primary min-h-11" href="{{ route('internal.services.edit', $service) }}">Edit service</a></p>
    @endif
</section>
@endsection
