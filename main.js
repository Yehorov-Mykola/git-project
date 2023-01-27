"use strict"

//1. Імена
    let users = ['Mike', 'Nikola', 'Tom'];
    //1.1
    console.log(`Другий за індексом елемент - ${users[1]}`);
    //1.2
    users.splice(1, 2,)
    console.log (`Видалили останні 2 елементи - ${users}`);    
    //1.3
    console.log(`Довжина масиву - ${users.length}`);

//2. Порівняння масивів
    let a = [5, 3, -4, 25, 32, -16, 6];
    let b = [21, -30, 9, 5, 12, -19, 5, 25];

    const sumArrA = a.reduce((accumulator, currentValue) => accumulator + currentValue);

    const sumArrB = b.reduce((accumulator, currentValue) => accumulator + currentValue);

    if (sumArrA > sumArrB){
        console.log('a > b');
    }
    else if (sumArrA < sumArrB){
        console.log('a < b');
    }
    else {
        console.log('a == b');
    }

    //3. Кожне слово - елемент масиву
    let phrase = 'I am learning JavaScript right now';
    console.log(phrase.split(' '));

    //4. Копіювання елементів масиву
    //Назвав масиви c та d, тому що a і b вже були вище
    let c = [5, 3, 8, 5, 3, 2, 1, 2];
    let d = [];

    c.forEach((item) => {
        if (d.includes(item) === false){
            d.push(item);
        }        
    })
    console.log(d);

    //5. Знайти та вивсети всі номери об'єктів, від 18 до 21
    let usersAge = [{id: 1, age: 17},
                    {id: 2, age: 18},
                    {id: 3, age: 19},
                    {id: 4, age: 21},
                    {id: 5, age: 17},
                    {id: 6, age: 20},
                    {id: 7, age: 25}];

    function selectionAge(arr){
        let newAge = [];
        newAge = arr.filter(user => (user.age > 18) && (user.age < 21));        
        let newId = [];
        newAge.forEach((user) => {
            newId.push(user.id);            
        })
        console.log(...newId);
    }

    selectionAge(usersAge);


