import { avatars, sun } from './UI/elements'
import { 
  setSelectedAnimationUI, 
  setDefaultAnimationUI, 
  selectPlanet, 
  displaySun, 
} from './actions'

/**
 * Register event listeners and set 
 * intervals and timeouts.
 * 
 * @returns {void}
 */
export default () => {
  avatars().forEach(el => el.addEventListener('click', selectPlanet))
  sun().addEventListener('click', displaySun);
  listenToAvatarAnimation();
}

/**
 * Listen to avatar animations.
 * 
 * @returns {void}
 */
const listenToAvatarAnimation = () => {
  avatars().forEach(avatar => {
    const circleWrapper = avatar.querySelector('.animation-circles');
    avatar.addEventListener('mouseover', setSelectedAnimationUI.bind(null, circleWrapper));
    avatar.addEventListener('mouseleave', setDefaultAnimationUI.bind(null, circleWrapper));
  });
}