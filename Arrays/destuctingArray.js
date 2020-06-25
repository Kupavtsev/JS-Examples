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