// Ternary operator
const age = 20
if(age>=18){
    console.log("You can vote");
}
else{
    console.log("No vote for you");
}
// ternary operator
// ? :
// condition ? true: flase
age>=18 ? console.log("Vote"): console.log("No vote");

let price = 500;
const isLeader = true;
if(isLeader===true){
    price =0;
}
else{
    price = price + 100;
}
console.log(price);

price = isLeader === true ? 0 : price + 100;
console.log(price);

