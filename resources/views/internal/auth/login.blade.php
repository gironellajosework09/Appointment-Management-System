@extends('layouts.internal')

@section('title', 'Administrator sign in')

@section('content')
<section aria-labelledby="sign-in-title" class="mx-auto w-full max-w-md px-5 py-8 sm:py-12">
    <h1 id="sign-in-title" class="text-3xl font-bold tracking-tight">Administrator sign in</h1>
    <p class="mt-3">Sign in with your assigned credentials. You will then be asked to verify your identity.</p>

    @if ($errors->any())
        <div class="mt-6 rounded-md border border-red-800 bg-red-50 p-4 text-red-950" role="alert">
            <p>Sign in could not be completed. Check your details and try again.</p>
        </div>
    @endif

    <form method="POST" action="{{ $action }}" class="mt-6 space-y-5">
        @csrf
        <div>
            <label for="identity" class="block font-semibold">Account</label>
            <input id="identity" name="identity" type="text" value="{{ old('identity') }}" required autocomplete="username"
                class="mt-2 block w-full rounded-md border border-slate-700 bg-white px-3 py-2 text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900">
        </div>
        <div>
            <label for="password" class="block font-semibold">Password</label>
            <input id="password" name="password" type="password" required autocomplete="current-password"
                class="mt-2 block w-full rounded-md border border-slate-700 bg-white px-3 py-2 text-slate-950 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-900">
        </div>
        <button type="submit" class="btn btn-primary min-h-11">Continue</button>
    </form>
</section>
@endsection
