/**
 * Global state.
 */
const state = {
  members: [],
  degrees: [],
  distances: [],
  const:{
    incrementDegree: .1,
    interval: 40,
  }
};

/**
 * Start moving process when page is loaded.
 */
const startMoving = async () => {
  await getMembers();
  setInitialDegrees();
  setInitialDistances();
  const avatars = document.querySelectorAll('.avatar');
  setInterval(shift.bind(this, avatars), state.const.interval);
}

/**
 * Make planets shift in every X millisecond.
 * 
 * @param {Array<HTMLElement>} avatars
 */
const shift = (avatars) => {
  avatars.forEach(( avatar, index ) => {
    const innerAvatar          = avatar.children[0];
    const distance             = state.distances[index];
    const degree               = calculate.degree(index);
    const outerTransformations = calculate.outerTransformation(distance, degree);
    const innerTransformations = calculate.innerTransformation(degree);
    
    avatar.setAttribute('style', outerTransformations);
    innerAvatar.setAttribute('style', innerTransformations);
  });
}

const calculate = {
  degree: (index) => {
    const degree = (state.degrees[index] + state.const.incrementDegree) % 360;
    return state.degrees[index] = +degree.toFixed(2);
  },
  outerTransformation: (distance, degree) => {
    return `
      transform: translate(calc((${distance}rem / 16) - 50%), -50%) rotateZ(${degree}deg);
      transform-origin: calc(${-distance}rem / 16 + 50%);
    `;
  },
  innerTransformation: (degree) => {
    return `transform: rotateZ(${-degree}deg)`;
  }
};

const getMembers = () => {
  return fetch('/api/members/all')
    .then(data => data.json())
    .then(data => {
      state.members = data;
    })
    .catch(e => console.error(e));
}

const setInitialDegrees = () => {
  state.degrees = [...document.querySelectorAll('.initial-degree')].map(el => +el.value);
}

const setInitialDistances = () => {
  state.distances = [...document.querySelectorAll('.planet-distance')].map(el => +el.value);
}

/**
 * Start main function when page is loaded.
 */
window.onload = startMoving.bind(this);