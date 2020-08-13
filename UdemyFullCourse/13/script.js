// 009 done

//Make Gloabal variables
let money, time;

function start() {
    money = +prompt('Enter your monthly budget:', '');
    time = prompt('Enter date, format YYYY-MM-DD');

    // isNaN Возвращает True когда там только цифры. null не отменить
    while(isNaN(money) || money == "" || money == null ) {
        money = +prompt('Enter your monthly budget:', '');
    }
}
start();



let appData = {
    budget: money,
    timeData: time,
    expenses: {},
    optionalExpenses: {},
    income: [],
    savings: true
}

function chooseExpenses() {
    for (let i = 0; i < 2; i++) {
        let a = prompt('Enter a mandatory this month clause:'),
            b = prompt('How much?:');
    
        if ((typeof(a)) === 'string' && (typeof(a)) != null && (typeof(b)) != null
            && a != '' && b != '' && a.length < 50 ) {
            console.log("done");
            appData.expenses[a] = b;
        } else {
    
        }
    }
}
chooseExpenses();


// toFixed округление до первого знака. Возвращает строковое значение.
appData.moneyPerDay = (appData.budget / 30).toFixed(1);

alert("Daily budget: " + appData.moneyPerDay);

if (appData.moneyPerDay < 100 ) {
    console.log("It's a minimum");
} else if (appData.moneyPerDay < 100 && appData.moneyPerDay < 2000) {
    console.log("It's a middle incame");
} else if (appData.moneyPerDay > 2000) {
    console.log("Too high for income")
} else {
    console.log('Error');
}

function checkSavings() {
    if (appData.savings == true) {
        let save = +prompt('How much do you have ?'),
            percent = +prompt('Which is percent')

        appData.monthIncome = save/100/12*percent;
        alert("Monthly income from deposit: " + appData.monthIncome);
    }
}

checkSavings();