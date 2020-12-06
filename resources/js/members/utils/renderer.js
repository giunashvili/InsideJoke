import { allMembersAPI } from '../utils/api';
import { beautifulLoader } from '../utils/helpers';
import memberItem from '../UI/member-item';
import newMemberForm from '../UI/new-member-form';
import { mainWindowBackup } from '../UI/helper-items';
import { editPhotoBtn } from '../utils/imgs';
import { 
    backButton,
    mainWindow,
    memberFrame, 
    addNewMemberButton,
    createNewMemberButton,
} from '../UI/elements';
import { createNewMember } from '../utils/actions';

export function renderMembers(){
    
    fetch(allMembersAPI)
        .then( result => result.json() )
        .then( data => {
            const members = data
                .map((el) => {
                    el.img === null && (el.img = editPhotoBtn);
                    return memberItem(el.img, el.name, el.color);
                })
                .join(' ');
            
            memberFrame().innerHTML = members;
        })
        .catch(error => console.log(error));
}

export function reRenderMembers(){

    const paginationSpace = mainWindow();
    const backup = mainWindowBackup();
    paginationSpace.innerHTML = backup;

    beautifulLoader();
    renderMembers();
    addNewMemberButton().addEventListener('click', renderNewMemberForm);
}

export function renderNewMemberForm(){

    const paginationSpace = mainWindow();
    const form = newMemberForm();
    
    paginationSpace.innerHTML = form; 

    createNewMemberButton().addEventListener('click', createNewMember);
    backButton().addEventListener('click', reRenderMembers);
}


