const country = 'Bangladesh';
console.log(country);
const s = new String("String");
console.log(s);
console.log(country.length);
console.log(country[1]);
// mutable and immutable

// string comparison
const school = 'ABC';
console.log(school);//ABC

const subject = 'Math';
const book = 'math';
if(subject===book){
    console.log("Match");
}
else{
    console.log("No match");// output
}

if(subject.toLocaleLowerCase()===book.toLocaleLowerCase()){
    console.log("Match");
}
else{
    console.log("No match");
}

const drink = ' water';
const liquid = '   water';

if(drink.trim()===liquid.trim()){
    console.log("Match");
}
else{
    console.log("No match");
}