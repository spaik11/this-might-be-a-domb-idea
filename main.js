const paragraph = document.querySelector('.para');
paragraph.style.color = 'lightBlue';
paragraph.style.fontFamily = 'Hipster Ipsum';

const header = document.querySelector('h1');
header.style.fontSize = '10px';

const item13 = document.querySelector('#item-13');
item13.style.opacity = '0.5';

const item3 = document.querySelector('#item-3');
item3.innerText = 'Hi!';

const dinoUrl = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg';

const dinoImg = document.querySelector('img')
dinoImg.src = dinoUrl
dinoImg.style.height = '300px'

const newImg = document.createElement('img');
newImg.src = 'http://www.tioxic.com/wp-content/uploads/trex_4.jpg'
const wrapperDiv = document.querySelector('div');

const newDiv = document.createElement('div')
newDiv.appendChild(newImg);
wrapperDiv.appendChild(newDiv);

const newItem = document.createElement('li');
newItem.class = 'item';
newItem.id = 'item-16';
newItem.innerText = `I won't be fooled again.`;
const list = document.querySelector('ul');
list.appendChild(newItem);