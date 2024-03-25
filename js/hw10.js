'use strict';



//task 1

let num = 0;

while (num < 10) {
    num += 1;
    console.log(num)
}



// task 2

for (i = 1; i < 20; i += 2) {
    console.log(i)
}

// task 3

for (i = 0; i < 11; i++) {
    let number = 7 * i;
    console.log(number);
}

// task 4

const mass = [1, 2, 3, 4, 5];

let i = 0;
while (i < 5) {
    console.log(mass[i]);
    i++
}


// task 5
const m = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

for (i = 0; i < m.length; i++) {
    if (m[i] === 7) {
        break;
    }else{
        console.log(m[i]);
    }
}

// task 6

const n = 6;
for (i = 0; i < n; i++){
    console.log(i);
}

// || (or)

const n1 = 6;
while (true) {
    let randInt = Math.floor(Math.random() * 10)
    if(randInt >= n1) {
        break;
    }else{
        console.log(randInt);
    }
}
// console.log(Math.floor(Math.random() * 10));


// task 7



let number = 0;

while (number < 20) {
    number++
    let result = number % 3;
    // console.log(result);
    if (result <= 1) {
        continue;
    }else {
        console.log(number);
    }
}


// пірамідка

const lines = 6;
let result = '';


for (let i = 0; i <= lines; i++) {
    for (let g = 0; g < lines-i; g++){
        result += " ";
    }
    for (let g = 0; g <  2 * i + 1; g++) {
        result += '*'
    }
    result+='\n'
}

console.log(result);

