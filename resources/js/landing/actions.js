import state, { 
  updateSelectedMember,
  getSelectedMemberId,
  isMemberSelected, 
  unselectMember, 
} from './state'
import {
  animatedCircleWrappers, 
  description,
  rotators, 
  avatars, 
  logo,
  sun,
} from './UI/elements'
import { displayMember } from './utils/helpers'
import defaultPulseAnimationUI from './UI/pulse-animations/default-pulse-animation'
import selectedPulseAnimationUI from './UI/pulse-animations/selected-pulse-animation'

/**
 * Display sun and continue moving.
 * 
 * @returns {void}
 */
export const displaySun = () => {
  if(! isMemberSelected()) {
    return;
  }
  avatars().forEach(e => {
    e.classList.remove('pause-animation');
    e.classList.remove('blur');
    e.classList.remove('big-font');
  });
  rotators().forEach(e => e.classList.remove('pause-animation'))
  logo().setAttribute('src', state.bandLogo);
  description().innerHTML = state.bandInfo;
  animatedCircleWrappers().forEach(el => el.innerHTML = defaultPulseAnimationUI);
  unselectMember();
  sun().style.animationName = 'sun-shining';
  sun().style.animationDuration = '1s';
}

/**
 * Select particular planet to see his/her info.
 * 
 * @returns {void}
 */
export const selectPlanet = function() {
  const memberId = +this.dataset.id;

  if(getSelectedMemberId() === memberId) {
    displaySun();
    return;
  }

  this.classList.remove('blur');
  this.classList.remove('big-font');

  avatars().forEach(el => {
    el.classList.add('pause-animation');
    if(+el.dataset.id !== memberId) {
      el.classList.add('blur');
      el.classList.remove('big-font');
    }
    else {
      el.classList.add('big-font');
    }
  });
  rotators().forEach(el => el.classList.add('pause-animation'));
  animatedCircleWrappers().forEach(el => el.innerHTML = '');
  sun().style.animationName = 'sun-extra-shining';
  sun().style.animationDuration = '.3s';

  displayMember(memberId);
  updateSelectedMember(memberId);
}

/**
 * Set default animation UI to avatar.
 * 
 * @param {HTMLElement} circleWrapper
 * @returns {void}
 */
export const setDefaultAnimationUI = (circleWrapper) => {
  ! isMemberSelected() && (circleWrapper.innerHTML = defaultPulseAnimationUI);
}

/**
 * Set selected animation UI to avatar.
 * 
 * @param {HTMLElement} circleWrapper
 * @returns {void}
 */
export const setSelectedAnimationUI = (circleWrapper ) => {
  ! isMemberSelected() && (circleWrapper.innerHTML = selectedPulseAnimationUI);
}