"use strict";

let username

let greeting = 'hello ' +  (username != null ? username : 'there');
let bye = (username != null ? username : 'bye');

console.log(username != null);
console.log(greeting);
console.log(username == null);
console.log(bye);



let s = "Hello world";

let lastChar = s.charAt(s.length - 1);
let first = s.charAt(0);
console.log(lastChar, first);

let sub = s.substring(1,4);
let i = s.indexOf('w');
console.log(sub, i);


let num = 150.254;

let prs = "3 main markets i have";
let prs2 = '0.25 chance i has too';

