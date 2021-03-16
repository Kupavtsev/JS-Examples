'use strict';

let [firstName, lastName] = ["John", "Gold"];

alert(firstName);
alert(lastName);


let [, , title] = "Юлий Цезарь Император Рима".split(" ");

alert(title);     // Император


let [firstName, lastName, ...rest] = "Юлий Цезарь Император Рима".split(" ");

alert(firstName); // Юлий
alert(lastName);  // Цезарь
alert(rest);      // Император,Рима (массив из 2х элементов)


let [firstName="Гость", lastName="Анонимный"] = [];

alert(firstName); // Гость
alert(lastName);  // Анонимный



function defaultLastName() {
    return Date.now() + '-visitor';
  }
  
// lastName получит значение, соответствующее текущей дате:
let [firstName, lastName=defaultLastName()] = ["Вася"];

alert(firstName); // Вася
alert(lastName);  // 1436...-visitor

// Разбиваем строку на переменные
'use strict';
let username = 'John Smith';
let [fName, sName] = username.split(' ');

// Исключаем лишние элементы
'use strict';
let nums = [10, 20, 30];
let [num1, ,num2] = nums;

// Создание переменной, в случае отсутствия
'use strict';
let nums = [10, 20];
let [num1, num2, num3=50] = nums;


'use strict';
const olimpics = [12, 23, 45];
let [ gold=0, , bronze=0 ] = olimpics;
console.log(gold, bronze);
  