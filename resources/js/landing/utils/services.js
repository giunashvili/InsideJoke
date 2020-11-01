import { curl } from './helpers'
import * as API from './api'

/**
 * Get all the members from the server.
 * 
 * @returns {Promise<Response>}
 */
export const getMembers = () => {
  return curl(API.allMembers);
}

/**
 * Get musical band info from the server.
 * 
 * @returns {Promise<Response>}
 */
export const getBandInfo = () => {
  return curl(API.aboutInfo);
}