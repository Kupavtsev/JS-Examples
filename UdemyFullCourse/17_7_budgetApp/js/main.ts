'use strict'

// Selectors from index.html

// Получить кнопку "Начать расчет" через id
// querySelector принимает первый полеченный div
let startBtn = document.querySelector('.start');
//let startBtn = document.getElementById('start');



// Получить все блоки в правой части программы через классы
// (которые имеют класс название-value, начиная с и заканчивая) 

let budgetValue = document.getElementsByClassName('budget-value')[0],


    expensesValue = document.getElementsByClassName('expenses-value')[0],

    incomeValue = document.getElementsByClassName('income-value')[0],
    monthSavingsValue = document.getElementsByClassName('monthsavings-value')[0],
    checkSavings = document.querySelector('#savings'),
    //sum = document.querySelector('#sum'),

    yearSavingsValue = document.querySelector('.yearsavings-value'),
   
    incomeItem = document.querySelector('.choose-income');

    console.log(yearSavingsValue);

//Получить поля(input) c обязательными расходами через класс. (class=”expenses-item”)

let expensesItem = document.getElementsByClassName('expenses-item');

let ex1 = document.getElementById('expenses_1'),
    ex2 = document.getElementById('expenses_2'),
    ex3 = document.getElementById('expenses_3'),
    ex4 = document.getElementById('expenses_4');

// Получить кнопки “Утвердить” и “Рассчитать” через Tag, каждую в своей переменной.

/*
let btnConfirmMain = document.querySelector('.expenses-item-btn'),
    btnConfirmOptional = document.querySelector('.optionalexpenses-btn'),
    btnCalc = document.querySelector('.count-budget-btn');
*/

let expensesBtn = document.getElementsByTagName('button')[0],
    optionalExpensesBtn = document.getElementsByTagName('button')[1];



// Получить поля для ввода необязательных расходов (optionalexpenses-item) при помощи querySelectorAll

let optionalExpensesItem = document.querySelectorAll('.optionalexpenses-item');


// Получить оставшиеся поля через querySelector (статьи возможного дохода, чекбокс, сумма, процент, год, месяц, день)

let possibleIncome = document.querySelector('.choose-income-label'),
    sum = document.querySelector('#sum'),
    percent = document.querySelector('#percent'),
    yearValue = document.querySelector('.year-value'),
    monthValue = document.querySelector('.month-value'),
    dayValue = document.querySelector('.day-value');


// -----------------------------------------BLL--------------------------------

let money,
    time;

startBtn.addEventListener('click', function () {

    let time = prompt('Enter date YYYY-MM-DD', '');
    let money = +prompt('Your monthly budget?', '');

    while (isNaN(money) || money == '' || money == null) {
        money = +prompt('Your budget?', '');

    }
    appData.budget = money;
    appData.timeData = time;

    // We put information from Variable "money" to HTML Element as Text
    budgetValue.textContent = money.toFixed();

    // We reacive amount of miliseconds from 1970
    // .getFullYear() and then we get only Year
    yearValue.value = new Date(Date.parse(time)).getFullYear();
    monthValue.value = new Date(Date.parse(time)).getMonth() + 1;
    dayValue.value = new Date(Date.parse(time)).getDate();
});

// Введите обязательные расходы
expensesBtn.addEventListener('click', function () {
    let sum = 0;

    for (let i = 0; i < expensesItem.length; i++) {
        // expensesItem является массивом, 
        // а - получаем доступ к Наименование
        // b - получаем доступ к Цена
        let a = expensesItem[i].value,
            // ++i инкремент, суть в возврате
            // ++ для того, чтобы сразу получить следующую форму подсчета
            b = expensesItem[++i].value;

        if ((typeof (a)) === 'string' && (typeof (a)) != null && (typeof (b)) != null
            && a != '' && b != '' && a.length < 50) {
            console.log("done");
            appData.expenses[a] = b;
            // +b потому что от пользователя мы получаем исключительно Строку
            sum += +b
        } else {
            i = i - 1;
        }
    }
    expensesValue.textContent = sum;
});

