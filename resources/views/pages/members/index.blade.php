<html>
    <head>
        <title>
            Inside Joke members
        </title>
    </head>
    <body>
        @foreach($datvebi as $jirafi)

        <div class="member-wrapper">
            <p>{{$jirafi -> name}}</p>
            <p>{{$jirafi -> type}}</p>
            <img src="{{$jirafi -> img}}">
            <p>{{$jirafi -> description}}</p>
        </div>
        @endforeach
    </body>
</html>

<style>
.member-wrapper{
    width: 40%;
    margin-left: 30%;
    background-color: azure;
    text-align: center;
    border: 1px solid black;
    margin-bottom: 10px;
    background-color: lightslategrey;
}

.member-wrapper img{
    width: 50px;
}
</style>
