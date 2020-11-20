import { allMembersAPI } from '../utils/api';
import { mainMembers } from '../utils/helpers'; /*** ახლა არსად ვიყენებ, მაგრამ იყოს ჯერ ***/
import memberItem from '../UI/member-item';
import newMemberForm from '../UI/new-member-form.js'
import { editPhotoBtn } from '../utils/imgs';
import { memberFrame } from '../UI/elements';

export function renderMembers(){
    
    fetch(allMembersAPI)
        .then( result => result.json() )
        .then( data => {
            const members = data
                .map((el) => {
                    el.img === null && (el.img = editPhotoBtn);
                    return memberItem(el.img, el.name);
                })
                .join(' ');
            
            memberFrame().innerHTML = members;

});
}

export function renderNewMemberForm(){

        /*
         * 1) Render Form Itself
         */
        const paginationSpace = memberFrame();
        const form = newMemberForm();
        
        paginationSpace.innerHTML = form; 
    
        /*
         * 2) CHANGE page header
         */
    
        //  const header = document.getElementsByClassName('social-links-header')[0];
        //  header.innerHTML = 'დაამატე ახალი სოციალური ბმული';
    
         /*
          * 3) HIDE 'დაამატე ახალი სოციალური ბმული' button
          */
//          const createSocialLinkbtn = document.getElementsByClassName('add-button')[0];
//          createSocialLinkbtn.classList.add('hidden');
}


