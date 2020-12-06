import { addNewMemberButton } from './UI/elements';
import { 
    renderNewMemberForm, 
    renderMembers, 
} from './utils/renderer';

window.onload = function() {
    renderMembers(); 
    addNewMemberButton().addEventListener('click', renderNewMemberForm);
}