'use strict';


// task 1
const btnFirst = document.getElementById('btnFirst');
const inpFirst = document.getElementById('inpFirst');


btnFirst.addEventListener('click', () => {
    const text = inpFirst.value;
    btnFirst.textContent = text;

});



// task 2
const img = document.querySelector('.flag');

img.src = 'https://ms.detector.media/doc/images/news/33333/i75_ArticleImage_33333.webp';





// task 3
const imgNew = document.querySelector('.imgNew');
const link = document.querySelector('.link');

link.href = 'https://www.youtube.com/';
imgNew.alt = 'like';



// task 4
const firstLi = document.querySelector('ul');

// console.log(firstLi);

const item = firstLi.firstElementChild;



item.textContent = 'new Text';

