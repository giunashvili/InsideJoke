/**
 * ამ წუთში ეს არსად მჭირდება, მაგრამ დამჭირდება და იყოს.
 */
export let mainMembers = null;

export function beautifulLoader(){
    const mainWindow = document.querySelector('#main-window-members');
    const loader = `
        <img 
        src="/assets/imgs/loader.gif"
        style="width:440px; display:block; margin:auto"
        />
        `

    mainWindow.innerHTML = loader;
}