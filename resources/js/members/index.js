import { addNewMemberButton } from './UI/elements';
import { 
    renderNewMemberForm, 
    renderMembers, 
} from './utils/renderer';
import { setMemberBackground } from './utils/actions';

window.onload = function() {
    renderMembers(); 
    // addNewMemberButton().addEventListener('click', renderNewMemberForm);


    addNewMemberButton().addEventListener('click', setMemberBackground);






    // document.addEventListener('DOMContentLoaded', function(){
    //     console.log('ფერის შეცვლას ვაპირებ');
    //     const memberPictures = document.getElementsByClassName('member-picture');
    //     console.log(memberPictures);
    //     const memberPicturesArrayForBackground = Array.from(memberPictures);
    //     console.log(memberPicturesArrayForBackground);
    //     memberPicturesArrayForBackground.forEach((memberPictureForBackground) => memberPictureForBackground.style.backgroundColor = 'red');

    // })

    // setMemberBackground();

    // $.when($.ajax(renderMembers())).then(function () {

    //     setMemberBackground;
    
    // });

}
// window.onload = setTimeout(setMemberBackground, 1000);