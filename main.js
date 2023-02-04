"use strict"

//1. Сума всіх елементів масиву
let a = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function sumArr(arr, sum = 0, i = 0) {
    if (arr[i]) {
		return sumArr(arr, sum + arr[i], ++i)
	} else {
		return sum
	}
}
console.log('1. Сума всіх елементів масиву');
console.log(sumArr(a));

//2. Кількість усіх елементів у масиві
const arr1 = [];
const arr2 = [1, 2, 3];
const arr3 = ['x', 'y', ['z']];
const arr4 = [1, 2, [3, 4, [5]]];
const arr5 = [[[[]]]];

let count = 0;

function deepCount(arr, reset = false) {
  if(reset) count = 0
  for (const item of arr) {
    if (Array.isArray(item)) {
      count++;
      deepCount(item);
    }else {
      count++
    }
  }
  return count
}

console.log('2. Кількість усіх елементів у масивах');
console.log(deepCount(arr1, true));
console.log(deepCount(arr2, true));
console.log(deepCount(arr3, true));
console.log(deepCount(arr4, true));
console.log(deepCount(arr5, true));

//3. Замикання
let employees = {
    development: {
    backend: [{name: 'Mike', salary: 2000}, {name: 'Nikola', salary: 2500}],
    frontend: [{name: 'Artem', salary: 3000}, {name: 'Alex', salary: 2700}],
    },
    sales: {
        marketing: {
            internet_marketers: [{name: 'Nina', salary: 1000}, {name: 'Olena', salary: 1300}],
            promotion: [{name: 'Oleg', salary: 1400}, {name: 'Masha', salary: 1700}],
            },
        sellers: [{name: 'Max', salary: 900}, {name: 'Donald', salary: 700}, {name: 'Joe', salary: 1100}]
        },
    designer: [{name: 'Kate', salary: 1800}]
}

function takeSumSallary(){
    let sum = 0;
    return function sumSallary(obj)
    {
     for(let key in obj)
        {
            if (Array.isArray(obj[key]))
                {
                    obj[key].forEach(employee => sum += employee.salary);
                } 
            else 
                {
                    sumSallary(obj[key]);
                }
        }
        return sum;
    }
}
const sumSalary = takeSumSallary();
console.log('3. Замикання. Сума зарплатні усіх працівників');
console.log(sumSalary(employees));

//4. Найбільше число в трьох масивах
let arrOne = [2, 15, 7 ,3];
let arrTwo = [9, 3, 17, 12, 4, 8];
let arrThree = [6, 11, 16, 15, 11];

let newArr = [...arrOne, ...arrTwo, ...arrThree];
const maxNumber = Math.max(...newArr);
console.log('4. Найбільше число в трьох масивах');
console.log(maxNumber);