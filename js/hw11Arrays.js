'use strict';

// task 1
const arr = [1,2,3];

arr[1] = 10;

console.log(arr);


// task 2
const arr1 = ['andrii', 'illya', 'vadim'];

arr1.push('nazar');

console.log(arr1);

// task 3

const numbers = [2, 2, 66, 30];
let sum = 0;

for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i]
}

console.log(sum);



// task 4


const num = [2, 10, 66, 30, 3];


for (let i = 0; i < num.length; i++) {
    console.log(num[i]);
}

// task 5

const names = ['andrii', 'illya', 'vadimka', 'nika', 'bob'];

for (let i = 0; i < names.length; i++) {
    if (names[i].length > 5) {
        console.log(names[i]);
    }
}


// task 6

const count = [2, 10, 66, 30, 3, 999, 33, 1, 4, 5];
let heighestNum = count[1];

for (let i = 0; i < count.length; i++) {
    if (count[i] > heighestNum) {
        heighestNum = count[i]
    }
}

console.log(heighestNum);



// task 7

const numArr = [2, 4, 5, 5, 1, 88, 10, 3, 20, 9];

for (let i = 0; i < numArr.length; i++) {
    let checkNum = numArr[i] % 2
    if (checkNum == 0) {
        console.log(numArr[i]);
    }
}

