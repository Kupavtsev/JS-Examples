let userInput = +prompt('Enter Array len: ');
let firstArr = [];
firstArr.length = userInput;
let secondArr = [];
secondArr.length = userInput;
for (let i = 0; i < firstArr.length; i++) {
    firstArr[i] = prompt('Enter value for Array element: ');
}
for (let i = 0; i < firstArr.length; i++) {
    secondArr[i] = firstArr[i];
}
console.log('firstArr: ', firstArr);
console.log('secondArr: ', secondArr);
