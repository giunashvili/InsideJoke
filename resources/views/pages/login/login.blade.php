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
        <form>
            <input type="text" placeholder="მეტსახელი" class="input"/>
            <input type="password" placeholder="პაროლი" class="input"/>
            <input type="submit" value="შემობრძანდი" class="input-btn"/>
        </form>
        </div>
    </body>

</html>