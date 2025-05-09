function makeRed(){
    document.body.style.backgroundColor = 'red';
}

// another way
const makeBlueButton = document.getElementById('make-blue');
makeBlueButton.onclick = makeBlue;
function makeBlue(){
    document.body.style.backgroundColor = 'blue';
}

// another system
const purpleButton = document.getElementById('make-purple');
purpleButton.onclick = function makePurple(){
    document.body.style.backgroundColor = 'purple';
}

const pinkButton = document.getElementById('make-pink');
pinkButton.addEventListener('click', makePink)

function makePink(){
    document.body.style.backgroundColor = 'pink';
}

// another
const makeGreen = document.getElementById('make-green');
makeGreen.addEventListener('click', function(){
    document.body.style.backgroundColor = 'green';
})

// final
document.getElementById('make-goldenrod').addEventListener('click', function(){
    document.body.style.backgroundColor = 'goldenrod';
})