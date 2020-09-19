<html>
  <head>
    <title>Inside Joke</title>
    <link rel="stylesheet" href="{{ asset('assets/css/fonts.css') }}" />
    <link rel="stylesheet" href="{{ asset('assets/css/landing.css') }}" />
  </head>
  <body>
    <header>
      @include('layouts.includes.landing.logo')
      @include('layouts.includes.landing.navbar')
    </header>
    <main>
      <section class="solar-system"></section>
      @include('layouts.includes.landing.about')
    </main>
  </body>
</html>