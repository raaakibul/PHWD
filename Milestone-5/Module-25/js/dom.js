// console.log("Dom");
// console.log(document);
const liCollection = document.getElementsByTagName('li')
console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerText);
}
const allheadings = document.getElementsByTagName('h1')
console.log(allheadings);
for(const h1 of allheadings){
    console.log(h1);
    console.log(h1.innerText);
}

document.getElementById('places');
document.getElementsByClassName('important-places');

const fruitsTitle = document.getElementById('fruits-title');
fruitsTitle.innerText = 'New fruit';

const places = document.getElementsByClassName('important-places');

for(const place of places){
    console.log(place.innerText);
}

// document.getElementById('fruits-title').style.backgroundColor = 'yellow';
