document.getElementById('btn-more').addEventListener('mouseenter', function(){
    console.log("Event trigger");
})

// document.getElementById('text-field').addEventListener('mousemove', function(){
//     console.log("Event triggered");
// })

document.getElementById('text-field').addEventListener('keydown', function(){
    console.log(event.target.value);
})