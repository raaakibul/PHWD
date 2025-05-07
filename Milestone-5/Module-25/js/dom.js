console.log("Dom");
console.log(document);
const liCollection = document.getElementsByTagName('li')
// console.log(liCollection);
for(const li of liCollection){
    console.log(li.innerText);
}
const allheadings = document.getElementsByTagName('h1')
// console.log(allheadings);
for(const h1 of allheadings){
    console.log(h1);
}
