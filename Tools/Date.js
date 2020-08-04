let date = new Date()
Number(date)
// TimeStamp количество милисекунд с 1 января 1970г.
// формат хранения времени

//
const ts = 1566652377643;
let date = new Date(ts);
console.log(date);

//
.getFullYear()
.getMonth() - 0-январь, 11-деабрь
.getDate()
.getHours()
.getMinutes()
.getSeconds()
.getMilliseconds()
.getDay() - 0-воскр, 6-суббота

// Получаем год
let date = new Date()
let year = date.getFullYear();

// Устанавливаем свои значения []-опционально
setFullYear(year, [month], [date])
setMonth(month, [date])
setDate(date)
setHours(hour, [min], [sec], [ms])
setMinutes(min, [sec], [ms])
setSeconds(sec, [ms])
setMilliseconds(ms)
setTime(milliseconds)


// Сколько секунд осталось до завтра
// Сколько всего секунд в дне отнять солько секунд прошло
const now = new Date();

// H, M, S
const secInDay = 24 * 60 * 60;

// получаем текущие значения
const hrs = now.getHours();
const mins = now.getMinutes();
const sec = now.getSeconds();

// Количество секунд, которые прошли в текущем дне
// 3600 sec in 1 hour
const secPass = (hrs * 3600) + (mins * 60) + sec;

console.log(secInDay - secPass);


// Получение TimeStamp без создания объекта
Date.now()

//Ex: замерить время операции
let start = Date.now();
...
let end = Date.now();
let result = end - start;


// Сумма квадратов всех чисел от 1 до 100 000
const start = Date.now();

let sum = 0;
for(let i = 1; i <= 100000; i++ ) {
    sum = sum + i * i;
}

const end = Date.now();

console.log(end - start);


// Создаем обект Date на основе Строки
// str передается в качестве параметра при создании объекта в конструктор new Date
const date = new Date(str);

// формат строки Z-время по Гринвичу
// YYYY-MM-DDTHH:mm:ss.sssZ
// 2020-07-30T21:42:50.117+03:00

// Получаем TimeStamp из Строки
const ts = Date.parse(str);
// при этом Строка может быть не полной! не достающие значения встают в единицы.
new Date('2019-04')


// Task

const input = prompt('DD MM YYYY');
const [day, month, year] = input.split(' ');

const inputDate = new Date(`${year}-${month}-${day}`);

// Нам надо inputDate преобоазовать в число
// Потому что Date.now() является числом TimeStamp
// - (minus) автоматически произведет перевод inputDate в число!!!
// А именно в TimeStamp
let diff = Date.now() - inputDate;

// Переводим значение из милисек в часы
diff = diff / 1000 / 60 / 60;

// .toFixed(0) округляем до целого числа с 0 знаков посл езапятой!
console.log(diff.toFixed(0))


// .toString() преобразование Даты. Это тоже самое, что вывод в консоль
const date = new Date()
date.toString();
// shorter
date.toDateString();
date.toTimeString();
date.toUTCString();

//11:08