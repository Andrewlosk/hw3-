'use strict';

// task 1

const user = {
    hobby: 'painting',
    premium: true
}

user.mood = 'happy'
user.hobby = 'skydiving'
user.premium = false



for (let key of Object.keys(user)) {
    console.log(`${key}: ${user[key]}`);
}


//task 2


const countProps = function(obj) {
    let count = 0;

    for (let key of Object.keys(obj)) {
        count += 1
    }
    return count
};

console.log(countProps({name:'an', age: 15, prof: 'painter'}));




//task 3

const employees = {
    andrii: 13,
    ivan: 44,
    dima: 12,
    maks: 14
} 


const findBestEmployee = function(employees){
    let mostUsefulEmployee = 0;
    let mostUsefulEmployeeName = '';
    const employeesTasks = Object.entries(employees)

    for (let i = 0; i < employeesTasks.length; i++) {
        if (mostUsefulEmployee < employeesTasks[i][1]) {
            mostUsefulEmployee = employeesTasks[i][1]
            mostUsefulEmployeeName = employeesTasks[i][0]
        }
    }


    return `${mostUsefulEmployeeName} : ${mostUsefulEmployee}`
    
}

console.log(findBestEmployee(employees)); 



//task 4 


const employeesSalary = {
    andrii: 13500,
    ivan: 10000,
    dima: 9800,
    maks: 12000
} 


const countTotalSalary = function(employees) {
    let salarySum = 0;
    const salaryArray = Object.values(employees);
    for (let i = 0; i < salaryArray.length; i++) {
        salarySum += salaryArray[i]
    }
    return `sum of salary: ${salarySum}`
}


console.log(countTotalSalary(employeesSalary));







//task 5

const users = [
    {name: 'ivan', age: 13},
    {name: 'matvij', age: 53},
    {name: 'nika', age: 15},
]


const getAllPropValues = function(arr, prop) {
    const allProp = []

    for (const obj of arr) {
        if (prop in obj) {
            allProp.push(obj[prop])
        }
    }
    return allProp
}



console.log(getAllPropValues(users, 'age'));



//task 6

const products = [
    {name: 'cucumber', price: 4, number: 10},
    {name: 'apple', price: 10, number: 40},
    {name: 'carrot', price: 4, number: 60}
    
]

const calculateTotalPrice = function(allProdcuts, productName) {
    let productSum = 0
    for (const product of allProdcuts) {
        if (product.name === productName) {
            productSum = product.price * product.number
        }
    }
    return productSum
}


console.log(calculateTotalPrice(products, 'carrot'));







//! деструктуризація 

// 1
const {hobby, premium, mood} = user
console.log(hobby, premium, mood);




//2

const {andrii: user1, ivan: user2, dima: user3, maks: user4} = employees
console.log(user1, user2, user3, user4);



// 3

const {andrii: andriiSalary, ivan: ivanSalary, dima: dimaSalary, maks: maksSalary} = employeesSalary
console.log(andriiSalary, ivanSalary, dimaSalary, maksSalary);




// 4


const [
    {
        name: name1,
        age: age1
    },
    {
        name: name2,
        age: age2
    },
    {
        name: name3,
        age: age3
    }

] = users


console.log(name1, name2, name3, age1, age2, age3);

//5




const [
    {
        name: productName1,
        price: productPrice1,
        number: productNumber1
    },
    {
        name: productName2,
        price: productPrice2,
        number: productNumber2
    },
    {
        name: productName3,
        price: productPrice3,
        number: productNumber3
    }   
] = products

console.log(productName1, productName2, productName3, productPrice1, productPrice2, productPrice3, productNumber1, productNumber2, productNumber3);






