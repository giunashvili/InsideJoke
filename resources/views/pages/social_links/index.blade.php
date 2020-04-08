<html>
    <head>
        <title>Social Links</title>
    <head>
    <body>

    @foreach($social_links as $social_link)
        <a href="{{ $social_link -> link }}" target="_blank">     
            <div class="social-links">
                <p>{{ $social_link -> name }} </p>
                <img src="{{ $social_link -> img }}" />
            </div>
        </a>
    @endforeach

    <body>
</html>


<style>
    
    .social-links{
        width: 15%;
        margin-left: 40%;
        background-color: rgb(253,211,0);
        text-align: center;
        padding: 10px;
        margin-top: 10px;
        margin-bottom: 10px;
        border: 2px solid lightyellow;
        border-radius: 5%;
    }

    .social-links img{
        width: 45px;
        height: 45px;
    }
</style>