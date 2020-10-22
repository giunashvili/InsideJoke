/**
 * Global state accessible to 
 * everywhere.
 */
const state = {
  members: [],
  bandLogo: '',
  bandInfo: '',
}

/**
 * Frequently used elements.
 */
const main = {
  logo: document.querySelector('.information-panel .description .logo img'),
  description: document.querySelector('.information-panel .description p'),
  avatars: null,
  rotators: null,
  sun: null,
};


window.onload = async () => {
  await getMembers();
  await getBandInfo();
  setUpMainElements();
  setUpEventListeners.execute();

  for(let avatar of main.avatars) {
    avatar.addEventListener('click', selectPlanet.bind(null, avatar));
  }

  main.sun.addEventListener('click', displaySun);
}

/**
 * Select particular planet to see his/her info.
 */
const selectPlanet = (selectedAvatar) => {
  const memberId = selectedAvatar.querySelector('.member-id').value;

  for(let avatar of main.avatars){
    avatar.classList.add('pause-animation');
  }
  
  for(let rotator of main.rotators){
    rotator.classList.add('pause-animation');
  }

  displayMember(memberId);
}

/**
 * Get members from server.
 * 
 * @return {void}
 */
const getMembers = async() => {
  try{
    const result = await fetch('/api/members/all', {
      headers: {
        'Accept': 'application/json',
      },
    });
    const data = await result.json();
    state.members = data;
  }
  catch(e){
    console.log(e);
  }
}

/**
 * Get band info from server.
 * 
 * @return {void}
 */
const getBandInfo = async() => {
  try{
    const result = await fetch('/api/about/info', {
      headers: {
        'Accept': 'application/json',
      },
    });
    const data = await result.json();
    
    state.bandLogo = data.img;
    state.bandInfo = data.description;
  }
  catch(e){
    console.log(e);
  }
}

/**
 * Display member on the right panel.
 * 
 * @param {int} memberId
 * @returns {void}
 */
const displayMember = (memberId) => {
  const member = getMemberFromState(memberId);
  main.logo.setAttribute('src', member.img);
  main.description.innerHTML = member.description;
}

/**
 * Display sun and continue moving.
 */
const displaySun = () => {
  for(let avatar of main.avatars){
    avatar.classList.remove('pause-animation');
  }
  
  for(let rotator of main.rotators){
    rotator.classList.remove('pause-animation');
  }

  main.logo.setAttribute('src', state.bandLogo);
  main.description.innerHTML = state.bandInfo;
}

/**
 * Get member from the global state.
 * 
 * @param {int} memberId
 * @returns {object}
 */
const getMemberFromState = (memberId) => {
  return state.members.find((member) => {
    return member.id == memberId;
  });
}

/**
 * Set up main elements.
 * 
 * @returns {void}
 */
const setUpMainElements = () => {
  main.avatars = document.getElementsByClassName('avatar');
  main.rotators = document.getElementsByClassName('rotator');
  main.sun = document.querySelector('.sunote');
}

/**
 * Set up event listeners.
 * 
 * @returns {void}
 */
const setUpEventListeners = {
  execute: () => {
    setUpEventListeners.listenToAvatarAnimation();
  },
  listenToAvatarAnimation: () => {
    for(let avatar of main.avatars) {
      const circleWrapper = avatar.querySelector('.animation-circles');

      avatar.addEventListener('mouseover', () => {
        circleWrapper.innerHTML = setUpEventListeners.pulseElementsSelected;
      });
      avatar.addEventListener('mouseleave', () => {
        circleWrapper.innerHTML = setUpEventListeners.pulseElementsDefault;
      });
    }
  },
  pulseElementsDefault: `<span class="avatar-circle" style="animation-delay: 0s"></span>
  <span class="avatar-circle" style="animation-delay: 0.5s"></span>
  <span class="avatar-circle" style="animation-delay: 0.7s"></span>`,
  
  pulseElementsSelected: `<span class="avatar-circle selected" style="animation-delay: 0s"></span>
  <span class="avatar-circle selected" style="animation-delay: 0.5s"></span>
  <span class="avatar-circle selected" style="animation-delay: 0.7s"></span>`,

}