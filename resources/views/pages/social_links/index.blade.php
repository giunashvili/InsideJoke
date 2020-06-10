<html>
    <header>
        <title>Dashboard</title>
        <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/soclinks.css') }}" />
        <link rel="stylesheet" href={{ asset('assets/css/fonts.css') }} />
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,100italic,300italic,400italic,500italic,500,700,700italic,900,900italic' rel='stylesheet' type='text/css' />
    </header>
    <body>
        @include('layouts.navbar')  
        <div class="main-window">
            <h1>
                <span>სოციალური ბმულები</span>
            </h1>
            <div class="scroll-space">
                @foreach($social_links as $social_link)
                <div class="main-container">
                    <div class="icon-box">
                        <img class="icon" src="{{ $social_link -> img }}" />
                        <img class="icon-edit" src="{{ asset('assets/icons/Edit Photo btn.svg') }}" />
                    </div>
                    <div class="name"> {{ $social_link -> name }} </div>
                    <a> {{ $links_links }} </a>
                    <div class="edit">
                        <div class="edit-outer"></div>
                        <div class="edit-inner"></div>
                    </div>
                    <div class="delete">
                        <div class="delete-outer"></div>
                        <div class="delete-inner"></div>
                    </div>
                </div>
                @endforeach
            </div>
            <div class="add-button">დაამატე ახალი სოციალური ბმული</div>
        </div>
    </body>
</html>