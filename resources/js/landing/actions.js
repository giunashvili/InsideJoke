import state from './state'
import { 
  description,
  rotators, 
  avatars, 
  logo, 
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
  avatars().forEach(e => e.classList.remove('pause-animation'))
  rotators().forEach(e => e.classList.remove('pause-animation'))
  logo().setAttribute('src', state.bandLogo);
  description().innerHTML = state.bandInfo;
}

/**
 * Select particular planet to see his/her info.
 * 
 * @returns {void}
 */
export const selectPlanet = function() {
  const memberId = this.querySelector('.member-id').value;

  avatars().forEach(el => el.classList.add('pause-animation'));
  rotators().forEach(el => el.classList.add('pause-animation'));
  displayMember(memberId);
}

/**
 * Set default animation UI to avatar.
 * 
 * @param {HTMLElement} circleWrapper
 * @returns {void}
 */
export const setDefaultAnimationUI = (circleWrapper) => {
  circleWrapper.innerHTML = defaultPulseAnimationUI;
}

/**
 * Set selected animation UI to avatar.
 * 
 * @param {HTMLElement} circleWrapper
 * @returns {void}
 */
export const setSelectedAnimationUI = (circleWrapper ) => {
  circleWrapper.innerHTML = selectedPulseAnimationUI;
}