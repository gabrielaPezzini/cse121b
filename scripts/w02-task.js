/* W02-Task - Profile Home Page */

/* Step 1 - Setup type tasks - no code required */

/* Step 2 - Variables */
let fullName = 'Gabriela Cachapuz';
/*💡A const declaration is OK to use to declare this variable because the value will not change in this application.
💡You can use single quotes ('), double quotes ("), or backticks (`) to surround the string (sequence of characters) data type value. */
let currentYear = new Date().getFullYear();
let profilePicture = 'images/images/placeholder.png';

/* Step 3 - Element Variables */
const nameElement = document.getElementById('name');
const foodElement = document.getElementById('food');
const yearElement = document.querySelector('#year');
/*Note the # in the selector string to indicate the id attribute value. 🪲This syntax detail is often missed. */
const imageElement = document.querySelector('#photo');

/* Step 4 - Adding Content */
nameElement.innerHTML = `<strong>${fullName}</strong>`;
yearElement.textContent = `${currentYear}`;
imageElement.setAttribute('src', profilePicture);
imageElement.setAttribute('alt', `Profile image of' ${fullName}`);

/* Step 5 - Array */
let foods = ['Pizza', 'Barbecue', 'Ice Cream', 'Water Mellow', 'Pasta'];
foodElement.innerHTML += `<br>${foods}`;
let favFoods = 'Sushi';
foods.push(favFoods);
foodElement.innerHTML += `<br>${foods}`;
foods.shift();
foodElement.innerHTML += `<br>${foods}`;
foods.pop();
foodElement.innerHTML += `<br>${foods}`;
