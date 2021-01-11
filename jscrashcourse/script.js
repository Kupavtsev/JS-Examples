//'use strict'
let scriptName = document.querySelector('p');
scriptName.innerHTML = 'script.js';

/*
let obj = {
    a: 20,
    b: 15,
    sum: function() {
        console.log(this);
        function shout () {
            console.log(this);
        }
        shout();
    }
}

obj.sum();
*/

/*
function testContext (a = 1, b = 2) {
    this.a = a;
    
    console.log(this);
        function sum() {
            console.log(a);
            console.log(a + b);
        }
    sum();
}

let try1 = new testContext(2);
console.log(try1)
*/

'use strict'
let user = { 
    name: 'John'
};

function sayName(surname) {
    console.log(this);
    //console.log(this.name + surname);
}

console.log(sayName.call(user, ' Smith'));
console.log(sayName.apply(user, [' Johnson']));
console.log('');

let newCont = sayName.bind(2);
console.log(newCont(this));
//newCont(this + 'will be achived!');

function count(number) {
    return this * number 
}

let double = count.bind(2);
console.log(double(3));
console.log(double(10));

scriptName.addEventListener('click', function() {
    console.log(this);
    this.style.color = 'red';
    function showThis() {
        console.log(this);
    }
    showThis();
})