let get_stock_name_from_user = () => {
    value = prompt('Enter stock name')
    return value;
}

let get_number_of_shares = () => {
    value = prompt('Enter amount of shares')
    return value;
}

let portfolio = [];

let stock_name = get_stock_name_from_user();
let shares = get_number_of_shares();


alert(portfolio[stock_name] = shares);  // Associative Array

//           Взаимодействие

let get_share_price = () => {
    return value = 10
}

let value = 0;
for (stock in portfolio) {
    // Для каждого вида акций в портфеле получаем стоимость
    // одной акции и умножаем ее на число акций.
    value += get_share_price(stock) * portfolio[stock];
    
    console.log(value)
}