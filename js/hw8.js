'use strict';
// task 1

const box = document.querySelector('.box');

let leftPosition = box.offsetLeft;
let topPosition = box.offsetTop;


function translatePosition(event) {
    if(event.key === 'ArrowRight') {

        leftPosition += 10;
        box.style.left = leftPosition + 'px';

    } else if (event.key === 'ArrowLeft') {
        leftPosition -= 10;
        box.style.left = leftPosition + 'px';
    } else if (event.key === 'ArrowUp') {
        topPosition -= 10;
        box.style.top = topPosition + 'px';
    } else if (event.key === 'ArrowDown') {
        topPosition += 10;
        box.style.top = topPosition + 'px'; 
    }
}

document.addEventListener('keydown', translatePosition)










// task 2
const input = document.getElementById('validation-input');
const error = document.querySelector('.error');
const inputLen = input.getAttribute('data-length'); 

input.addEventListener('blur', () => {
    if (input.value.length < inputLen){
        error.textContent = "whtite corect ";
        input.style.border = "1px solid red";
    }else {
        error.textContent = "";
        input.style.border = "1px solid green";        
    }
})



// task 3

const range = document.getElementById('font-size-control');
const text = document.getElementById('text');

range.addEventListener('input', () => {
    const inpValue = range.value

    text.style.fontSize = inpValue + 'px';


});


// ========
const inp = document.getElementById('validation-input1');
const inputNew = document.getElementById('validation-input2');
const btn = document.querySelector('.check')

function checkInp(){
    if (inp.value && inputNew.value) {
        console.log('dffd')
        alert('alles gut');
    }else{
        alert('not gut');
    }

};
btn.addEventListener('click', checkInp)