<html>
    <head>
        <title>Dashboard</title>
        <link rel="stylesheet" href="{{ asset('assets/css/main.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/soclinks.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/add.soclink.css') }}" />
        <link rel="stylesheet" href="{{ asset('assets/css/fonts.css') }}" />
        <link href='http://fonts.googleapis.com/css?family=Roboto:400,100,300,100italic,300italic,400italic,500italic,500,700,700italic,900,900italic' rel='stylesheet' type='text/css' />
    </head>
    <body>
        @include('layouts.navbar')  
        <div class="main-window">
            <h1>
                <span>სოციალური ბმულები</span>
            </h1>
            <div class="scroll-space">
               {{-- <img 
                    src="https://i.pinimg.com/originals/51/77/40/5177402f9a223466db995ed7c25a6311.gif"
                    style="width:440px; display:block; margin:auto"
                />        --}}
            <form>

                <input type="text" id=addNewSoclinkName name="addNewSoclinkName" placeholder="ბმულის სათაური"><br>
                <input type="url" id=addNewSoclinkURL name="addNewSoclinkURL" placeholder="ბმული"><br>
                <input type="submit" value="დაამატე სოციალური ბმული">

            </form>

            </div>
            {{-- <div class="add-button">დაამატე ახალი სოციალური ბმული</div> --}}
        </div>
    </body>
</html>

<script>
    window.onload = function() {

        return;

        const socialLinksContainer = document.getElementsByClassName('scroll-space')[0];
        let socialLinks = '';

        fetch('/api/social_link/all')
            .then( result => result.json() )
            .then( data => {

               console.log(data);

                for(i=0; i<data.length; i++)
                {

                socialLinks +=  `
                <div class="main-container">
                    <div class="icon-box">
                        <img class="icon" src="${data[i].img}" />
                        <img class="icon-edit" src="{{ asset('assets/icons/Edit Photo btn.svg') }}" />
                    </div>
                    <div class="name"> ${data[i].name} </div>
                    <a href="${data[i].link}" target="_blank"> ${data[i].linkshortened} </a>
                    <div class="edit">
                        <div class="edit-outer"></div>
                        <div class="edit-inner"></div>
                    </div>
                    <div class="delete">
                        <div class="delete-outer"></div>
                        <div class="delete-inner"></div>
                    </div>
                </div>
                `;
            }
            
            socialLinksContainer.innerHTML = socialLinks;
    });
    }
</script>