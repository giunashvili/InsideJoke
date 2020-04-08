<html>
    <head>
        <title>Social Links</title>
    <head>
    <body>

    @for($i=0; $i < count($social_links); $i++)
        <a href="{{ $social_links[$i]['link'] }}" target="_blank">     
            <div class="social-links">
                <p>{{ $social_links[$i]['name'] }} </p>
                <img src="{{ $social_links[$i]['img'] }}" />
            </div>
        </a>
    @endfor

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
        height:: 45px;
    }
</style>