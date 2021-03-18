//1 setTimeout возвращает свой id
let id = setTimeout( () => {
    console.log('now!');
}, 1000);

// Отмена действия функции
clearTimeout(id);


// 2
let sum = (a, b) => {
    let result= a + b;
    console.log(result);
}
// with args
setTimeout(sum, 1000, 2, 3);

// 3    --- the same logic, but call it with interval
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