@extends('layouts.internal')

@section('title', 'Verify your identity')

@section('content')
<section aria-labelledby="mfa-title" class="mx-auto w-full max-w-md px-5 py-8 sm:py-12">
    <h1 id="mfa-title" class="text-3xl font-bold tracking-tight">Verify your identity</h1>
    <p id="mfa-hint" class="mt-3">Enter the current code from your assigned authenticator. You can paste the code.</p>

    @if ($errors->any())
        <div class="mt-6 rounded-md border border-red-800 bg-red-50 p-4 text-red-950" role="alert">
            <p>Verification could not be completed. Check the code and try again.</p>
        </div>
    @endif

    <form method="POST" action="{{ $action }}" class="mt-6 space-y-5">
        @csrf
        <div>
            <label for="mfa-code" class="block font-semibold">Verification code</label>
            <input id="mfa-code" name="code" type="text" inputmode="numeric" autocomplete="one-time-code" required aria-describedby="mfa-hint"
                class="mt-2 block w-full rounded-md border border-slate-700 bg-white px-3 py-2 text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900">
        </div>
        <button type="submit" class="btn btn-primary min-h-11">Verify</button>
    </form>
</section>
@endsection