// Введите необязательные расходы
let optionalExpensesValue = document.getElementsByClassName('optionalexpenses-value')[0];

optionalExpensesBtn.addEventListener('click', function () {
    console.log('Нажата "Утвердить" не обязательные расходы');

    // очистка "Возможные траты:" перед заменой данных
    if (optionalExpensesValue.textContent != '') {
        optionalExpensesValue.textContent = '';
    }


    for (let i = 0; i < optionalExpensesItem.length; i++) {
        let opt = optionalExpensesItem[i].value;
        appData.optionalExpenses[i] = opt;

        // show result in the Right
        // Все что мы записали в объект перейдет на страницу динамически
        // +  ' ' прибавляем к строке Пробел
        optionalExpensesValue.textContent =
            optionalExpensesValue.textContent + appData.optionalExpenses[i] + ' ';

        // ______________________________________________________________

        // make inputs empty by timeout
        /*
        setTimeout( () => {
        for (let i = 0; i < optionalExpensesItem.length; i++) {
            optionalExpensesItem[i].value = '';
        }
        }, 100);
        */

        // make inputs empty by moveout
        optionalExpensesBtn.addEventListener('mouseleave', function () {
            for (let i = 0; i < optionalExpensesItem.length; i++) {
                optionalExpensesItem[i].value = '';
            }
        });
    }
});

// Расчет дневного бюджета
const countBugetBtn = document.getElementsByTagName('button')[2],
    levelValue = document.getElementsByClassName('level-value')[0],
    dayBudgetValue = document.getElementsByClassName('daybudget-value')[0];

countBugetBtn.addEventListener('click', function () {

    if (appData.budget != undefined) {

        // toFixed округление до первого знака. Возвращает строковое значение.
        appData.moneyPerDay = (appData.budget / 30).toFixed(1);
        dayBudgetValue.textContent = appData.moneyPerDay;

        if (appData.moneyPerDay < 100) {
            levelValue.textContent = "It's a minimum";
        } else if (appData.moneyPerDay > 100 && appData.moneyPerDay < 2000) {
            levelValue.textContent = "It's a middle incame";
        } else if (appData.moneyPerDay > 2000) {
            levelValue.textContent = "Too high for income";
        } else {
            levelValue.textContent = 'Error';
        }
    } else {
        dayBudgetValue.textContent = "Error";
        alert('You need to press "Начать расчет"!');
    }
});

incomeItem.addEventListener('input', function() {
    let items = incomeItem.value;
    // записываем значения Строки ввиде массива в объект.
    appData.income = items.split(', ');

    // Размещаем на странице
    incomeValue.textContent = appData.income;
});


checkSavings.addEventListener('click', function() {
    console.log('Pressed: checkSavings');
    if ( appData.savings == false ) {
        appData.savings = true;
    } else {
        appData.savings = false;
    }
});



// ---------------------Сумма---------Процент---------

let sumValue = document.querySelector('.choose-sum');
console.log(sumValue);
let percentValue = document.querySelector('.choose-percent');
console.log(percentValue);


sumValue.addEventListener('input', function() {
    if (appData.savings == true) {
        
        // то что вводит пользователь в "Сумма" передается в переменную sum
        let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
        
    }
});

percentValue.addEventListener('input', function() {
    if (appData.savings == true) {
        
        let sum = +sumValue.value,
            percent = +percentValue.value;

            appData.monthIncome = sum / 100 / 12 * percent;
            appData.yearIncome = sum / 100 * percent;

            monthSavingsValue.textContent = appData.monthIncome.toFixed(1);
            yearSavingsValue.textContent = appData.yearIncome.toFixed(1);
            
    }
});


// -------------------------------Main Object------------------------------

// interface AppData {
//     budget: Number,
//     timeData: Date,
//     expenses: {},
//     optionalExpenses: {},
//     income: number[],
//     savings: boolean

// }

let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: false,
}