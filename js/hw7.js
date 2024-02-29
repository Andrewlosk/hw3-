'use strict';

// task 2
const inpRed = document.querySelector('.inpRed');
const inpWhite = document.querySelector('.inpWhite');
const inpGreen = document.querySelector('.inpGreen');
const body = document.body;

inpGreen.addEventListener('change', () => {
    body.style.backgroundColor = 'green';
})

inpRed.addEventListener('change', () => {
    body.style.backgroundColor = 'red';
})

inpWhite.addEventListener('change', () => {
    body.style.backgroundColor = 'white';
})








// task 3
const input = document.getElementById('name-input');
const title =  document.getElementById('name-output');


function newFunction() {
    const inpValue = input.value;
    
    if (input ===  "") {
        title.textContent = "незнайомець";
    } else {
        title.textContent = inpValue
    }
}
input.addEventListener('input', newFunction)