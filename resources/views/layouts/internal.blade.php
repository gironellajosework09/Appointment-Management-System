<!doctype html>
<html lang="en">
<head>
    <meta charset="utf-8">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>@yield('title') · iTakda</title>
    @vite('resources/css/app.css')
</head>
<body>
    <a class="skip-link" href="#main">Skip to content</a>
    <header class="site-header">
        <a class="brand" href="/" aria-label="iTakda home"><img src="/itakda-prototype-icon.svg" alt="" width="42" height="42"><span>iTakda</span></a>
    </header>
    <main id="main">@yield('content')</main>
    <footer class="wrap footer">iTakda</footer>
</body>
</html>
