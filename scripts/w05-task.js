/* W05: Programming Tasks */

/* Declare and initialize global variables */
const templesElement = document.querySelector('#temples');
var templeList = [];

/* async displayTemples Function */
const displayTemples = (temples) => {
  temples.forEach((temple) => {
    const article = document.createElement('article');
    const h3 = document.createElement('h3');
    h3.textContent = temple.templeName;
    const img = document.createElement('img');
    img.src = temple.imageUrl;
    img.alt = temple.location;
    article.appendChild(h3);
    article.appendChild(img);
    templesElement.appendChild(article);
    
  });
}



/* async getTemples Function using fetch()*/
const getTemples = async () => {
  const response = await fetch ('https://byui-cse.github.io/cse121b-ww-course/resources/temples.json');
  if (response.ok) {
    templeList = await response.json();
    displayTemples(templeList);
  }
}

getTemples();

console.log(templeList);



/* reset Function */
function reset () {
  const container = document.querySelector('#temples');
  container.innerHTML = ''
}

/* sortBy Function */
function sortBy() {
  reset();
  const filter = document.querySelector('#sortBy').value;

  switch (filter) {
    case 'utah':
      const utahTemples = templeList.filter((temple) =>
        temple.location.toLowerCase().includes('utah')
      );
      displayTemples(utahTemples);
      break;
    case 'notutah':
      const notUtahTemples = templeList.filter((temple) =>
        !temple.location.toLowerCase().includes('utah')
      );
      displayTemples(notUtahTemples);
      break;
    case 'older':
      const olderTemples = templeList.filter((temple) =>
        new Date(temple.dedicatedDate) < new Date(1950, 0, 1)
      );
      displayTemples(olderTemples);
      break;
    case 'all':
      displayTemples(templeList);
      break;
    default:
      console.log('Invalid filter option');
  }
}



getTemples();

/* Event Listener */

document
  .querySelector('#sortBy')
  .addEventListener('change', () => {sortBy(templeList) });
