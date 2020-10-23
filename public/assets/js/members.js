let mainMembers = null;

window.onload = function() {
    renderMembers(); 
};

function renderMembers(){

    let members = '';
    
    fetch('/api/members/all')
        .then( result => result.json() )
        .then( data => {

           mainMembers = data;

            for(i=0; i<data.length; i++)
            {

            let img = '/assets/icons/EditPhotoBtn.svg';

            if(data[i].img != null)
            {
                img = data[i].img;
            }

            members +=  `
            <div class="member-frame">
                    <div class="member-photo-and-name">
                        <div class="member-picture">
                            <div class="member-picture-inner" >
                                <img src="${img}" />
                            </div>
                            <img class="member-picture-edit" src="/assets/icons/EditPhotoBtn.svg" />
                        </div>
                        <div class="member-name"> ${data[i].name} </div>
                    </div>
                    <div class="member-frame-buttons-space">
                        <div class="view">
                            <div class="view-outer"></div>
                            <div class="view-inner"></div>
                        </div>
                        <div class="edit">
                            <div class="edit-outer"></div>
                            <div class="edit-inner"></div>
                        </div>
                        <div class="delete">
                            <div class="delete-outer"></div>
                            <div class="delete-inner"></div>
                        </div>
                    </div>
                </div>
            `;
        }

        const memberFrame = document.querySelector('.pagination-space');
        memberFrame.innerHTML = members;
});
}