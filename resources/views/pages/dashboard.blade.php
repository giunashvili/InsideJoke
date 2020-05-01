<html>
    <header>
        <title>Dashboard</title>
        <link rel="stylesheet" href="{{ asset('assets/css/dashboard.css') }}" />
        <link rel="stylesheet" href={{ asset('assets/css/fonts.css') }} />
    </header>
    <body>
        @include('layouts.navbar')   
        <div class="main-window">
            <span>დილამშვიდობისა!</span>
            <img src="{{ asset('assets/imgs/TV.png') }}" />
        </div>
    </body>
</html>