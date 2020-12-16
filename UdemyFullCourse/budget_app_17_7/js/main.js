'use strict'
// Получить кнопку "Начать расчет" через id
// querySelector принимает первый полеченный div
let start = document.querySelector('.start');
//let startBtn = document.getElementById('start');



// Получить все блоки в правой части программы через классы
// (которые имеют класс название-value, начиная с и заканчивая) 

let budget = document.querySelectorAll('.budget-value'),
    daybudget = document.querySelectorAll('.daybudget-value'),
    level = document.querySelectorAll('.level-value'),
    expenses = document.querySelectorAll('.expenses-value'),
    optionalexpenses = document.querySelectorAll('.optionalexpenses-value'),
    income = document.querySelectorAll('.income-value'),
    monthsavings = document.querySelectorAll('.monthsavings-value'),
    checkbox = document.querySelector('#savings'),
    //sum = document.querySelector('#sum'),
    
    yearsavings = document.querySelectorAll('.yearsavings-value'),
    
    choose = document.querySelector('.choose-income');

//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

let expensesItem = document.getElementsByClassName('expenses-item');

let ex1 = document.getElementById('expenses_1'),
    ex2 = document.getElementById('expenses_2'),
    ex3 = document.getElementById('expenses_3'),
    ex4 =document.getElementById('expenses_4');

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.

/*
let btnConfirmMain = document.querySelector('.expenses-item-btn'),
    btnConfirmOptional = document.querySelector('.optionalexpenses-btn'),
    btnCalc = document.querySelector('.count-budget-btn');
*/

let btnConfirmMain = document.getElementsByTagName('button')[0],
    btnConfirmOptional = document.getElementsByTagName('button')[1],
    btnCalc = document.getElementsByTagName('button')[2];


// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');


// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

let possibleIncome = document.querySelector('.choose-income-label'),
    accum = document.querySelector('.choose-income'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    year = document.querySelector('.year-value'),
    month = document.querySelector('.month-value'),
    day = document.querySelectorAll('.day-value')[0];

console.log(day);