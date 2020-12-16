// # 1

let options = {
    width: 1024,
    height: 1024,
    name: "test"
};

options.bool = false;
options.colors = {
    border: "black",
    bg: "red"
}
options.array = [1, 2, 3, 4, 5];
console.log(typeof options.array)
for (let key in options) {
    console.log(key + ' : ' + options[key]);
}


// lesson 13 Arrays #2

let arr = [1, 2, 3, 'four', 5];

arr.pop(); // delete last
arr.push('5'); // add to the end of arr
arr.shift(); // delete first el
arr.unshift('first'); // add first el

//arr[99] = 99;
console.log(arr.length); // shows last index + 1

// for (let i = 0; i < arr.length; i++) {
//     console.log(arr[i])
// }


arr.forEach(function(item, i, mass) {
    console.log(i + ': ' + item + " (массив: " + mass + ')');
});


// # 3
// for of

let mass = [1, 3, 4, 6, 7];
for (let key in mass) {
    console.log(key);
}
for (let key of mass) {
    console.log(key);
}

// # 4

let ans = prompt("", ""),
    arr = [];

arr = ans.split(',');   // make Array
console.log(arr);

// # 5

let arr = ["aawe", 'zzz', 'pp', 'rqa'],
    i = arr.join(', '); // make string
console.log(i);

// # 6 
let arr = ["aawe", 'zzz', 'pp', 'rqa'],
    arr2 = [1, 15, 4];
    let i = arr.sort(); // make sorting in number as Strings !!!
    let y = arr2.sort(compareNum);  // use CallBack

function compareNum(a, b) {
    return a - b;
}

console.log(i, y);

// У Псевдомассивов нет этих методдов, которые здесь описаны
// из-за различия в прототипе с обычными массивами

// Course 14

// Создаем потомка
let solder = {
    health: 400,
    armor: 100
}

let john = {
    health: 100
}

john.__proto__ = solder;

console.log(john);
console.log(john.armor);