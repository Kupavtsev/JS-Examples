let scriptName = document.querySelector('p');
scriptName.innerHTML = 'main.js';

// console.log('Hello world')
// console.error('This is an error')
// console.warn('This is an warning')

/* var, let, const. Now main: let, const. Always use const if 
 you not going reasing */

let score;
score = 31;

console.log(score)

// Strings, Numbers, Boolean, null, underfined, Symbol

const name = 'John';
const age = 30;
const rating = 4.5;
const isCool =true;
const x = null;
const y = undefined;
let z;

console.log(typeof z);

// Concatenation
console.log('My name is ' + name + ' and I am ' + age);   // old method

//Template String
console.log(`My name is ${name} and I am ${age}`);
const hello = `My name is ${name} and I am ${age}`;
console.log(hello)

const s = 'Hello World'
console.log(s.length);
console.log(s.toUpperCase());
console.log(s.substring(0, 5)); //Slice in Python
console.log(s.substring(0, 5).toLocaleUpperCase());
console.log(s.split(''));

const s1 = 'technology, computers, it, code'
console.log(s1.split(', '));

// Arrays - variables that hold multiple values
// new -  this is constructor

const numbers = new Array(1,2,3,4,5);
console.log(numbers);

const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits)

const multitypes = ['apples', 'oranges', 'pears', 10, true];
console.log(multitypes);

// ---           JS is not statically Typed          ---

// const fruits = ['apples', 'oranges', 'pears'];
console.log(fruits[1])  // indexec the same as in Python, starting from 0

fruits[4] = 'grapes'    // we make adding an element by index
console.log(fruits);

fruits.push('mangos');  // add to the end
console.log(fruits);
fruits.unshift('strawberries') // at the begin
console.log(fruits);

fruits.pop();
console.log(fruits);

console.log(Array.isArray(fruits));

console.log(fruits.indexOf('oranges'))

// ----- DON'T FOGET TO REMOVE THIS ------
console.clear();

// ---          Objects         ---

const person = {
    firstName: 'John',
    lastName: 'Doe',
    age: 30,
    hobbies: ['music', 'moves', 'sports'],
    address: {
        street: '50 main st',
        city: 'Boston',
        state: 'MA'
    }
}

console.log(person);
console.log(person.firstName);
console.log(person.firstName, person.lastName);

console.log(person.hobbies[1]);
console.log(person.address.city);

const { firstName, lastName, address: {city} } = person;
console.log(city);

person.email = 'john@gmail.com';
console.log(person);

// ----- DON'T FOGET TO REMOVE THIS ------
console.clear()
// ---          Arrays of objects           ---

const todos = [
    {
        id: 1,
        text: 'Take out trash',
        isCompleted: true
    },
    {
        id: 2,
        text: 'Meeting with boss',
        isCompleted: true
    },
    {
        id: 3,
        text: 'Dendiest appt',
        isCompleted: false
    },
];

// console.log(todos[1].text);

// ---          JSON            ---
// We need json to send data to a server

const todoJSON = JSON.stringify(todos);
console.log(todoJSON);

// ---          For Loop            ---

for(let i = 0; i <= 10; i ++){
    console.log(`For Loop Number: ${i}`)
};

// ---          While Loop          ---
let i = 0;
while(i < 10){
    console.log(`While Loop Number: ${i}`)
    i++;
}
// ----- DON'T FOGET TO REMOVE THIS ------
console.clear()

// for with using of varibles and length
for(let i = 0; i < todos.length; i ++){
    console.log(todos[i].text)
};

//todo could be anything 't' or else
for(let todo of todos){
    console.log(todo.text)
};

// ----- DON'T FOGET TO REMOVE THIS ------
console.clear()

// ---          High order Array Methods            ---
// forEach, map
// forEach - just loops throu them
// map - allow create a new Array from an Array
// filter - allow create a new Array based on a condision

//'todo' any variabele you wona use
todos.forEach(function(todo){
    //console.log(todo.text);
});

const todoText = todos.map(function(todo){
    return todo.text;
});
//console.log(todoText);

/*
const todoComplited = todos.filter(function(todo){
    return todo.isCompleted === true
});
console.log(todoComplited);
*/

const todoComplited = todos.filter(function(todo){
    return todo.isCompleted === true
}).map(function(todo){
    return todo.text;
})
console.log(todoComplited);

// ----- DON'T FOGET TO REMOVE THIS ------
console.clear()

// ---          Conditionals            ---
// === for matches the types!, == for string and/or numbers
// it's better always use ===
// we can have as many 'else' as we want 
// or ||    and &&

const a = 4;

if (a > 10) {
    console.log('a is 10')
} else if(a > 10) {
    console.log('a is greater than 10');
} else {
    console.log('a is less than 10');
}

const b = 6;
const c = 11;

if (b > 5 && c > 10) {
    console.log('b is more than 5 or c is more than 10')
} 

// ---          Turnary Operator (?)            ----
// ? - than
// : - else

const t = 11;

const color = t > 10 ? 'red' : 'blue';

console.log(color);

// ---          Switches            ---
switch(color) {
    case 'red':
        console.log('color is red');
        break;
    case 'blue':
        console.log('color is blue');
        break;
    default:
        console.log('color is NOT red or blue');
        break;
}

//54:03