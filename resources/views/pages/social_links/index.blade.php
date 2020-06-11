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
                @for( $i=0; $i<count($social_links); $i++)
                <div class="main-container">
                    <div class="icon-box">
                        <img class="icon" src="{{ $social_links[$i]['img'] }}" />
                        <img class="icon-edit" src="{{ asset('assets/icons/Edit Photo btn.svg') }}" />
                    </div>
                    <div class="name"> {{ $social_links[$i]['name'] }} </div>
                    <a href="{{ $social_links[$i]['link'] }}" target="_blank"> {{ $social_links[$i]['link_shortened'] }} </a>
                    <div class="edit">
                        <div class="edit-outer"></div>
                        <div class="edit-inner"></div>
                    </div>
                    <div class="delete">
                        <div class="delete-outer"></div>
                        <div class="delete-inner"></div>
                    </div>
                </div>
                @endfor
            </div>
            <div class="add-button">დაამატე ახალი სოციალური ბმული</div>
        </div>
    </body>
</html>