// We need to find third element
// :last-child ПСЕВДОКЛАСС последний дочерний элемент родителя
//const el = document.querySelector('li:last-child');

// Тоже самое через Класс
const el = document.querySelector('.last');
console.log(el)

el.style.color = '#f00';

let change = (e) => {
    const input = prompt('Enter a text: ');
    const title = document.querySelector('.title');
    title.innerHTML = `<h5>${input}</h5>`;
}

// Изменяем Заголовок
//const input = prompt('Enter a text: ');
//const title = document.querySelector('.title');

//title.innerText = input;
// Меняем HTML, используем шаблонную строку!
//title.innerHTML = `<h5>${input}</h5>`;



// Работаем с созданием элементов
let createEl = () => {
    const input = prompt('Enter a message');
    const messageEl = document.createElement('p');
    messageEl.innerText = input;
    const messageBox = document.querySelector('.messages');
    messageBox.append(messageEl);
}

// вызывает ф. скрывающую элемент через 2сек
// В данной ситуации, это работает без использования кнопок
// setTimeout(removeMessage, 2000);

// Ф. которая скрыввает элемент
function hideMe() {
    const messageEl = document.querySelector('.messages');
    messageEl.hidden = true
}

function removeMessage() {
    const messageEl = document.querySelector('.messages');
    messageEl.remove();
}
