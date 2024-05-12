const users = [
    {name: 'Bobik', eyeColor: 'green', gender: 'male', isActive: true, email: 'bobik@gmail.com', age: 30},
    {name: 'Ivan', eyeColor: 'black', gender: 'male', isActive: false, email: 'ivan123@gmail.com', age: 12},
    {name: 'Maks', eyeColor: 'green', gender: 'male', isActive: false, email: 'maksim_br2007@gmail.com', age: 17},
    {name: 'Nika', eyeColor: 'blue', gender: 'female', isActive: true, email: 'niksss@gmail.com', age: 15},
    {name: 'Vika', eyeColor: 'brown', gender: 'female', isActive: true, email: 'vika2000@gmail.com', age: 24},

]


// task1
// const allName = users.map(user => user.name);
// console.log(allName);


//task2

// const eyeColor = users.filter((user) => {
//     return user.eyeColor === 'green'
// });
// console.log(eyeColor);




//task3


// const byGender = users.filter((user) => {
//     if (user.gender === 'male') {
//         return user.name
//     }
// })

// const nameByGender = byGender.map(user => user.name)

// console.log(nameByGender);


// task 4

// const filterByOffline = users.filter((user) => {
//     if (user.isActive === false) {
//         return user
//     }
// })

// console.log(filterByOffline);





//task 5

// const findByEmail = users.find(user => user.email === 'bobik@gmail.com')
// console.log(findByEmail);


//task 6

const passedAge = users.filter(user => user.age > 13 && user.age < 29)

console.log(passedAge);