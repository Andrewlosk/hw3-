'use strict';



// task 1
// const logItems = function(array) {
//     for (let i = 0; i < array.length; i++) {
//         console.log(`${i + 1}  - ${array[i]}`);
//     }
// }

// logItems([5, 3, 2, 5, 2, 1, 4, 1, 1,]);


// task 2

// const calculateEngravingPrice = function(message, pricePerWord) {
//     let words = message.split(' ');
//     let total = 0
//     for (let i = 0; i < words.length; i++) {
//         total = (i+1) * pricePerWord
//     }
//     return console.log(total);;
// }



// calculateEngravingPrice('fdsffdsf, 23 34543 vdfs', 432)



// task 3

// const findLongestWord = function(string) {
//     let words = string.split(' ');
//     longestWord = words[0];
//     for (let i = 0; i < words.length; i++) {
//         if (words[i].length > longestWord.length) {
//             longestWord = words[i]
//         } 
//     }
//     return console.log(longestWord);
// }



// findLongestWord('hi, my name is Andrii')




// task 4

// const formatString = function(string) {

//     if (string.length >= 40) {
//         string = string.slice(0, 40) + '...'
//     }
//     return string;

// }
// console.log(formatString('dsjlkfhgthgfhgfhfghgfhgfhgfhfghfghhgfhhfghfgkjugfdhdrkfjghjdskljfllllllll'));



// task 5



// const checkForSpam = function(message) {
//     const checker = message.includes('spam' && 'sale')
//     return checker
// }
// console.log(checkForSpam('spam і sale 344'));



//task 6



let input;
const numbers = [];
let total = 0;

while (true) {
    input = prompt('write a number')
    console.log(input);

    if (input === null) {
        break;
    }

    const number = parseFloat(input);
    console.log(typeof number);
    if (isNaN(number)) {
        alert('noooooo');
        continue;
    }
    numbers.push(number)
}

// console.log(numbers);

for (let i = 0; i < numbers.length; i++) {
    total += numbers[i]
}
console.log(`загальна сума: ${total}`);



