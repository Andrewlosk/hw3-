'use strict';

//task 1

// const depBtn = document.querySelector('.depBtn');
// const drawBtn = document.querySelector('.drawBtn');


// const bankAccount = {
//     ownerName: 'Ivan',
//     accountNumber: 32323,
//     balance: 90,
//     deposit (sum) {
//         this.balance += sum
//     },
//     withdraw (sum) {
//         if (this.balance > sum){
//             this.balance -= sum
//         }else{
//             alert('мало грошей')
//         }
//     }

// }


// depBtn.addEventListener('click', () => {
//     bankAccount.deposit(50);
//     alert(bankAccount.balance);
// });

// drawBtn.addEventListener('click', () => {
//     bankAccount.withdraw(50);
//     alert(bankAccount.balance);
// });



//task 2



// const tempField = document.getElementById('tempField');
// const tempBtn =  document.querySelector('.tempBtn');

// const tempInpNum = tempField.value

// console.log(tempField.value);

// const weather = { 
//     temperature: 0,
//     humidity: 50,
//     windSpeed: 40,
//     isFreez () {
//         return this.temperature < 0
//     },
//     checkTemp () {
//         this.temperature = tempField.value;
//         if (this.isFreez()) {
//             alert('Температура нижче 0 градусів Цельсія');
//         } else {
//             alert('Температура вище або рівна 0 градусів Цельсія');
//         }
//     }


// }

// tempBtn.addEventListener('click', () => {
//     weather.checkTemp()
// })





//task 3

// const emailAcc = document.getElementById('email').value;
// const passwordAcc = document.getElementById('password').value;
// const submit = document.querySelector('.submit');


// const user = {
//     name: 'bobik',
//     email: emailAcc,
//     password: passwordAcc,
//     login: function(enteredEmail, enteredPassword) {
//         if (this.email === enteredEmail && this.password === enteredPassword) {
//             alert('успішний вхід');
//         } else {
//             alert('не вірно')
//         }

//     }

// }
// submit.addEventListener('click', () => {
//     user.login('bobik123@gmail.com', '123')
// })



// task 4

const titleElement = document.querySelector('.title')
const directorElement = document.querySelector('.director')
const yearElement = document.querySelector('.year')
const ratingElement = document.querySelector('.rating')



const movie = {
    title: 'bloodshot',
    director: ' David S F Wilson',
    year: 2020,
    rating: 9,
    isGoodRate () {
        return this.rating > 8
    }
}

titleElement.textContent = movie.title
directorElement.textContent = movie.director
yearElement.textContent = movie.year
ratingElement.textContent = movie.rating

if (movie.isGoodRate()) {
    titleElement.style.color = 'green'
}


console.log(movie.isGoodRate());