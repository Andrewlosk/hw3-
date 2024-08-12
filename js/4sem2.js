const input = document.querySelector('.slider__input');
const image = document.querySelector('.slider__image');


const resizeImg = (size) => {
    image.style.width = `${size}%`;
}

input.addEventListener('input', _.debounce((event) => {
    resizeImg(event.target.value)
}, 100))


//task2





const box = document.getElementById('box');




const handleMouseMove = (e) => {
  const offsetXY = document.getBoundingClientRect();
  const x = e.clientX-offsetXY.left;
  const y = e.clientY-offsetXY.top;
  box.style.left = x + 'px';
  box.style.top = y + 'px';
}




document.addEventListener('mousemove', _.debounce(() => {
  handleMouseMove()
}, 100))























// const wrapper = document.querySelector('.wrapper__box');



// document.addEventListener('mousemove', _.debounce((e) => {
//     const offsetXY = wrapper.getBoundingClientRect();
//     const x = e.clientX-offsetXY.left;
//     const y = e.clientY-offsetXY.top;
//     box.setAttribute('cx', x);
//     box.setAttribute('cy', y);
//     console.log(x,y);
// }, 100))



















