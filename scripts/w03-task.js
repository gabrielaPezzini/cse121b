/* LESSON 3 - Programming Tasks */

/* FUNCTIONS */
/* Function Definition - Add Numbers */
function add(number1, number2) {
  const sum = number1 + number2;
  return sum;
}

function addNumbers() {
  let addNumber1 = Number(document.querySelector('#add1').value);
  let addNumber2 = Number(document.querySelector('#add2').value);
  document.querySelector('#sum').value = add(addNumber1, addNumber2);
}
document.querySelector('#addNumbers').addEventListener('click', addNumbers);

/* Function Expression - Subtract Numbers */

const subtract = function (number1, number2) {
  return number1 - number2;
};

const subtractNumbers = function () {
  const subtractNumber1 = Number(document.querySelector('#subtract1').value);
  const subtractNumber2 = Number(document.querySelector('#subtract2').value);
  document.querySelector('#difference').value = subtract(
    subtractNumber1,
    subtractNumber2,
  );
};
document
  .querySelector('#subtractNumbers')
  .addEventListener('click', subtractNumbers);

/* Arrow Function - Multiply Numbers */
const multiply = (number1, number2) => number1 * number2;

const multiplyNumbers = () => {
  const multiplyNumber1 = Number(document.querySelector('#factor1').value);
  const multiplyNumber2 = Number(document.querySelector('#factor2').value);
  document.querySelector('#product').value = multiply(
    multiplyNumber1,
    multiplyNumber2,
  );
};

document
  .querySelector('#multiplyNumbers')
  .addEventListener('click', multiplyNumbers);

/* Open Function Use - Divide Numbers */
function divide(dividend, divisor) {
  const quotient = dividend / divisor;
  return quotient;
}

function divideNumbers() {
  let divideNumber1 = Number(document.querySelector('#dividend').value);
  let divideNumber2 = Number(document.querySelector('#divisor').value);
  document.querySelector('#quotient').value = divide(
    divideNumber1,
    divideNumber2,
  );
}
document
  .querySelector('#divideNumbers')
  .addEventListener('click', divideNumbers);

/* Decision Structure */
const currentDate = new Date();
let currentYear = currentDate.getFullYear();
document.getElementById('year').innerHTML = currentYear;

/* ARRAY METHODS - Functional Programming */
/* Output Source Array */
let numbersArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13];
document.getElementById('array').innerText = numbersArray;

/* Output Odds Only Array */
document.querySelector('#odds').innerHTML = numbersArray.filter(
  (number) => number % 2 === 1,
);

/* Output Evens Only Array */
document.querySelector('#evens').innerHTML = numbersArray.filter(
  (number) => number % 2 === 0,
);

/* Output Sum of Org. Array */
const sumOfArray = numbersArray.reduce((acc, cur) => acc + cur, 0);
document.querySelector('#sumOfArray').innerHTML = sumOfArray;

/* Output Multiplied by 2 Array */
let arrayMultiplied = numbersArray.map((number) => number * 2);
document.querySelector('#multiplied').innerHTML = arrayMultiplied;

/* Output Sum of Multiplied by 2 Array */
const sumOfMultiplied = arrayMultiplied.reduce((acc, cur) => acc + cur);
document.querySelector('#sumOfMultiplied').innerHTML = sumOfMultiplied;
