const friends = ["Elon", "Bill", "Mark", "Waren"];
for(const friend of friends){
    console.log(friend);
}

for(let i=0;i<friends.length;i++){
    // console.log(i);
    console.log(i+1 ,"-",friends[i]);
}

let i=0;
while(i < friends.length){
    console.log(i+1,"-",friends[i]);
    i++;
}