let mainSocialLinks = null;

window.onload = function () {
    renderSocialLinks(); 
};

function renderSocialLinks(){

    const socialLinksContainer = document.getElementsByClassName('scroll-space')[0];
    let socialLinks = '';

    fetch('/api/social_link/all')
        .then( result => result.json() )
        .then( data => {

           console.log(data);

           mainSocialLinks = data;

            for(i=0; i<data.length; i++)
            {

            let img = '/assets/icons/Edit Photo btn.svg';

            if(data[i].img != null)
            {
                img = data[i].img;
            }

            socialLinks +=  `
            <div class="main-container">
                <div class="icon-box">
                    <img class="icon" src="${img}" />
                    <img 
                        class="icon-edit" src="/assets/icons/Edit Photo btn.svg" 
                        onclick="openChangeSoclinkIconModal(${data[i].id})"
                    />
                </div>
                <div class="name"> ${data[i].name} </div>
                <a href="${data[i].link}" target="_blank"> ${data[i].linkshortened} </a>
                <div class="edit" onclick="editSocialLink(${data[i].id})">
                    <div class="edit-outer"></div>
                    <div class="edit-inner"></div>
                </div>
                <div class="delete" onclick="deleteSocialLink(${data[i].id})">
                    <div class="delete-outer"></div>
                    <div class="delete-inner"></div>
                </div>
            </div>
            `;
        }
        
        socialLinksContainer.innerHTML = socialLinks;

        
});
}

function newSocialLink() {

    /*
     * 1) REPLACE Social Links list with form
     */
    const socialLinksContainer = document.getElementsByClassName('scroll-space')[0];
    const form = `
    <form>
    <input type="text" id="addNewSoclinkName" name="addNewSoclinkName" placeholder="ბმულის სათაური"><br>
    <input type="url" id="addNewSoclinkURL" name="addNewSoclinkURL" placeholder="ბმული"><br>
    <input type="button" onclick="createNewSocialLink()" value="დაამატე სოციალური ბმული">
    </form> 
    `;
    
    socialLinksContainer.innerHTML = form; 

    /*
     * 2) CHANGE page header
     */

     const header = document.getElementsByClassName('social-links-header')[0];
     header.innerHTML = 'დაამატე ახალი სოციალური ბმული';

     /*
      * 3) HIDE 'დაამატე ახალი სოციალური ბმული' button
      */
     const createSocialLinkbtn = document.getElementsByClassName('add-button')[0];
     createSocialLinkbtn.classList.add('hidden');

}

function createNewSocialLink()
{
    const name = document.getElementById("addNewSoclinkName").value;
    const link = document.getElementById("addNewSoclinkURL").value;

    fetch('/api/social_link/create', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            link: link
        })
    })
    .then(response => response.json())
    .then(data => {

        /*
         * 1) REPLACE form with a list
         */
        renderSocialLinks();

        /*
         * 2) ADD "add" button
         */
        const createSocialLinkbtn = document.getElementsByClassName('add-button')[0];
        createSocialLinkbtn.classList.remove('hidden');

        /*
         * 3) CHANGE header
         */
        const header = document.getElementsByClassName('social-links-header')[0];
        header.innerHTML = 'სოციალური ბმულები';
    })
    .catch(err => console.log(err));
}


function openChangeSoclinkIconModal(id){
    console.log(id);
    console.log(mainSocialLinks);

    let selectedSocialLink = null;
    for(i=0; i<mainSocialLinks.length; i++){
        if(mainSocialLinks[i].id == id){
            selectedSocialLink = mainSocialLinks[i];
        }    
    }
    const socialLinkName = selectedSocialLink.name;
    console.log(socialLinkName);

    const modal = document.getElementById('uploadModal');
    const backgroundfilter = document.getElementById('bg-filter');

    modal.style.display='block';
    modal.style.zIndex='99999';
    backgroundfilter.style.display='block';
    backgroundfilter.style.zIndex='10';

    socialLinkNameInModal.innerHTML = socialLinkName;

}

function closeChangeSoclinkIconModal(){
    const modal = document.getElementById('uploadModal');
    const backgroundfilter = document.getElementById('bg-filter');

    modal.style.display='none';
    backgroundfilter.style.display='none';

}

function deleteSocialLink(id){
    const result = confirm("წაიშალოს სოციალური ბმული?")

    if(result)
    {
        beautifulLoader();

        fetch(`/api/social_link/${id}/delete`, {
            method: 'POST',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
        .then(data => data.json())
        .then(data => {
            alert('სოციალური ბმული წარმატებით წაიშალა!');
            renderSocialLinks();
        })
        .catch(err => console.log(err))
    }
}

function beautifulLoader(){
    const socialLinksContainer = document.getElementsByClassName('scroll-space')[0];
    const loader = `
        <img 
        src="https://i.pinimg.com/originals/51/77/40/5177402f9a223466db995ed7c25a6311.gif"
        style="width:440px; display:block; margin:auto"
        />
        `

    socialLinksContainer.innerHTML = loader;
}

function editSocialLink(id){

    /*
     * 1) REPLACE Social Links list with CHANGE form
     */
    const socialLinksContainer = document.getElementsByClassName('scroll-space')[0];

    let selectedSocialLink = null;
    for(i=0; i<mainSocialLinks.length; i++){
        if(mainSocialLinks[i].id == id){
            selectedSocialLink = mainSocialLinks[i];
        }    
    }
    const socialLinkName = selectedSocialLink.name;
    const socialLinkURL = selectedSocialLink.link;

    const form = `
    <form>
    <input type="text" id="addNewSoclinkName" name="addNewSoclinkName" placeholder="ბმულის სათაური" value="${socialLinkName}"><br>
    <input type="url" id="addNewSoclinkURL" name="addNewSoclinkURL" placeholder="ბმული" value="${socialLinkURL}"><br>
    <input type="button" id="saveBlueButton" value="შენახვა">
    </form> 
    `;
    
    socialLinksContainer.innerHTML = form; 

    document.getElementById("saveBlueButton").style.width = "calc( 130rem/16 )";

    console.log(socialLinkURL);

     /*
      * 2) HIDE 'დაამატე ახალი სოციალური ბმული' button
      */
     const createSocialLinkbtn = document.getElementsByClassName('add-button')[0];
     createSocialLinkbtn.classList.add('hidden');
    
}