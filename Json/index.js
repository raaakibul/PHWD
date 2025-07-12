const data = require("./friends_data.json")
console.log(data);
// Access
console.log(data.friends[0]);
console.log(data.friends[0].name);
console.log(data.friends[0].age);
// Modify
data.friends[0].name = "E";
console.log(data.friends[0].name);
// delete
delete data.friends[0].age
console.log(data);

// conversion
const data2 = {
    name: "R",
    age:25
}
console.log(JSON.stringify(data2));
console.log(JSON.parse('{"name": "T"}'));