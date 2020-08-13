let money = prompt('Enter your monthly budget:');
let time = prompt('Enter date, format YYYY-MM-DD');
let q1 = prompt('Enter a mandatory this month clause:');
let q2 = prompt('How much?:');

let appData = {
    budget: money,
    timeData: time,
    expenses: {q1: q2},
    optionalExpenses: {},
    income: [],
    saving: false
}


function monthlyBuget(first, obj) {
    let expensesEx = +(obj.expenses.q1);
    let result = (+first + expensesEx) / 30;
    alert(result);
    return result;
}

monthlyBuget(money, appData);