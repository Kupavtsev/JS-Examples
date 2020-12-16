// book 146

// Скопировать length элементов из массива from в массив to.
// Копирование начинается с элемента from_start в массиве from
// и выполняется в элементы, начиная с to_start в массиве to.
// Запомнить порядок следования аргументов такой функции довольно сложно.
function arraycopy(/*array*/ from,
                   /*index*/ from_start,
                   /*array*/ to,
                   /*index*/ to_start,
                   /*integer*/ length
                   ) {
                       // function
                   }

// Эта версия функции чуть менее эффективная, но не требует
// запоминать порядок следования аргументов, а аргументы from_start
// и to_start по умолчанию принимают значение 0.                   
function easyCopy(args) {
    arraycopy(args.from,
              args.from_start || 0, // default value!
              args.to,
              args.to_start || 0,
              args.length)
}

let a = [1,2,3,4];
let b = new Array(6);
easyCopy({from: a, to: b, length: 4});
console.log(b);
