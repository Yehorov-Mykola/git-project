"use strict"

//1. 
console.log ('1 завдання - Запорожець');
const car = {
    model: 'ZAZ-968',
    year: 1994,
    color: 'red',
    signal: function(){
        console.log ('fa-fa');
    } 
   }
    console.log(car.color);
   //1.1
   car.color = 'blue';
   console.log(car.color);
   //1.2
   car.type = 'elecric';
   console.log (car)
   //1.3
   car.signal();

  //2.
  console.log ('2 завдання - Зарплатня');  
  const salaries = {
    frontend: 12000,
    backend: 10000,
    designer: 8000,
    dayPay() {
      console.log('We must pay salary ');
    },
    total() {
      let salarySum = 0;
        for (const key in salaries){
          if(!isNaN(salaries[key])){
            salarySum += salaries[key];
          }          
        }
    console.log(salarySum);
       }  
  }   
  salaries.total();
  salaries.manager = 5000;
  salaries.total();

  //3. Функція-конструктор
  console.log ('3 завдання - Функція-конструктор');
  function Laptop(brand, system, cost){
    this.brand = brand;
    this.system = system;
    this.cost = cost;
   }
   let dell = new Laptop('Dell', 'windows', '800');
   let apple = new Laptop('Apple', 'MAC OS', '1700');

   console.log(dell);
   console.log(apple);

  //4. Додаємо таски
  console.log ('4 завдання - Таски');
let taskName, taskStatus, taskText

  const tasks = {
    Anna: {
      status: 'new',
      text: 'Create checkout page'
    }, 
    Ihor: {
      status: 'done',
      text: 'Add styles to header'
    } 
  }

  console.log(tasks);


  taskName = prompt("Enter Name", 'Name');

  while (tasks.hasOwnProperty(taskName)){
    taskName = prompt("This name is taken. Enter another name", 'Name');
  }

  taskStatus = prompt("Enter task Status", 'new');
  while(taskStatus.toLowerCase() !== 'done' && taskStatus.toLowerCase() !== 'new'){
    taskStatus = prompt("Enter correct task Status", 'new');
}

  taskText = prompt("Enter taskText", '1');
 
  tasks [taskName] = {status: taskStatus, text: taskText};
  console.log(tasks);





   

