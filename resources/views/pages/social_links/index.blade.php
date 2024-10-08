<html>
    <head>
        <title>Dashboard</title>
        <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/soclinks.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/add.soclink.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/fonts.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/change.slinkicon.css') }}" />
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,100italic,300italic,400italic,500italic,500,700,700italic,900,900italic' rel='stylesheet' type='text/css' />
    </head>
    <body> 
        @include('layouts.navbar') 
        @include('layouts.modal')
        <div class="main-window">
            <h1>
                <span class="social-links-header">სოციალური ბმულები</span>
            </h1>
            <div class="scroll-space">
               <img 
                    src="{{ asset('assets/imgs/loader.gif') }}"
                    style="width:440px; display:block; margin:auto"
                />
            </div>
            <div class="add-button" onclick="newSocialLink()">დაამატე ახალი სოციალური ბმული</div>
        </div>
    </body>
</html>

<script src="{{ asset('assets/js/social_links.js') }}"></script>
