'use strict';

//task 1

const friends = ['mango', 'poly', 'kiwi', 'ajax'];

let string = '';

for (let i = 0; i < friends.length; i++) {
    string += friends[i] + ' '
}
console.log(string);




let string1 = friends.join(' ');

console.log(string1);

// task 2


const cards = ['card-1', 'card-2', 'card-3', 'card-4', 'card-5'];

const delCard = cards.splice(2, 1);
cards.push('card-6')

cards[3] = 'карточка-4'


console.log(cards);
console.log(delCard);