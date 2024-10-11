'use strict';


const minutes = document.getElementById('minutes');
const minutesMessage = document.getElementById('minutesMessage');

let counter = 60

const intervalId = setInterval((e) => {
    // e.preventdefault()
    counter--
    minutes.textContent = counter
    if(counter === 30) {
        minutesMessage.textContent = 'половина часу залишилась'
        setTimeout(() => {
            minutesMessage.textContent = ""
        }, 60000)

    }else if (counter === 0) {
        clearInterval(intervalId)
    }




}, 60000)



//task2
const catImg = document.getElementById('catImg')
const miliseconds = document.getElementById('miliseconds');
const startBtn = document.getElementById('startBtn');
let milisecondsCounter = 30

const timerFn = () => {
    const intervalMiliseconds = setInterval(() => {
        milisecondsCounter--
        miliseconds.textContent = milisecondsCounter
        if (milisecondsCounter === 10) {
            catImg.classList.add('animate__animated', 'animate__bounce')
        }else if (milisecondsCounter === 0) {
            clearInterval(intervalMiliseconds)
            startBtn.disabled = false

        }
    }, 1000)

}

startBtn.addEventListener('click', () => {
    startBtn.disabled = true
    timerFn()
})
