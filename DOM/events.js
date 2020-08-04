function buttonClick() {
    const text = getInputText();
    addElementToList(text);
    clearInput();
    
}

function getInputText() {
    const input = document.querySelector('.text-field');
    return input.value;
}

// сначала создаем элемент
// потом записываем в него значение
// потом добавляем в наш список
function addElementToList(text) {
    const listItem = document.createElement('li');
    listItem.innerText = text;

    const list = document.querySelector('.list');
    list.append(listItem);
}

// очищаем поле ввода
function clearInput() {
    const input = document.querySelector('.text-field');
    input.value = '';
}



// Second Part. Work with text. I love JavaScript!
const button = document.querySelector(".button");

button.addEventListener('click', hideText);

function hideText() {
    const text = document.querySelector('.text');
    text.hidden = true;

    const button = document.querySelector('.button');
    button.removeEventListener('click', hideText);
    button.addEventListener('click', showText);
}

function showText() {
    const text = document.querySelector('.text');
    text.hidden = false;

    const button = document.querySelector('.button');
    button.removeEventListener('click', showText);
    button.addEventListener('click', hideText);
}