<html>
    <head>
        <title>
            Inside Joke members
        </title>
    </head>
    <body>
        @foreach($members as $member)

        <div class="member-wrapper">
            <p>{{$member -> name}}</p>
            <p>{{$member -> type}}</p>
            <img src="{{$member -> img}}">
            <p>{{$member -> description}}</p>
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
