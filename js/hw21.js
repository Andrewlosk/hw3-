const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.image');

let currentImageIndex = 0;




gallery.addEventListener('keydown', (event) => {
    if (event.key === 'ArrowRight'){
        currentImageIndex += 10;
        gallery.style.transform = `translateX(${currentImageIndex}px)`
    } else if (event.key === 'ArrowLeft') {
        currentImageIndex -= 10;
        gallery.style.transform = `translateX(${currentImageIndex}px)`
    }

});









//task 2

const boxes = document.getElementById('boxes');
const createBtn = document.querySelector('[data-action="render"]');
const deleteBtn = document.querySelector('[data-action="destroy"]');
const input = document.querySelector('.input');

let currentWidth = 30;
let currentHeight = 30;

const createBoxes = (amount) => {
    for (let i = 0; i < amount; i++){
        const box = document.createElement('div')
        box.style.backgroundColor = `rgb(${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)}, ${Math.floor(Math.random() * 256)})`;
        box.style.width = `${currentWidth}px`
        box.style.height = `${currentHeight}px`

        boxes.appendChild(box);

        currentHeight += 10;
        currentWidth += 10;
    }

}

const destroyBoxes = () => {
    boxes.innerHTML = '';
    currentWidth = 30;
    currentHeight = 30;
}


createBtn.addEventListener('click', () => {
    const amount = parseInt(input.value);
    if (amount > 0 && amount <= 100) {
        createBoxes(amount)
    }else {
        alert('введи число від 1 до 100')
    }
})

deleteBtn.addEventListener('click', () => {
    destroyBoxes()
})









































