@extends('layouts.public')

@section('title', 'iTakda · Plan a visit')

@section('content')
<div id="top">
    <section class="landing-hero" aria-labelledby="hero-title">
        <div class="landing-hero-copy">
            <p class="eyebrow">A clearer way to plan a visit</p>
            <h1 id="hero-title">Booked your way,<br><span>every time.</span></h1>
            <p>iTakda is being built to make finding and managing appointments simpler.</p>
            <a class="btn" href="#how-it-works">Explore how it works <span aria-hidden="true">↗</span></a>
        </div>
        <figure class="landing-hero-art">
            <div class="art-scene" aria-hidden="true">
                <div class="art-calendar">
                    <span class="art-kicker">Your next visit</span>
                    <strong>{{ $month->format('F Y') }}</strong>
                    <div class="art-grid">
                        <span>M</span><span>T</span><span>W</span><span>T</span><span>F</span><span>S</span><span>S</span>
                        @for ($blank = 1; $blank < $month->isoWeekday(); $blank++)
                            <span></span>
                        @endfor
                        @for ($day = 1; $day <= $month->daysInMonth; $day++)
                            <span @class(['selected' => $day === 1])>{{ $day }}</span>
                        @endfor
                    </div>
                    <div class="art-calendar-footer"><span>10:30 AM</span><span>Example time</span></div>
                </div>
                <div class="art-appointment"><span>A time that fits</span><strong>{{ $month->format('D, j M') }}</strong><small>Appointment illustration</small></div>
                <img class="art-hand" src="/hologram-hand-layer-v2.webp" width="1200" height="800" alt="">
            </div>

        </figure>
    </section>
    <div class="wrap">
    <section class="content-section" id="how-it-works" aria-labelledby="how-title">
        <div><p class="eyebrow">Made for clarity</p><h2 id="how-title">A simpler path to your next visit.</h2><p>The intended journey brings the details together so you can make an informed choice.</p></div>
        <ol class="visit-steps"><li><span>01</span>Choose a service</li><li><span>02</span>Find an available time</li><li><span>03</span>Review your details</li></ol>
    </section>
    <div id="availability">
        <x-status heading-id="availability-title" label="Currently in development" heading="Booking is not available yet">
            Online booking and sign-in are not operational. This page is an introduction only; it does not show live services or appointment availability.
        </x-status>
    </div>
</div>
</div>
@endsection
