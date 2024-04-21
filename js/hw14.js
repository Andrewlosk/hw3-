'use strict';

// task 1
const btn = document.querySelector('.btn');

btn.addEventListener('click', () => {
    alert('hello world')
})


// task 2

// const checkBtn = document.querySelector('.guessBtn');
// const input = document.getElementById('guessField');
// const result = document.getElementById('guessResult');

// const randNum = Math.floor(Math.random() * (100 - 1 + 1)) + 1;

// const inputNum = parseInt(input)





// const checkGuessFunc = function() {


//     if (randNum == input.value) {
//         result.textContent = "win"
// ;
//     }else if (randNum > input.value) {
//         result.textContent = "твоє число дуже маленьке"

//     }else {
//         result.textContent = "твоє число дуже велике"
//     }
// }








// task 3   



const counter = document.querySelector('.counter');

let clickCount = 0;

document.addEventListener('click', () => {
    clickCount += 1;
    counter.textContent = clickCount

})

















// task 4


const applyCallbackToEachElement = (arr, callback) => {
    const array = []
    for (const element of arr) {
        const result = callback(element);
        array.push(result)
    }
    return array;
}

const arr = [1, 2, 3, 4, 5];

const squareCallback = (num) => num * num;

const result = applyCallbackToEachElement(arr, squareCallback);
console.log(result);






// task 5

const calculateDiscountedPrice = (price, discount, callback) => {
    const result = showDicountedPrice(price, discount)
    return console.log(result); 
};

const showDicountedPrice = (price, discount) => {
    return price - (price / 100 * discount)
};

calculateDiscountedPrice(100, 10, showDicountedPrice)