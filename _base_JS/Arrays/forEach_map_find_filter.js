'use ctrict'
const nums = [10, 20, 30, 40];

for (let i=0; i < nums.length; i++) {
    console.log(nums[i]);        
}

'use ctrict'
const nums = [10, 20, 30, 40];
nums.forEach(function (el) {
    console.log(el);        
});

'use ctrict'
const nums = [10, 20, 30, 40];
let sum = 0;
nums.forEach(function (el) {
    sum = sum + el;
    console.log(sum);        
});

// Second ARG we can get INDEX of element
'use ctrict'
const nums = [10, 20, 30, 40];
nums.forEach(function (el, i) {
    console.log(i);     // 0,1,2,3     
});

// map
'use ctrict'
arr.map(function (el) {
    return el;
});

'use ctrict'
const nums = [10, 20, 30, 40];
nums.map(function (el) {
    let modified = el + 2;
    return modified;
});

'use ctrict'
let arr = [12, 23, 34, 53, 89];

// мы пройдем через каждый эл и каждый модифицируем
// если не четное, то оставим без изменения
arr = arr.map(function (el) {
    let newValue;
    
    // Если елемент четный
    if (el % 2 == 0) {
        newValue = el/2;
    } else {
        newValue = el;
    }

    return newValue;
});


// возвращает результат сравнения
// отбираем только элем удовлетворяющие условию
'use ctrict'
arr.find(function (el) {
    return el > 5 ;
});

'use ctrict'
const arr = [2, 6, 4, 8, 8, 8];

let match = arr.find(function (el) {
    return el > 5 ;
});
console.log(match);

// when we need more than ONE elem
'use ctrict'
const arr = [2, 6, 4, 8, 8, 8];

let filtered = arr.filter(function (el) {
    return el > 5 ;
});
console.log(filtered);

'use ctrict'
const arr = [12, 23, 34, 53, 89];

const number = +prompt('Enter a number: ');

const newArr = arr.filter(function (el) {
    return el < number;
});

console.log(newArr);    