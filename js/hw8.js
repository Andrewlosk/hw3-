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


    // console.log(inpValue);
    // if (inpValue == 0) {
    //     text.style.fontSize = '10px';
    // } else if (inpValue == 33) {
    //     text.style.fontSize = '20px';
    // } else if (inpValue == 66) {
    //     text.style.fontSize = '30px';
    // } else if (inpValue == 100) {
    //     text.style.fontSize = '100px';
    // }

    text.style.fontSize = inpValue + 'px';


});


