//!task1

let counter = 0

const interval1 = setInterval(() => {
    alert('message')
    counter++
    console.log(counter);

    if (counter === 5) {
        clearInterval(interval1)
        
    }
    
}, 1000)




//!task2
const widthBox = document.getElementById('widthBox')
const heightBox = document.getElementById('heightBox')


let widthAndHeightCounter = 0

let width = 200
let height = 200

const interval = setInterval(() => {
    widthAndHeightCounter++

    width+=10
    height+=10

    widthBox.style.width = width + 'px'
    heightBox.style.height = height + 'px'

    if (widthAndHeightCounter === 50) {
        clearInterval(interval)
    }

}, 50)


//!task3


const score = document.getElementById('score');
const gameContainer = document.getElementById('gameContainer');
let scoreGame = 0

// const randInterval = [1000000, 2000000, 300000, 400000]
// let randNum = 0 

const createElement = () => {
    const btn = document.createElement('button')
    btn.textContent = 'click me!!!!'
    gameContainer.appendChild(btn)

    btn.addEventListener('click', () => {
        scoreGame++
        score.textContent = scoreGame
        btn.remove()
    })
}



setInterval(() => {
    
    createElement()
    
}, 1000)



// !task4

const timeInp = document.getElementById('timeInp')
const timeBtn = document.getElementById('timeBtn')


const timeFn = () => {
    const time = parseInt(timeInp.value)

    setTimeout(() => {
        alert('your message')
    }, time*1000)

    
}

timeBtn.addEventListener('click', () => {
    timeFn()
    
})