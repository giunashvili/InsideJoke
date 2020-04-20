<html>
    <head>
        <title>Register</title>
        <link rel="stylesheet" href="{{ asset('assets/css/register.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/fonts.css') }}" />
    </head>
    <body class="body">
        <div class="register-box">
            <div class="heading">
                <img src=" {{ asset('assets/imgs/rectangle.png') }} " />
                <span class="heading-title">რეგისტრაცია</span>
        </div>
        <form>
            <input type="text" placeholder="სახელი" class="input"/>
            <input type="text" placeholder="გვარი" class="input"/>
            <input type="text" placeholder="მეტსახელი" class="input"/>
            <input type="email" placeholder="ელ. ფოსტა" class="input"/>
            <input type="password" placeholder="პაროლი" class="input"/>
            <input type="password" placeholder="გაიმეორეთ პაროლი" class="input"/>
            <input type="submit" value="დარეგისტრირდი" class="input-btn"/>
        </form>
        </div>
    </body>

</html>


