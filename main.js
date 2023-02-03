"use strict"

//1. Клас User та захищенність
class User{
  #name;
  constructor(name, login, age){
    this.#name = name;
    this.login = login;
    this.age = age; 
  }
  
  getName(isAdmin){
    if(isAdmin) {
      if (this.#name !== ""){
        return this.#name;
      }
      else{
        return this.login;
      }
    }
    else{
      return ('Permission denied')
    }
  }

  ChangeName(name, password){
    if(password === '123') {;
        let oldName =  this.#name;
        this.#name = name;
        return `Name Changed from ${oldName} to ${this.#name}`;
    }
    else{
      return ('Permission denied')
    }
  }
}

class UserPhone{
  #phone;
  constructor(name, phone){    
    this.name = name;
    this.#phone = phone;
    }
    getPhone(isAdmin){
      if(isAdmin) {
        return this.#phone;
      }
      else{
        let arrayOfPhone = this.#phone.split('-');
        arrayOfPhone.splice(1, 2, '*****');
        const secretPhone = arrayOfPhone.join('-');
        return secretPhone;
      }
    }
}

//1. Клас юзер та захищенність
let user1 = new User ('Mike', 'MK_18', 18);
let user2 = new User ('', 'NRG', 22); 

console.log('1. Клас User та захищенність:');
console.log(user1.login);
console.log(user1.age);
console.log(user2.login);
console.log(user2.age);

//2. повернення імені користувача
console.log('2. Повернення імені користувача:');
console.log(user1.getName(true));
console.log(user2.getName(true));
console.log(user2.getName(false));

//3. Зміна імені користувача за паролем
console.log('3. Зміна імені користувача за паролем:');
console.log(user1.ChangeName('Bill', '123'));

//5. Шифрований номер телефону
console.log('5. Шифрований номер телефону:');
let userPhone1 = new UserPhone('Mike', '067-888-88-99');
let userPhone2 = new UserPhone('Tom', '099-888-88-99');
console.log(userPhone1.getPhone(false));
console.log(userPhone2.getPhone(false));
console.log(userPhone1.getPhone(true));
console.log(userPhone2.getPhone(true));

