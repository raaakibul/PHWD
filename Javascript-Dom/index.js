// getelement by id
var heading1 = document.getElementById("heading");
heading1.innerHTML = "Hello Dom";

var paragraph = document.getElementById("para");
paragraph.innerHTML = "Changed the paragraph text"; 

// Query selector
const pid =  document.querySelector("#pid");
pid.innerHTML = "Changed the paragraph text using query selector";

document.querySelector("li a").innerHTML = "New Text";
document.querySelector(".my-div a").innerHTML = "New Contact"

