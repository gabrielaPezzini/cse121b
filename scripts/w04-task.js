/* LESSON 3 - Programming Tasks */

/* Profile Object  */

/* Populate Profile Object with placesLive objects */
let myProfile = {
  name: 'Gabriela Cachapuz',
  photo: 'images/images/placeholder.png',
  favoriteFoods: ['Pizza', 'Barbecue', 'Ice Cream', 'Water Mellow', 'Pasta'],
  hobbies: ['Volleyball', 'Books', 'Series'],
  placesLived: ['Novo Hamburgo', 'Caxias', 'São Leopoldo'],
};

myProfile.placesLived.push({
  place: 'Natal, RN',
  length: '18 months',
});

myProfile.placesLived[0] = {
  place: 'Novo Hamburgo, RS',
  length: '20 years',
};

myProfile.placesLived[1] = {
  place: 'Caxias, RS',
  length: '1 year',
};

myProfile.placesLived[2] = {
  place: 'São Leopoldo, RS',
  length: '6 months',
};

/* DOM Manipulation - Output */

/* Name */
document.querySelector('#name').textContent = myProfile.name;

/* Photo with attributes */
document.querySelector('#photo').src = myProfile.photo;
document.querySelector('#photo').alt = myProfile.name;

/* Favorite Foods List*/
myProfile.favoriteFoods.forEach((food) => {
  let li = document.createElement('li');
  li.textContent = food;
  document.querySelector('#favorite-foods').appendChild(li);
});

/* Hobbies List */
myProfile.hobbies.forEach((hobbie) => {
  let li = document.createElement('li');
  li.textContent = hobbie;
  document.querySelector('#hobbies').appendChild(li);
});

/* Places Lived DataList */
const placesLivedList = document.querySelector('#places-lived');

myProfile.placesLived.forEach((place) => {
  let dt = document.createElement('dt');
  dt.textContent = place.place;

  let dd = document.createElement('dd');
  dd.textContent = place.length;

  placesLivedList.appendChild(dt);
  placesLivedList.appendChild(dd);
});
