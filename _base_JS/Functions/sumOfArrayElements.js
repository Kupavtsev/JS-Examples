//book 147

// Возвращает сумму элементов массива (или объекта, подобного массиву) a.
// Все элементы массива должны быть числовыми, при этом значения null
// и undefined игнорируются.
function ArraySum(a) {
    // если это массив или объект, подобный массиву
    if( (a instanceof Array) || (a && typeof a == 'object' && 'length' in a) ) {
        let total = 0;
        for(let i = 0; i < a.length; i++) {
            let element = a[i];
            if( !element ) continue;    // игнорировать значения null и undefined
            if( typeof element == 'number') total += element;
            else throw new Error('All elements must be numbers');
        }
        return total;
    }
    else throw new Error('Arg of sum() must be an Array');
}

let b = [1, null, 3];
let c = ArraySum(b);
console.log(c);


/* принимает любое число входных аргументов и рекурсивно
обрабатывает те из них, которые являются массивами. Вследствие этого он мо
жет принимать переменное число аргументов или массив в виде аргумента. Кро
ме того, он прилагает максимум усилий, чтобы преобразовать нечисловые аргу
менты в числа, прежде чем сгенерировать исключение: */
'use strict'
function flexiSum(a) {
    let total = 0;
    for (let i = 0; i < arguments.length; i++) {
        let element = arguments[i];
        if (!element) continue;

        // Попытаться преобразовать аргумент в число n исходя из типа аргумента
        let n;
        switch (typeof element) {
        case 'number':
            n = element;    // Преобразование не требуется
            break;
        case 'object':
            if (element instanceof Array) {
                n = flexiSum.apply(this, element);
            }
            else n = element.valueOf(); // Для других объектов вызвать valueOf
            break;
        case 'function':
            n = element();  // Попытаться вызвать функцию
            break;
        case 'string':
            n = parseFloat(element);    // Попытаться преобразовать строку
            break;
        case 'boolean':
            n = NaN;    // Логические значения преобразовать невозможно
            break;
            }
        // Если было получено нормально число – добавить его к сумме.
        if (typeof n == 'number' && !isNaN(n)) total += n;
        else throw new Error('Ошибка преобразования ' + element + ' в число')
    }
    return total;
}


let d = [1, '2', 3, [2 ,2], 5];
let e = flexiSum(d);
console.log(e);