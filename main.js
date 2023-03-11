"use strict";

//1
fetch("http://127.0.0.1:5500/home-work-data.json")
  .then((response) => response.json())
  .then((data) => {
    for (let name in data) {
      if (data[name].isAdmin === true) {
        console.log("1. IsAdmin == true has ", name);
      }
    }
  });

//2
let nikola = { firstName: "Nikola", lastName: "Tesla" };
let bob = { firstName: "Bob" };
let mike = { lastName: "Smith" };
let michael = {};

let getFullName = function (user) {
  return `${user.firstName} ${user.lastName}`;
};

getFullName = new Proxy(getFullName, {
  apply(target, thisArg, args) {
    if (args[0].firstName === undefined && args[0].lastName === undefined) {
      return "No name";
    }
    if (args[0].firstName === undefined) {
      return args[0].lastName;
    }
    if (args[0].lastName === undefined) {
      return args[0].firstName;
    }
    return target(...args);
  },
});
console.log("2 task:");
console.log(getFullName(nikola));
console.log(getFullName(mike));
console.log(getFullName(michael));
console.log(getFullName(bob));

//3
let users = [
  { name: "Nikola", age: 18, id: 1 },
  { name: "Bob", age: 25, id: 2 },
  { name: "Mike", age: 32, id: 3 },
];

localStorage.setItem("users", JSON.stringify(users));

function sayHelloToUser(id) {
  const arrUsers = JSON.parse(localStorage.getItem("users"));
  for (let user of arrUsers) {
    if (user.id === id) {
      console.log("Hello", user.name);
    }
  }
}
console.log("3 task:");
sayHelloToUser(1);

//4
const input = document.querySelector("input");
input.addEventListener("change", keepData);

function keepData() {
  let dataInput = input.value;
  localStorage.setItem("dataInput", JSON.stringify(dataInput));
}
input.value = JSON.parse(localStorage.getItem("dataInput"));