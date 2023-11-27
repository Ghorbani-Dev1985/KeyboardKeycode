let $ = document;
let StartBox = $.querySelector('#StartBox');
let ResultKeyCode = $.querySelector('#ResultKeyCode');
let KeyBody = $.querySelector('#KeyBody');
let LocationBody = $.querySelector('#LocationBody');
let CodeBody = $.querySelector('#CodeBody');
let WhichBody = $.querySelector('#WhichBody');
let DescriptionBody = $.querySelector('#DescriptionBody');

$.body.addEventListener('keydown' , (event) => {
    event.preventDefault();
    StartBox.style.display = 'none';
    ResultKeyCode.innerHTML = event.keyCode;
    KeyBody.innerHTML = event.key;
    LocationBody.innerHTML = event.location;
    CodeBody.innerHTML = event.code;
    WhichBody.innerHTML = event.which;
    DescriptionBody.innerHTML = event.key;
});