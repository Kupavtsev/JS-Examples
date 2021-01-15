'use strict';
// setTimeout Once a time
// setInterval Work always

let timerId = setInterval(sayHello, 2000);

clearTimeout(timerId);

function sayHello() {
    console.log('Hello World!');
}

// Рекурсивный вызов (сама сабя) для обхода задержки
// времени выполнения самой функции

let timerIdRec = setTimeout(function log() {
    console.log('Recurtion');
    // setTimeout(log, 2000);
});

// -------------------Animation----------------

let btn = document.querySelector('.btn'),
    elem = document.querySelector('.box');

let myAnimation = () => {
    // Start position
    let pos = 0;

    let id = setInterval(frame, 10);

    // Отслеживаем позицию квадрата
    function frame() {
        // выполнение функции прекратится при достижении 300
        if (pos == 300) {
            clearInterval(id);
        } else {
            // Увеличение позиции на каждом интервале id
            pos++;
            // также изменение стилей на один пиксел 
            // на каждом интервале id
            elem.style.top = pos + 'px';
            elem.style.left = pos + 'px';
        }
    }
}

btn.addEventListener('click', myAnimation);

// При клике на любую кнопку из списка вызывается одно и тоже событие

// ---------------------ДЕЛЕГИРОВАНИЕ------------------

let btnBlock = document.querySelector('.btn-block'),
    btns = document.getElementsByTagName('button');

btnBlock.addEventListener('click', function(event) {
    // && event.target.tagName == 'BUTTON'
    // && event.target.classList.contains('first')
    if (event.target && event.target.matches('button.first')) {
        console.log('Hello matches button');
    } else {
        console.log('Just aa area of buttons');
    }
});