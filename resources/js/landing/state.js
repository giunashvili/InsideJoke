import * as Service from './utils/services'

/**
 * Global state accessible to 
 * everywhere.
 */
const state = {
  members: [],
  bandLogo: '',
  bandInfo: '',
  selectedMember: null,
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
    return member.id === memberId;
  });
}

/**
 * Update selected member state.
 * 
 * @param {int} selectedMemberId
 * @returns {void}
 */
export const updateSelectedMember = (selectedMemberId) => {
  state.selectedMember = selectedMemberId;
}

/**
 * Unselect member.
 * 
 * @returns {void}
 */
export const unselectMember = () => {
  state.selectedMember = null;
}

/**
 * Determine if member is selected.
 * 
 * @returns {boolean}
 */
export const isMemberSelected = () => {
  return state.selectedMember !== null;
}

/**
 * Get selected member id.
 * 
 * @returns {int|null}
 */
export const getSelectedMemberId = () => {
  return state.selectedMember;
}