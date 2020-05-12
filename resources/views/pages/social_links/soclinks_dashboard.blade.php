<html>
    <header>
        <title>Dashboard</title>
        <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/soclinks.css') }}" />
        <link rel="stylesheet" href={{ asset('assets/css/fonts.css') }} />
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
                    <div class="invisible-container">
                        <div class="icon-box">
                            <img class="icon" src="{{ $social_link -> img }}" />
                            <img class="icon-edit" src="{{ asset('assets/icons/Edit Photo btn.svg') }}" />
                        </div>
                        <div class="name"> {{ $social_link -> name }} </div>
                        <a href="{{ $social_link -> link }}" target="_blank"> 
                            <?php 
                                if (strlen($social_link['link']) > 41){
                                    echo substr($social_link['link'], 0, 40) . "..."; 
                                }
                                else{
                                    echo $social_link['link'];
                                }
                            ?>
                        </a>
                        <div class="edit-outer">
                            <div class="edit-inner"></div>
                        </div>
                        <div class="delete-outer">
                            <div class="delete-inner"></div>
                        </div>
                    </div>
                </div>
                @endforeach
            </div>
            <div class="add-button">დაამატე ახალი სოციალური ბმული</div>
        </div>
    </body>
</html>