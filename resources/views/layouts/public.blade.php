<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <meta name="description" content="An introduction to iTakda, an appointment management platform in development.">
    <title>@yield('title', 'iTakda')</title>
    @vite('resources/css/app.css')
</head>
<body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
        <a class="brand" href="#top" aria-label="iTakda home"><img src="/itakda-prototype-icon.svg" alt="" width="42" height="42"><span>iTakda</span></a>
        <nav class="nav-links" aria-label="Page navigation">
            <a href="#how-it-works">How it works</a>
            <a href="#availability">Availability</a>
        </nav>
    </header>
    <main id="main">@yield('content')</main>
    <footer class="wrap footer">iTakda · Public UI foundation</footer>
</body>
</html>
