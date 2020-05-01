<html>
    <header>
        <title>Dashboard</title>
        <link rel="stylesheet" href="{{ asset('assets/css/navbar.css') }}" />
        <link rel="stylesheet" href={{ asset('assets/css/fonts.css') }} />
    </header>
    <body> 
        <nav>
            <a href="{{ route('dashboard') }}">
                <div class="nav-item"> 
                    <img src="{{ asset('assets/icons/home.png') }}" />
                    <span>მთავარი</span>
                </div>
            </a>
            <a href="{{ route('members') }}">
                <div class="nav-item"> 
                    <img src="{{ asset('assets/icons/members.png') }}" />
                    <span>ჯგუფის წევრები</span>
                </div>
            </a>
            <a href="{{ route('social-links') }}">
                <div class="nav-item"> 
                    <img src="{{ asset('assets/icons/youtube.png') }}" />
                    <span>სოციალური ბმულები</span>
                </div>
            </a>
            <a href="{{ route('dashboard') }}">
                <div class="nav-item"> 
                    <img src="{{ asset('assets/icons/violinkey.png') }}" />
                    <span>ბენდის შესახებ</span>
                </div>
            </a>
            <a href="{{ route('login') }}">
                <div class="nav-item"> 
                    <img src="{{ asset('assets/icons/logout.png') }}" />
                    <span>გადი გარეთ</span>
                </div>
            </a>   
        </nav>
    </body>
</html>