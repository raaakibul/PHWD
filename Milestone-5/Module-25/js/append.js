const placesList = document.getElementById('places-list');
const li = document.createElement('li');
li.innerText = 'Belgium';
placesList.append(li);

const mainContainer = document.getElementById('main-container');
const section = document.createElement('section');
const h1 = document.createElement('h1');
h1.innerText = "My Food List";
section.appendChild(h1);

const ul = document.createElement('ul');
const li1 = document.createElement('li');
li1.innerText = 'Briyani';
ul.appendChild(li1);

section.appendChild(ul);


mainContainer.appendChild(section)