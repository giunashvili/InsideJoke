export default function ( img, name, color ) {
    return `
            <div class="member-frame">
                    <div class="member-photo-and-name" id="memberphotoandname">
                        <div class="member-picture" style="background-color:${color}">
                            <div class="member-picture-inner" >
                                <img class="member-picture-itself" src="${img}" />
                            </div>
                            <img class="member-picture-edit" src="/assets/icons/EditPhotoBtn.svg" />
                        </div>
                        <div class="member-name"> ${name} </div>
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