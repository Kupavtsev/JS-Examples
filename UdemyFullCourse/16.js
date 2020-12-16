let box = document.getElementById('box'),
    // создает псевдомассив элементов
    btn = document.querySelectorAll('button'),
    circle = document.getElementsByClassName('circle'),
    // Выбирает подкласс в определенном классе
    // heart = document.querySelectorAll('.wrapper .heart'),
    heart = document.querySelectorAll('.heart'),
    // выбираем только первый найденный элемент
    oneHeart = document.querySelector('.heart');
    wrapper = document.querySelector('.wrapper');

    // получаем доступ к Стилям
box.style.backgroundColor = 'blue';

//меняем вторую кнопку на овальную
btn[1].style.borderRadius = '100%';

// делаем светофор из кругов
circle[0].style.backgroundColor = 'red';
circle[1].style.backgroundColor = 'yellow';
circle[2].style.backgroundColor = 'green';

// heart.length - получаем количество элементов в псевдомассиве
/*
for (let i = 0; i < heart.length; i++) {
    heart[i].style.backgroundColor = 'blue';
}
*/

// альтернатива циклическому методу for
// forEach( принимает CB ), т.к. forEach тоже функция
// function(item, i) item - элемент, i - итератор как в цикле, номер элемента
// hearts - массив который будем вызывать ?
// два последних аргумента не обязательны
/*
heart.forEach(function(item, i, hearts) {
    item.style.backgroundColor = 'blue';
});
*/

// Создаем свои элементы при помощи JS
let div = document.createElement('div'),
    // создание текстового узла
    text = document.createTextNode('I was here: createTextNode');

// добавляем класс с именем black
div.classList.add('black')


//div.innerHTML = '<h1>Hello</h1>'
// Применяется при вводе текста от пользователя
div.textContent = "Hello textContent";


// Добавляем созданный div в конец body
// элементы можно добавлять только по отношению к родительскому элементу
// document.body.appendChild(div);
// wrapper.appendChild(div);

// Вставляем перед родителем, 2ой параметр уазывает перед чем!
document.body.insertBefore(div, circle[0]);
// Удаляем конкретный элемент по отношению к родительскому
document.body.removeChild(circle[1]);
wrapper.removeChild(heart[1]);

// Заменяем один элемент другим
// буквально перетаскивая с одного места в другое
document.body.replaceChild(btn[1], circle[1]);

//13:48

// lesson 2_18

// .onclick при нажатии на кнопку, что-то будет происходить
/*
btn[0].onclick = () => {
    alert('first buttin!!');
}

btn[0].onclick = () => {
    alert('first second buttin!!');
}
*/


btn[0].addEventListener('click', function(event) {
    console.log(event)
    // let target = event.target;
    // target.style.display = 'none';
    // event.target.style.display = 'none';
    console.log('Event: ' + event.type + ' on element ' + event.target);
});


/* btn[0].addEventListener('mouseenter', function() {
    alert('You are here....');
}) */

let wrap = document.querySelector('.wrapperBtn');

wrap.addEventListener('click', function(event) {
    console.log('Event: ' + event.type + ' on element ' + event.target);
});

// Отменяем стандартное поведение Браузера

// находим первую ссылку на странице
let link = document.querySelector('a');

link.addEventListener('click', function(event) {
    event.preventDefault();
    console.log('Event Prevent: ' + event.type + ' on element ' + event.target);
});

// item - each Button on this page
btn.forEach(function(item) {
    item.addEventListener('mouseleave', function() {
        console.log("We are out!");
    })
})