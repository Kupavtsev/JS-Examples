/*
Math.round(x)   - 0.5 до ближайшего числа
Math.floor(x)   - до ближайшего меньшего целого числа
Math.ceil(x)    - до ближайшего большего целого числа

Math.random(x)  0 - 1

Задаем пределы случайного числа. Вернет случайное дробное число
let number = Math.random() * (max - min) + min;

Целое число
number = Math.floor(number);

*/

// Task

function generateCoef (min, max) {
    const coef = Math.random() * (max - min) + min;
    return Math.floor(coef);
}

const a = generateCoef(2, 20);
const b = generateCoef(2, 20);

const input = prompt(`${a}x = ${b}. x = ?`);
result = Math.floor(b/a);

if ( result == input ) {
    alert('Right!')
} else {
    alert('Wrong!')
}
