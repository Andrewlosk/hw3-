'use strict'

const form = document.getElementById('selectForm');
const span = document.querySelector('.span')
const coffee = document.getElementById('coffee');
const tea = document.getElementById('tea');
const jucie = document.getElementById('jucie');





function newFunc() {
    switch (form.value) {
        case 'coffee':
            span.textContent = 'cofee'
            break;
        case 'tea':
            span.textContent = 'tea'
            break;
        case 'jucie':
            span.textContent = 'fresh'
            break;           
        default:
            span.textContent = 'nothing'
            break      
    
    }
}

form.addEventListener('change', newFunc )


// task 2


let input = document.querySelector('.input');
const btn = document.querySelector('.btn')

function check() {
    
    switch (input.value) {
        case 'понеділок':
        case 'вівторок':
        case 'середа':    
        case 'четвер':
        case 'пятниця':
            alert('робочий день'); 
            break;
        case 'субота':
        case 'неділя':    
                alert('вихідний'); 
                break;                        
        default:
            alert('ви не вписали день')
            break 
    }
}

btn.addEventListener('click', check)



// task 3 and 4

const inpDate = document.querySelector('.inpDate');
const inpBtn = document.querySelector('.btnDate');



inpBtn.addEventListener('click', () => {
    const valueDate = Number(inpDate.value)

    switch (valueDate) {
        case 12:
        case 1:
        case 2:
            alert('winter');   
            break;
        case 3:     
        case 4:
        case 5:
            alert('spring');   
            break;       
        case 6:     
        case 7:
        case 8:
            alert('summer');   
            break;       
        case 9:
        case 10:
        case 11:
            alert('autumn');   
            break;   
        default:
            alert('nothing');
            break;      
    }
    switch (valueDate) {
        case 1:
        case 3: 
        case 5:
        case 7:
        case 8:
        case 10:
        case 12:        
            alert('31 days');   
            break;  
        case 2:
            alert('28-29 days');  
            break;  
        case 4:
        case 6:
        case 9:
        case 11:
            alert('30 days');   
            break;  
        default:
            alert('nothing');
            break;                                
    }
})

// task 5


const inpColor = document.querySelector('.inpColor');
const btnColor = document.querySelector('.btnColor');

btnColor.addEventListener('click', () => {
    switch (inpColor.value) {
        case 'зелений':
            alert('йти');
            break;
        case 'червоний':
            alert('стоп')
            break;
        case 'жовтий':
            alert('чекати')
            break;
        default:
            alert('nothing');
            break;      
            
    }
});

// КАЛЬКУЛЯТОРРОРОРОРОРОРОООРООРООРООРОРОРОРООООРОРОР

const firstNum = document.querySelector('.inpNum');
const secondNum = document.querySelector('.inpNum1');
const operator = document.querySelector('.operator');
const btnCalc = document.querySelector('.btnCalc');


// const one = Number(firstNum.value) 
// const two = Number(secondNum.value) 


// console.log(firstNum.value);






function calculate() {
    const one = Number(+firstNum.value) 
    const two = Number(+secondNum.value) 
    switch (operator.value) {
        case '+':
            const sum = one + two;
            alert(`приклад = ${sum}`)
            break;
        case '-':
            const diff = one - two;
            alert(`приклад = ${diff}`)
            break;  
        case '/':
            const div = one / two;
            alert(`приклад = ${div}`)
            break;  
        case '*':
            const mult = one * two;
            alert(`приклад = ${mult}`)
            break;               
    }
}

btnCalc.addEventListener('click', calculate)










// =======================
// Змінна lang може приймати 4 значення: 'ua', 'en', 'ru', 'fr'. За допомогою конструкції switch виведи на екран назву місяця в залежності від обраної мови. Наприклад, якщо lang = 'fr', то в консоль виводимо "Janvier".


const lang = prompt(`lang`);
let month = +prompt("num of month");

switch (lang) {
    case 'ua':
        switch (month) {
            case 1:
                alert('січень');
                break;
            case 2:
                alert('лютий');
                break;
            case 3:
                alert('березень');
                break;
            default:
                alert('not correct')
                break;

        }
        break;


        
    case 'en':
        switch (month) {
            case 1:
                alert('january');
                break;
            case 2:
                alert('February');
                break;
            case 3:
                alert('March');
                break;
            default:
                alert('not correct')
                break;    
                                               
        } 
        break;
    case 'ru':
        switch (month) {
            case 1:
                alert('січень)');
                break;
            case 2:
                alert('лютий))');
                break;
            case 3:
                alert('березень)))');
                break;
            default:
                alert('not correct')
                break;    
                                               
        } 
        break;
    case 'fr':
        switch (month) {
            case 1:
                alert('janvier');
                break;
            case 2:
                alert('février');
                break;
            case 3:
                alert('mars');
                break;
            default:
                alert('not correct')
                break;    
                                               
        } 
        break;
    default:
        alert('not correct')
        break;                 
    }