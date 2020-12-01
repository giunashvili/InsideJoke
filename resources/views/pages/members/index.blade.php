<html>
    <head>
        <title>Dashboard</title>
        <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/members.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/add.member.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/fonts.css') }}" />
    </head>
    <body> 
        @include('layouts.navbar') 
        <div class="main-window" id="main-window-members">
            <h1>
                <span class="page-header">ჯგუფის წევრები</span>
            </h1>
            <div class="pagination-space">
               <img 
                    src="{{ asset('assets/imgs/loader.gif') }}"
                    style="width:440px; display:block; margin:auto"
                />
            </div>
            <div class="add-button" id="add-new-member-button">ახალი წევრი გვყავს?</div>
        </div>
    </body>
</html>

<script src="{{ asset('assets/js/members.js') }}"></script>
