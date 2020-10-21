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

           mainSocialLinks = data;

            for(i=0; i<data.length; i++)
            {

            let img = '/assets/icons/EditPhotoBtn.svg';

            if(data[i].img != null)
            {
                img = data[i].img;
            }

            socialLinks +=  `
            <div class="main-container">
                <div class="icon-box">
                    <img class="icon" src="${img}" />
                    <img 
                        class="icon-edit" src="/assets/icons/EditPhotoBtn.svg" 
                        onclick="openChangeSoclinkIconModal(${data[i].id})"
                    />
                </div>
                <div class="name"> ${data[i].name} </div>
                <a href="${data[i].link}" target="_blank"> ${data[i].linkshortened} </a>
                <div class="edit" onclick="renderEditSocialLink(${data[i].id})">
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

        /*
        * HIDE "back button"
        */
       const backButton = document.querySelector('#back-button');
       backButton.classList.add('hidden');
//    })
});
}

function reRenderSocialLinks(){
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

        /*
        * 4) REMOVE "back button"
        */
        const backButton = document.querySelector('#back-button');
        backButton.classList.add('hidden');
    
}

function newSocialLink() {

    /*
     * 1) REPLACE Social Links list with form
     */
    const socialLinksContainer = document.getElementsByClassName('scroll-space')[0];
    const form = `
    <form>
    <input type="text" id="addNewSoclinkName" name="addNewSoclinkName" placeholder="ბმულის სათაური">
    <input type="url" id="addNewSoclinkURL" name="addNewSoclinkURL" placeholder="ბმული">
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

     /*
     * 4) Add "back button"
     */
     const backButton = document.querySelector('#back-button');
     backButton.classList.remove('hidden');
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
        reRenderSocialLinks();
    })
    .catch(err => console.log(err));
}


function openChangeSoclinkIconModal(id){

    setSocialLinkIdForPhotoChange(id);

    clearUploadedFiles();

    let selectedSocialLink = null;
    for(i=0; i<mainSocialLinks.length; i++){
        if(mainSocialLinks[i].id == id){
            selectedSocialLink = mainSocialLinks[i];
        }    
    }
    const socialLinkName = selectedSocialLink.name;
    const socialLinkImg = selectedSocialLink.img;
    const defaultIconForSlinks = `<img 
    src="/assets/icons/editPhotoBtn.svg" />`;

    const modal = document.getElementById('uploadModal');
    const backgroundfilter = document.getElementById('bg-filter');

    modal.style.display='block';
    modal.style.zIndex='99999';
    backgroundfilter.style.display='block';
    backgroundfilter.style.zIndex='10';

    socialLinkNameInModal.innerHTML = socialLinkName;

    // SHOW Relevant ICON
    const socialLinkIcon = document.querySelector('.slink-icon');
    socialLinkIcon.innerHTML = defaultIconForSlinks;
    if(socialLinkImg != null){
        socialLinkIcon.setAttribute('src', `${selectedSocialLink.img}`);
    }
    else{
        socialLinkIcon.setAttribute('src', `/assets/icons/editPhotoBtn.svg`);
    }
}

function setSocialLinkIdForPhotoChange(id){
    document.getElementById('social_link_id').setAttribute('value', id);    
}

function getSocialLinkIdForPhotoChange(){
    return document.getElementById('social_link_id').value; 
}

function clearUploadedFiles(){

        const imageFileElement = document.querySelector('#slink-img-upload');
        const files = imageFileElement.files;
        const uploadButton = document.querySelector('.upload-label');
    
        const blueForButton = '#143B52';
        const oldButtonName = `ატვირთე`;
    
        imageFileElement.value = "";
    
        if(files.length == 0){
            uploadButton.style.background = blueForButton;
            uploadButton.innerHTML = oldButtonName;
        }
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
        src="/assets/imgs/loader.gif"
        style="width:440px; display:block; margin:auto"
        />
        `

    socialLinksContainer.innerHTML = loader;
}

function renderEditSocialLink(id){

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
    <input type="text" id="editSoclinkName" name="editSoclinkName" placeholder="ბმულის სათაური" value="${socialLinkName}">
    <input type="url" id="editSoclinkURL" name="editSoclinkURL" placeholder="ბმული" value="${socialLinkURL}">
    <input type="button" id="saveBlueButton" value="შენახვა" onclick="editSocialLink(${id})">
    </form> 
    `;

    socialLinksContainer.innerHTML = form; 

    document.getElementById("saveBlueButton").style.width = "calc( 130rem/16 )";

     /*
      * 2) HIDE 'დაამატე ახალი სოციალური ბმული' button
      */
     const createSocialLinkbtn = document.getElementsByClassName('add-button')[0];
     createSocialLinkbtn.classList.add('hidden');
    
}

function editSocialLink(id){

    const name = document.getElementById('editSoclinkName').value;
    const link = document.getElementById('editSoclinkURL').value;

    const dataToSend = JSON.stringify({
        id: id,
        name: name,
        link: link,
    });

    fetch('/api/social_link/update', {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: dataToSend
    })
    .then(data => data.json())
    .then(data => {
        alert('სოციალური ბმული წარმატებით განახლდა!');
        beautifulLoader();
        renderSocialLinks();
        /*
         * ADD removed "add" button
         */
        const createSocialLinkbtn = document.getElementsByClassName('add-button')[0];
        createSocialLinkbtn.classList.remove('hidden');
    })
    .catch(err => console.log(err))
}

function changeImageInput(){

    const imageFileElement = document.querySelector('#slink-img-upload');
    const files = imageFileElement.files;
    const image = document.querySelector('.slink-icon');

    const uploadButton = document.querySelector('.upload-label');

    const greenForButton = '#53C02C';
    const newButtonName = `შენახვა`;

    if(files.length > 0){
        const file = files[0];
        const path = URL.createObjectURL(file);
        image.setAttribute('src', path);
        uploadButton.style.background = greenForButton;
        uploadButton.innerHTML = newButtonName;
    }
}

function uploadImgToServer(e){
    const imageFileElement = document.querySelector('#slink-img-upload');
    const files = imageFileElement.files;

    if(files.length > 0){
        e.preventDefault();
        const imageToSend = files[0];
        const id = getSocialLinkIdForPhotoChange();
        const data = new FormData;
        data.append('id', id);
        data.append('img', imageToSend);

        fetch('/api/social_link/upload-image', {
            method: 'POST',
            body: data
        })
        .then(result => result.json())
        .then(result => {
            alert('სურათი წარმატებით შეინახა!');
            closeChangeSoclinkIconModal();
            beautifulLoader();
            renderSocialLinks();
        })
        .catch(err => console.log(err))
    }
}
