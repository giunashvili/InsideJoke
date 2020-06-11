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
    <a href="{{ route('admin/soclinks') }}">
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