"use strict";

//task 1

// class Account {
//     constructor({login, email}){
//       this.login = login
//       this.email = email
//     }

//     getInfo() {
//         console.log(`login: ${this.login}, email: ${this.email}`);
//     }
// }

// console.log(Account.prototype.getInfo); // function

// const mango = new Account({
//  login: 'Mangozedog',
//  email: 'mango@dog.woof',
// });

// mango.getInfo(); // Login: Mangozedog, Email: mango@dog.woof

// const poly = new Account({
//  login: 'Poly',
//  email: 'poly@mail.com',
// });

// poly.getInfo(); // Login: Poly, Email: poly@mail.com






//task 2

// class User {
//     constructor({name, age, followers}) {
//         this.name = name
//         this.age = age
//         this.followers = followers
//     }

//     getInfo() {
//         console.log(`User ${this.name} is ${this.age} years old and has ${this.followers} followers`);
//     }
// }

// const mango = new User({
//     name: 'Mango',
//     age: 2,
//     followers: 20,
// });

//  mango.getInfo(); // User Mango is 2 years old and has 20 followers

// const poly = new User({
//     name: 'Poly',
//     age: 3,
//     followers: 17,
// });

// poly.getInfo(); // User Poly is 3 years old and has 17 followers







//task 3

// class Storage {
//     constructor(allItems = []) {
//         this.items = allItems
//     }

//     getItems() {
//         return this.items
//     }

//     addItem(newItem) {
//         return this.items.push(newItem)
//     }

//     removeItem(delItem) {
//         const index = this.items.indexOf(delItem)
//         this.items.splice(index, 1)
//     }
// }

// const storage = new Storage([
//   "Нанітоіди",
//   "Пролонгер",
//   "Залізні жупи",
//   "Антигравітатор",
// ]);

// const items = storage.getItems();
// console.table(items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор" ]

// storage.addItem("Дроїд");
// console.table(storage.items); // [ "Нанітоіди", "Пролонгер", "Залізні жупи", "Антигравітатор", "Дроїд" ]

// storage.removeItem("Пролонгер");
// console.table(storage.items); // [ "Нанітоіди", "Залізні жупи", "Антигравітатор", "Дроїд" ]







//task 4

// class StringBuilder {
//     constructor(startValue){
//         this._value = startValue
//     }

//     get value() {
//         return this._value
//     }

//     append(elem) {
//         return this._value = this._value + elem
//     }

//     prepend(elem) {
//         return this._value = elem + this._value
//     }

//     pad(elem) {
//         return this._value = elem + this._value + elem
//     }
// }

// const builder = new StringBuilder('.');

// builder.append('^');
// console.log(builder.value); // '.^'

// builder.prepend('^');
// console.log(builder.value); // '^.^'

// builder.pad('=');
// console.log(builder.value); // '=^.^='










//task 5

class Car {
  /*
   * Додай статичний метод `getSpecs(car)`,
   * який приймає об'єкт-машину як параметр і виводить
   * в консоль значення властивостей maxSpeed, speed, isOn, distance и price.
   */
  static getSpecs(car) {
    console.log(`max Speed: ${car.maxSpeed}, speed: ${car.speed}, is on: ${car.isOn}, distance: ${car.distance}, price: ${car.price}`);
  }

  /*
   * Конструктор отримує об'єкт налаштувань.
   *
   * Додай властивості майбутнього екземпляра класу:
   * speed - поточна швидкість, початкова 0
   * price - ціна автомобіля
   * maxSpeed - максимальна швидкість
   * isOn - заведений автомобіль, значення true або false. Спочатку false
   * distance - загальний кілометраж, спочатку 0
   */
  constructor({price, maxSpeed}) {
    this.speed = 0
    this.price = price
    this.maxSpeed = maxSpeed
    this.isOn = false
    this.distance = 0
  }

  /*
   * Додай геттер і сеттер для властивості price,
   * який буде працювати з властивістю ціни автомобіля.
   */

  get price() {
    return this._price
  }

  set price(value) {
    this._price = value
  }

  /*
   * Додай код для того, щоб завести автомобіль
   * Записує у властивість isOn значення true
   */
  turnOn() {
    this.isOn = true
  }

  /*
   * Додай код для того, щоб заглушити автомобіль
   * Записує у властивість isOn значення false,
   * і скидає поточну швидкість в 0
   */
  turnOff() {
    this.isOn = false
    this.speed = 0
  }

  /*
   * Додає до властивості speed отримане значення,
   * за умови, що результуюча швидкість
   * не більше, ніж значення властивості maxSpeed
   */
  accelerate(value) {
    if (this.isOn) {

        const newSpeed = this.speed + value
        if (newSpeed <= this.maxSpeed) {
            this.speed = newSpeed
        }
    }
  }

  /*
   * Забирає від властивості speed отримане значення,
   * за умови, що результуюча швидкість не менше нуля
   */
  decelerate(value) {
    const newSpeed = this.speed - value
    if (newSpeed > 0) {
        this.speed = newSpeed
      
    }
  }

  /*
   * Додає в поле distance кілометраж (hours * speed),
   * але тільки в тому випадку, якщо машина заведена!
   */
  drive(hours) {
    if (this.isOn) {
      this.distance += this.speed * hours
      
    }
  }
}

const mustang = new Car({ maxSpeed: 200, price: 2000 });

mustang.turnOn();
mustang.accelerate(50);
mustang.drive(2);

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 50, isOn: true, distance: 100, price: 2000

mustang.decelerate(20);
mustang.drive(1);
mustang.turnOff();

Car.getSpecs(mustang);
// maxSpeed: 200, speed: 0, isOn: false, distance: 130, price: 2000

console.log(mustang.price); // 2000
mustang.price = 4000;
console.log(mustang.price); // 4000
