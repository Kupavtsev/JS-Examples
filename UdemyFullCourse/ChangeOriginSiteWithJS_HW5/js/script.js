let wrapperMenu = document.querySelector('.menu');

// Создаем 5ый пункт меню
let li = document.createElement('li');
li.classList.add('menu-item');
li.innerHTML = 'Пятый пункт';
wrapperMenu.appendChild(li);

// Восстанавливаем порядок меню
let muneElements = document.querySelectorAll('.menu .menu-item');
wrapperMenu.insertBefore(muneElements[2], muneElements[1]);

// Заменить картинку заднего фона на другую из папки img
document.body.style.background = 'url(../img/apple_true.jpg) center no-repeat';

// Поменять заголовок, добавить слово "подлинную" ( Получится - "Мы продаем только подлинную технику Apple")
//let column = document.getElementsByClassName('column');
let columnTwo = document.querySelectorAll('.column #title')[0];
console.log(columnTwo);
columnTwo.innerHTML = 'Мы продаем только подлинную технику Apple';

// Удалить рекламу со страницы
let adv = document.querySelector('.adv');
adv.remove();

// Спросить у пользователя отношение к технике apple и записать ответ в блок на странице с id "prompt"
let promptText = document.querySelectorAll('.column #prompt');
//let ask = prompt('What do you feel about Apple products?');
promptText[0].textContent = prompt('What do you feel about Apple products?');


//console.log(prompt[0]);
