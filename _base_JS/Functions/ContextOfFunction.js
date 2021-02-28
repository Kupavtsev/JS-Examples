// sayHi this is Method of person
const person = {
    name: 'John Smith',
    sayHi: function() {
        console.log('Hi');
    }
}
person.sayHi();

// The same but shorter
const person = {
    name: 'John Smith',
    sayHi() {
        console.log('Hi');
    }
}
person.sayHi();

// Доступ к свойству Объекта
const person = {
    name: 'John Smith',
    sayHi() {
        console.log(`Hi ${this.name}`);
    }
}
person.sayHi();

// Запись свойства через this
const person = {
    name: 'John Smith',
    changeName(str) {
        this.name = str;
    }
}
person.changeName('Sam');
console.log(person.name);

// this не фиксированное, оно всегда ссылается на Контекст
// в котором функция вызвана прямо сейчас
function greet() {
    console.log('hello ' + this.name);
}

const user1 = { name: 'Sam' }
const user2 = { name: 'John' }

// Добавляем метод greet в объекты
user1.f = greet;
user2.f = greet;

user1.f();
user2.f();

// Лучше не использовать Стрелочную функцию
// если вы планируете использовать в Методе this
const person = {
    name: 'John Smith',
    sayHi: () => {
        console.log(`Hi ${this.name}`);
    }
}
person.sayHi();
// Error

//
const calc = {
    a: 3,
    b: 4,
    sum() {
        console.log(this.a + this.b);
    },
    mul() {
        console.log(this.a * this.b);
    },
    write(a , b) {
        this.a = a;
        this.b = b;
    }
}

calc.sum();
calc.mul();
calc.write(6, 7);
console.log(calc);