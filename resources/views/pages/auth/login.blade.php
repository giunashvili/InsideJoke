<html>
    <head>
        <title>Log In</title>
        <link rel="stylesheet" href="{{ asset('assets/css/register_login.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/fonts.css') }}" />
    </head>
    <body class="body">
        <div class="register-login-box">
            <div class="heading">
                <img class="rectangle" src=" {{ asset('assets/imgs/rectangle.png') }} " />
                <span class="heading-title">კარიბჭე</span>
        </div>
        <form method="POST" action="{{ route('login') }}">
            @csrf
            <input type="text" placeholder="მეტსახელი" class="input" name="name"/>
            <input type="password" placeholder="პაროლი" class="input" name="password"/>
            <input type="submit" value="შემობრძანდი" class="input-btn" />
            
            @if(session('status') && session('status') == 404)
                <!-- here should be displayed message that there is no matching user -->
                <p style="color:red; text-shadow:1px 1px 1px #000; " align="center">მსგავსი ჩანაწერი არ მოიძებნა!</p>
            @endif
        </form>
        </div>
    </body>
</html>