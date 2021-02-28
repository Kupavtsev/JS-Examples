// setTimeout возвращает свой id
let id = setTimeout( () => {
    console.log('now!');
}, 1000);

// Отмена действия функции
clearTimeout(id);

//
let sum = (a, b) => {
    let result= a + b;
    console.log(result);
}
// Передача параметров
setTimeout(sum, 1000, 2, 3);

// Вызывает не один раз, а через равные промежутки времени
setInterval( () => {
    console.log('now!')
}, 1000);

//
function counter(from, to) {
    let number = from;

    const id =setInterval(() => {
        console.log(number);

        if(number == to) {
            clearInterval(id);
        } else {
            number++;    
        }
        
    }, 1000);
}

counter(4, 8);