function createParagraph() {
  const para = document.createElement('p');
  para.textContent = 'You clicked the button!';
  document.body.appendChild(para);
}

const buttons = document.querySelectorAll('button'); // function allows you to select all the buttons on a page

for (const button of buttons) {
  button.addEventListener('click', createParagraph); //You can then loop through the buttons, assigning a handler for each using
}
