"use strict"

//1. Об'єкт car
let car = {
  type: "electric",
  wheels: 4
};

let sportCar = {
  doors: 2
};

let passengerCar = {
  doors: 4
};

let toyCar = {
  type: "toy"
};

Object.setPrototypeOf(sportCar, car);
console.log(sportCar.wheels)

Object.setPrototypeOf(passengerCar, car);
console.log(passengerCar.type)

Object.setPrototypeOf(toyCar, sportCar);
console.log(toyCar.type)
console.log(toyCar.wheels)


//2. Виправити код. Я так зрозумів, що можна було будь-яким способом виправити код
let frontendEmployees = {
  wallet:{},
  pay(munth, sum) {
    this.wallet[munth] = sum;
  }
};

let backendEmployees = {
  wallet:{},
  pay(munth, sum) {
    this.wallet[munth] = sum;
  }
};

let frontendDeveloper = {
  name: 'Mike',
}
Object.setPrototypeOf(frontendDeveloper, frontendEmployees);

let backendDeveloper = {
  name: 'Bob',
}
Object.setPrototypeOf(backendDeveloper, backendEmployees);
backendDeveloper.pay('june', 1500);
frontendDeveloper.pay('june', 2000);
console.log(backendDeveloper.wallet.june);
console.log(frontendDeveloper.wallet.june);

//3. Створити нового користувача
function User(name, age){
  this.name = name;
  this.age = age
}
let user_1 = new User ('Mike', 18);
let user_2 = new user_1.constructor ('Bob', 25);
console.log(user_1);
console.log(user_2);

//4. Створити нового користувача. 1 варіант

function UserType(name){
  for(let i = 0; i < name.length; ++i){
    this[i] = name[i];
    if(i + 1 == name.length){
      Object.defineProperty(this, 'length', {
        enumerable: true,
        writable: false,
        configurable: true,
        value: i + 1
      });
    }
  }
}
let admits = new UserType(['Mike', 'Bob', 'Nikola']);

admits.join = Array.prototype.join;
console.log(admits.join('; '));


//4. Створити нового користувача. 2 варіант
function UserType2(name){
  for(let i = 0; i < name.length; ++i){
    this[i] = name[i];
    if(i + 1 == name.length){
      Object.defineProperty(this, 'length', {
        enumerable: true,
        writable: false,
        configurable: true,
        value: i + 1
      });
    }
  }
  this.join = Array.prototype.join;
}
let admits2 = new UserType2(['Mike', 'Bob', 'Nikola']);

console.log(admits2.join('; '));

