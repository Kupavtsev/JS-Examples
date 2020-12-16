const person = {
    name: 'John',
    greet() {
        console.log(`I'm ${this.name}`);
    }
}

const user = {
    name: 'Sam'
}

// Нам нужно использовать Метод greet
// в Объекте user

// Можно скопировать метод
user.greet = person.greet;
user.greet();

// Но можно не изменять объект user
fun.call(context);
fun.apply(context);

//
const person = {
    name: 'John',
    greet() {
        console.log(`I'm ${this.name}`);
    }
}

const user = { name: 'Sam' }
person.greet.call(user);

// call может вызвать функцию, которая
// вообще не является методом какого либо объекта
const person = { name: 'John' }
const user = { name: 'Sam' }

function greet() {
    console.log(`I'm ${this.name}`);
}

greet.call(user);
greet.call(person);

// в call можно передавать аргументы
// через запятую после контекста
const obj = { num: 45 }

function sum(a) {
    return a + this.num;
}

const res = sum.call(obj, 20);

// few args
const obj = { num: 45 }

function calc(a, b) {
    return (a + this.num) * b;
}

const res = calc.call(obj, 20, 3);

// apply works the same as call
// but args it recive as Array
const obj = { num: 45 }

function calc(a, b) {
    return (a + this.num) * b;
}

const res = calc.apply(obj, [20, 3]);

// bind можно изменять контекст не изменяя функцию
// т.е. ф. можно записать и вызвать в дальнейшем
// но работать она будет с новым контекстом
const obj = { num: 45 }

function calc(a, b) {
    return (a + this.num) * b;
}

const fun = calc.bind(obj);
const res = fun(5, 2);