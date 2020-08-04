// Time
let time = new Date();
let normalTime = time.toTimeString();

let currentTimeField = document.querySelector('.currentTime');
currentTimeField.append(normalTime);


// TextField
const button = document.querySelector('.textAdd');

button.addEventListener('click', buttonClick);

function buttonClick () {
    let text = getInputText();
    addElementToList(text)
    clearInput();
}

function getInputText() {
    let input = document.querySelector('.textEnter');
    return input.value;
}

function addElementToList(text) {
    let newEl = document.createElement('li');
    newEl.innerText = text;
    let outer = document.querySelector('.list');
    outer.append(newEl);
}

function clearInput() {
    let input = document.querySelector('.textEnter');
    input.value = '';
}

// another
const anotherButton = document.querySelector('.another');

anotherButton.addEventListener('click', buttonClickAnother);

function buttonClickAnother() {
    text = getInputText();
    addElementToBody(text);
    console.log(text);
    clearInput();
}

function addElementToBody(text) {
    let newEl = document.createElement('p');
    newEl.innerText = text;
    let outer = document.querySelector('.test');
    outer.append(newEl);
}