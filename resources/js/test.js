const serverData = [
  {
    id: 1,
    name: 'გელა',
    profession: 'კაფელჩიკი',
  },
  {
    id: 2,
    name: 'ზურა',
    profession: 'მალიარი',
  },
  {
    id: 3,
    name: 'გია',
    profession: 'სანტეხნიკი',
  },
  {
    id: 4,
    name: 'გოჩა',
    profession: 'ტარაილერჩიკი',
  },
  {
    id: 5,
    name: 'ხვიჩა',
    profession: 'მამლუქი',
  },
]

/**
 * UI Component
 */
const component = (props) => {
  return `
  <a href="#" class="collection-item" member_id="${props.id}">${props.name}</a>
  `
}

/**
 * Root component.
 */
const root = () => document.getElementById('root')

/**
 * Regular element.
 */
const allElements = () => Array.from(document.getElementsByClassName('collection-item'))

/**
 * Render data.
 */
const renderData = () => {
  const content = serverData.map(el => {
    return component({ id: el.id, name: el.name })
  }).join(' ')

  root().innerHTML = content;
}

document.addEventListener('DOMContentLoaded', function() {
  renderData();

  allElements().forEach(el => el.addEventListener('click', clickAction))
})

/**
 * Click action.
 * 
 * @param {Event} e
 */
const clickAction = (e) => {
  const member = e.target;

  console.log(member.attributes.member_id.value)
}