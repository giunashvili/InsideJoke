<html>
  <head>
    <title>Inside Joke</title>
    <link rel="stylesheet" href="{{ asset('assets/css/fonts.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/landing.css') }}" />
    <meta />
  </head>
  <body>
    <header>
      @include('layouts.includes.landing.logo')
      @include('layouts.includes.landing.navbar')
    </header>
    <main>
      @include('layouts.includes.landing.solar-system')
      @include('layouts.includes.landing.about')
    </main>
    <script src="{{ asset('assets/js/landing.js') }}"></script>
  </body>
</html>