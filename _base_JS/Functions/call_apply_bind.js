// Object method with handling to it's data by 'this'
const person = {
    name: 'John',
    greet() {
        console.log(`I'm ${this.name}`);
    }
}

const user = {
    name: 'Sam'
}

//      --- We need to use method of one object in another ---

// Copy of objects methods
user.greet = person.greet;
user.greet();


//      --- Another way ---


// We can change object 'user'
fun.call(context);
fun.apply(context);


// Object method with handling to it's data by 'this'
const person = {
    name: 'John',
    greet() {
        console.log(`I'm ${this.name}`);
    }
}


// 1
const user = { name: 'Sam' }
person.greet.call(user);


// 2
// We can call external functions
const person = { name: 'John' }
const user = { name: 'Sam' }

function greet() {
    console.log(`I'm ${this.name}`);
}

greet.call(user);
greet.call(person);


// 3
// call acepts an arguments, after comma
const obj = { num: 45 }

function sum(a) {
    return a + this.num;
}

const res = sum.call(obj, 20);


// 4
// few args
const obj = { num: 45 }

function calc(a, b) {
    return (a + this.num) * b;
}

const res = calc.call(obj, 20, 3);


//      --- 'apply' works the same as call ---

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