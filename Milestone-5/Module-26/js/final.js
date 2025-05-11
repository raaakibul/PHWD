function handleOnClick() {
    const handlerText = document.getElementById('handler-text');
    handlerText.innerText = "Using dom";
}

document.getElementById('event-listener').addEventListener('click', function(){
    const handlerText = document.getElementById('handler-text');
    handlerText.innerText = "Text Updated by add Event Listener Button";
    
})

document.getElementById('btn-update').addEventListener('click', function(){
    const inputField = document.getElementById('input-field');
    const inputText = inputField.value;
    const p = document.getElementById('input-text');
    p.innerText = inputText;
    inputField.value = '';
})