@extends('layouts.internal')

@section('title', 'Services')

@section('content')
<section aria-labelledby="services-title" class="mx-auto w-full max-w-3xl px-5 py-8 sm:py-12">
    <div class="flex flex-wrap items-start justify-between gap-4">
        <div>
            <h1 id="services-title" class="text-3xl font-bold tracking-tight">Services</h1>
            <p class="mt-3 text-base">Services configured for this installation.</p>
        </div>
        @if (! empty($createUrl))
            <a class="btn btn-primary min-h-11" href="{{ $createUrl }}">Create a service</a>
        @endif
    </div>

    @if (! empty($statusMessage))
        <p class="mt-6 rounded-lg border border-emerald-800 bg-emerald-50 p-4 text-emerald-950" role="status">{{ $statusMessage }}</p>
    @endif

    @forelse ($services as $service)
        @if ($loop->first)
            <ul class="mt-8 space-y-3" aria-label="Configured services">
        @endif
            <li class="rounded-lg border border-slate-300 bg-white p-4 text-slate-950">
                <span class="font-semibold">{{ $service->name }}</span>
                <span class="mt-3 block text-sm">
                    <a class="underline" href="{{ route('internal.services.show', $service) }}" aria-label="View {{ $service->name }}">View</a>
                    @if (! empty($canEdit))
                        <a class="underline" href="{{ route('internal.services.edit', $service) }}" aria-label="Edit {{ $service->name }}">Edit</a>
                    @endif
                </span>
            </li>
        @if ($loop->last)
            </ul>
        @endif
    @empty
        <p class="mt-8 rounded-lg border border-slate-300 bg-white p-4 text-slate-950">No services have been created yet.</p>
    @endforelse
</section>

@endsection
