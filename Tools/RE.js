// https://regex101.com/
// Q???[0-9]
// строка состоит из 5ти символов, первый Q и на конце Цифра

const option1 = new RegExp('pattern');
const option2 = /pattern/;

/*
/abc/       Идущие подряд
/[abc]/     Один из символов
/[^abc]/    Ни один из символов
/[a-z]/     Диапазон символов
/\b/        Граница слова
/\B/        Не граница слова
/\d/        Цифра
/\D/        Не цифра
/\w/        Лат. буква, цифра или _
/\W/        Не лат. буква, цифра или _
/\s/        Пробельный символ
/\S/        Непробельный символ
/a{3}/      3 символа a подряд
/a{2,4}/    От 2 до 4 символов a подряд
/a+/        1 и более символ a подряд
/a умножить/        0 и более символов
/a?/                0 или 1 символ
/./                 Один любой символ

*/

// /a25?0+/
// 5 может быть или нет, затем произвольное количество 0, но не меньше 1
// a20
// a250
// a2500000

// Экранирование символов Регулярных выражений
// /abc\?/
// Будет искать строку: 'abc?'

// Флаги РВ, они влияют на поиск
/*
g   // global
Ищет все соответствия, а не только первое
Обычно с помощью шаблона РВ находится только первое совпадение

i   // insensetive
Поиск, игнорирующий регистр

m   // multiline
Многострочный текст. Ищем по нескольким строкам сразу.
*/

// Flags
const regexp1 = new RegExp('abc', 'g')
const regexp2 = /abc/g;


// https://regex101.com/
/*
a234as 99rus
a111aa 199rus

a111aa199rus
aaaaaaaaaaaa
*/

const carNumber = /[a-z]{1}[0-9]{3}[a-z]{2}\s[0-9]{2,3}rus/


// Поиск и замена строк
// Для того, чтобы определить есть ли совпадение с регулярным выражением в строке
// используется метод RE test: regexp.test Возвращает Булевое значение

const str = '123 abc 456';
let regexp = /abc/;
regexp.test(str)
// true

let regexp2 = /zyx/;
regexp2.test(str);
// false

// Поиск совпадения, метод match. Это уже метод Строки, этот метод
// в качестве параметра принимает РВ
const str = 'Peter from Petersburg';
const regexp = /Peter/;

console.log(str.match(regexp));
// "Peter"


// Замена строки по шаблону РВ
const str = 'This is string';
const regexp = /is/g;

str.replace(regexp, '+');
// "Th+ + string"


// Email check
// [a-zA-Z_\.0-9]+
// Могут быть любой из этих символов и + их может быть сколько угодно

const email = prompt('Enter email:');
const regexp = /[a-zA-Z_\.0-9]+@[a-z0-9]+\.[a-z]{2,5}/;

if (regexp.test(email)) {
    console.log('Valid email')
} else {
    console.log('Invalid Email')
}