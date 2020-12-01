import { reRenderMembers } from '../utils/renderer';

export function createNewMember()
{
    const name = document.getElementById("newMemberName").value;
    const type = document.getElementById("newMemberInstrument").value;
    const description = document.getElementById("memberDesc").value;
    const orbital_distance = document.getElementById("orbitWidth").value;
    const color = document.getElementById("memberColor").value;

    // აქ API უნდა გავიტანო მერე api.js-ში
    fetch('/api/members/create', {
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
    .then(data => {
        reRenderMembers();
    })
    .catch(err => console.log(err));
}
