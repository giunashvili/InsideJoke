import { allMembersAPI } from '../utils/api';
import { mainMembers } from '../utils/helpers'; /*** ახლა არსად ვიყენებ, მაგრამ იყოს ჯერ ***/
import memberItem from '../UI/member-item';
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