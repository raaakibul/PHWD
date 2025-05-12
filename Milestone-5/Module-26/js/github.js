document.getElementById('delete-text').addEventListener('keyup', function(){
    const text = event.target.value;
    const delButton= document.getElementById('btn-delete');
    if(text==='delete'){
        delButton.removeAttribute('disabled');
    }
    else{
        delButton.setAttribute('disabled', true);
    }
})
document.getElementById('btn-delete').addEventListener('click', function(){
    const info = document.getElementById('info');
    // info.style.display = 'none';


})