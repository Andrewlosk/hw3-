'use strict';

//task 1

const categories = document.getElementById('categories')
const categoryName = document.querySelectorAll('.item')

console.log(`кількість категроій ${categoryName.length}`);

categoryName.forEach(item => {
    const categoryTitle = item.querySelector('h2')
    console.log(`заголовок елеменів ${categoryTitle.textContent }`);
    const quantityOfCategory = item.querySelectorAll('ul li')
    console.log(`кількість елементів${quantityOfCategory.length}`);
})



//task 2
const ingredientsList = document.getElementById('ingredients');
const ingredients = [
    'Картопля',
    'Гриби',
    'Часник',
    'Помідори',
    'Зелень',
    'Приправи',
   ];



ingredients.forEach(ingredient => {
    const listItem = document.createElement('li');
    listItem.textContent = ingredient;
    ingredientsList.appendChild(listItem)

});



//task 3


const gallery = document.getElementById('gallery')
const images = [
    {
     url:
      'https://images.pexels.com/photos/140134/pexels-photo-140134.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'White and Black Long Fur Cat',
    },
    {
     url:
      'https://images.pexels.com/photos/213399/pexels-photo-213399.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Orange and White Koi Fish Near Yellow Koi Fish',
    },
    {
     url:
      'https://images.pexels.com/photos/219943/pexels-photo-219943.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260',
     alt: 'Group of Horses Running',
    },
];


const gallHtml = images.map(item => `
    <li>
        <img src="${item.url}" alt="${item.alt}">
    </li>
`).join('')

gallery.insertAdjacentHTML('beforeend', gallHtml);








// task 4


const decrement = document.querySelector('[data-action="decrement"]');
const increment = document.querySelector('[data-action="increment"]');
let counter = document.getElementById('value')

let counterValue = 0



const incrementFunc = () => {
    counterValue += 1
    counter.textContent = counterValue
}
const decrementFunc = () => {
    counterValue -= 1
    counter.textContent = counterValue
}



decrement.addEventListener('click', () => {
    decrementFunc()
    
})

increment.addEventListener('click', () => {
    incrementFunc()
})











