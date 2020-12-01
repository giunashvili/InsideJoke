
export function beautifulLoader(){
    const mainWindow = document.querySelector('.pagination-space');
    const loader = `
        <img 
        src="/assets/imgs/loader.gif"
        style="width:440px; display:block; margin:auto"
        />
        `
    mainWindow.innerHTML = loader;
}