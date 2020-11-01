import * as Service from './utils/services'

/**
 * Global state accessible to 
 * everywhere.
 */
const state = {
  members: [],
  bandLogo: '',
  bandInfo: '',
};
export default state;

/**
 * Fetch all the necessary data 
 * from the server.
 * 
 * @returns {void}
 */
export const fetchAllData = async () => {
  await getMembers();
  await getBandInfo();
}

/**
 * Get members from server.
 * 
 * @return {void}
 */
const getMembers = async() => {
  try{
    const result = await Service.getMembers();
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
    const result = await Service.getBandInfo();
    const data = await result.json();
    
    state.bandLogo = data.img;
    state.bandInfo = data.description;
  }
  catch(e){
    console.log(e);
  }
}

/**
 * Get member from the global state.
 * 
 * @param {int} memberId
 * @returns {object}
 */
export const getMemberFromState = (memberId) => {
  return state.members.find((member) => {
    return member.id == memberId;
  });
}