import { reRenderMembers } from '../utils/renderer';
import { addMemberAPI } from '../utils/api';

export function createNewMember()
{
    const name = document.getElementById("newMemberName").value;
    const type = document.getElementById("newMemberInstrument").value;
    const description = document.getElementById("memberDesc").value;
    const orbital_distance = document.getElementById("orbitWidth").value;
    const color = document.getElementById("memberColor").value;

    fetch(addMemberAPI, {
        method: 'POST',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({
            name: name,
            type: type,
            description: description,
            orbital_distance: orbital_distance,
            color: color
        })
    })
    .then(response => response.json())
    .then(() => reRenderMembers())
    .catch(err => console.log(err));
}

export function setMemberBackground(){
    const memberPictures = document.getElementsByClassName('member-picture');
    const memberPicturesArrayForBackground = Array.from(memberPictures);
    memberPicturesArrayForBackground.forEach(
        (memberPictureForBackground) => memberPictureForBackground.style.backgroundColor = 'red'
        );
}
