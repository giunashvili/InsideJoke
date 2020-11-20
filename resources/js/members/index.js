import { renderMembers, renderNewMemberForm } from './utils/renderer';
import { addNewMemberButton } from './UI/elements';

console.log('აღვსრულდი');


window.onload = function() {
    renderMembers(); 
}

console.log('აღვსრულდი');

// სად ჩავსვა ეს ???
addNewMemberButton().addEventListener('click', renderNewMemberForm);  
