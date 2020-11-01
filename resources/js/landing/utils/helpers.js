import { logo, description } from '../UI/elements'
import { getMemberFromState } from '../state'
/**
 * Fetch api wrapper with configured options.
 * 
 * @param {RequestInfo} api
 * @param {RequestInit} config
 * @returns {Promise<Response>}
 */
export const curl = (api, config = {}) => {
  const mergedConfig = {
    ...config,
    ...{
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      }
    }
  };

  if( mergedConfig.method == 'POST' ) {
    
  }

  return fetch(api, mergedConfig);
}

/**
 * Display member on the right panel.
 * 
 * @param {int} memberId
 * @returns {void}
 */
export const displayMember = (memberId) => {
  const member = getMemberFromState(memberId);
  logo().setAttribute('src', member.img);
  description().innerHTML = member.description;
}
