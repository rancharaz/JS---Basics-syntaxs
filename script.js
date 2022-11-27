/* console.error(true);
console.warn(true);
console.count(true) */

/* var ; let; const ; */

// strings numbers booleans null undefined symbol

/* const name = 'john doe';
console.log(name)
const age = 50;
console.log(age);
const isCool = true;
console.log(isCool);
const rating = 4.5;
console.log(rating);
const x = null;
console.log(x)
const y = undefined;
console.log(y);
let z;

console.log(typeof (z)) */



//concatenation
/* const name = 'john doe';
const age = 50;
console.log(`my name is ${name} my age is ${age}`) */

/* const s = 'Keyboard, mouse, monitor, laptop, webcam, microphone';
 */
/* console.log(s.substring(0, 5).toLocaleLowerCase()) */
/* console.log(s.split(", ")) */

//arrays

/* const numbers = new Array(1, 2, 3, 4, 5, 6);
console.log(numbers) */

/* const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits);

console.log(fruits[1])
console.log(fruits.push('mango'));
console.log(fruits);
console.log(fruits.unshift("grapes"));
console.log(fruits);
console.log(fruits.shift());
console.log(fruits.pop())

console.log(Array.isArray(fruits));
console.log(fruits.indexOf('oranges')) */

/* const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'movies', 'sports'],
    address: {
        street: 'Ave de la dignité',
        city: "Quatre Bornes",
        state: 'Plain Willems'
    }
}
const { firstName, lastName, hobbies, address: { city } } = person
console.log(hobbies[1]);
console.log(city);

person.email = 'john@doe.com';

console.log(person) */

/* const todos = [
    {
        id: 1,
        text: 'take out the trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: true
    },
] */


/* console.log(todos[1].text);

const todoJSON = JSON.stringify(todos);
console.log(todoJSON) */

/* for (let i = 10; i < 50; i++) {
    console.log(`There age is ${i}`)
} */

/* let age = 10;

while (age < 101) {
    console.log(age);
    age++;
}

for (let i = 0; i < todos.length; i++) {
    console.log(`For loop number ${i}`)
} */


/* for (let todo of todos) {
    console.log(todo.text)
} */
/* const todos = [
    {
        id: 1,
        text: 'take out the trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },
]
let ages = [2, 12, 5, 18, 25, 36, 29, 65, 47, 55, 65, 75, 78, 82, 89, 99, 90, 101, 48];

todos.forEach(function (todo) {
    console.log(todo.text)
})

let todosMap = todos.map(todo => todo.text)
console.log(todosMap);

let todosFilter = todos.filter(todo => todo.isCompleted === true).map(todo => todo.text);
console.log(todosFilter) */

/* const x = 40;
const y = 10;

if (x > 10 && y > 10) {
    console.log(true)
} else if (x > 10) {
    console.log('x is greater of ten')
}
else {
    console.log('x is less than ten')
} */
/* let x = 20;
const color = x > 40 ? 'red' : 'blue';

switch (color) {
    case 'red':
        console.log('color is red')
        break;
    case 'blue':
        console.log('color is blue');
        break;

    default:
        console.log('color is default')
        break;
} */

/* function addNums(num1 = 1, num2 = 1) {
    return num1 + num2
}
console.log(addNums()); */
/*
const addNum = (num1 = 1, num2 = 1) => num1 + num2;

console.log(addNum());
 */

/* const todos = [
    {
        id: 1,
        text: 'take out the trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dentist appointment',
        isCompleted: false
    },
]

const x = todos.forEach(todo => console.log(todo.text)); */




/* function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
    this.getBirthYear = function () {
        return this.dob.getFullYear()
    }
    this.getFullName = function () {
        return `His name is ${this.firstName} ${this.lastName}`
    }
}
const person1 = new Person("david", "beckham", '1990-1-1');
const person2 = new Person('Mary', 'Curry', '1915-03-24')
console.log(`The name of the person is ${person1.firstName}`)
console.log(person1.getBirthYear());
console.log(person1.getFullName()) */




/* function Person(firstName, lastName, dob) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.dob = new Date(dob);
}

Person.prototype.getBirthYear = function () {
    return this.dob.getFullYear()
}
Person.prototype.getFullName = function () {
    return `His name is ${this.firstName} ${this.lastName}`

}
const person1 = new Person("david", "beckham", '1990-1-1');
const person2 = new Person('Mary', 'Curry', '1915-03-24')

console.log(person2.getBirthYear()) */


/* class Person {
    constructor(firstName, lastName, dob) {
        this.firstName = firstName;
        this.lastName = lastName;
        this.dob = new Date(dob);
    }
    getBirthYear() {
        return this.dob.getFullYear();
    }
    getFullname() {
        return `His name is ${this.firstName} ${this.lastName}`;

    }
}
const person1 = new Person("david", "beckham", '1990-1-1');
console.log(person1.getBirthYear()); */





///single element selector

/* const form = document.getElementById('my-form');
console.log(document.querySelector('h1'));
 */
//multiple element
/* console.log(document.querySelectorAll('.item'))
console.log(document.getElementsByClassName('.items'));
console.log(document.getElementsByTagName('.items'));
 */

/* const items = document.querySelectorAll('.item');
items.forEach((item) => {
    console.log(item)
}) */





/* const ul = document.querySelector('.items'); */
/* ul.remove() */
/* ul.lastElementChild.remove() */
/* ul.firstElementChild.textContent = 'hello world';
ul.children[1].innerText = 'Brad';
ul.lastElementChild.innerHTML = '<h1> Text </h1>'
 */




/* const btn = document.querySelector('.btn');
btn.addEventListener('mouseover', function (e) {
    e.preventDefault()
    document.querySelector('#my-form').style.background = '#ccc';
    document.querySelector('body').classList.add('bg-dark');
    document.querySelector('.items').lastElementChild.innerHTML = '<h1> Hello</h1>'
}) */


/* 
const myForm = document.querySelector('#my-form');
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const msg = document.querySelector('.msg');
const userList = document.querySelector('#users');

myForm.addEventListener('submit', onSubmit);

function onSubmit(e) {
    e.preventDefault();


    if (nameInput.value === "" || emailInput === "") {
        msg.innerHTML = 'Please enter all fields';
        msg.classList.add('error');

        setTimeout(() => {
            msg.remove()
        }, 3000)
    }
    else {
        const li = document.createElement('li');
        li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`));

        userList.appendChild(li);

        nameInput.value = '';
        emailInput.value = '';
    }
} */