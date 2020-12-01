import { 
    addNewMemberButton
    } from './UI/elements';
import { 
    renderMembers, 
    renderNewMemberForm 
    } from './utils/renderer';

window.onload = function() {
    renderMembers(); 
    addNewMemberButton().addEventListener('click', renderNewMemberForm);
}






