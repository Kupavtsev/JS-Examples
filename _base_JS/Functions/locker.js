// Замыкание - обращение к внешней переменной
let locker = () => {
    let count = 0;

    return function() {
            count++;
            console.log(count)
 }
}
let val = locker();