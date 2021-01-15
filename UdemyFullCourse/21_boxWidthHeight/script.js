let box = document.querySelector('.box');
let btn = document.querySelector('button');

let width = box.clientWidth,
    height = box.clientHeight;

console.log(width);
console.log(height);

// It shows all coordinats on the page
console.log(box.getBoundingClientRect());
// To show only one prop
console.log('this is Left: ' + box.getBoundingClientRect().left);
// To show the width and height of all Page
console.log('width of page: ' + document.documentElement.clientWidth);
console.log('height of page: ' + document.documentElement.clientHeight);

// Применятеся для того, чтобы узнать сколько уже отматали
// Или для того, чтобы переместить страницу к заданному месту или наверх
console.log('scroll of total page: ' + document.documentElement.scrollTop);

btn.addEventListener('click', function() {
    // берем высоту из стилей CSS и меняем на JS высоту всего текста
    // Получается что полностью раскрывае текстовой блок
    // box.style.height = box.scrollHeight + 'px';

    // при нажатии показывает позицию вертикальной перемотки по вертикали
    console.log(box.scrollTop);

    // Перемотать на позицию перемотки 250 по вертикали
    box.scrollTop = 0;
})

// Опустить страницу вниз на 200 пикселей
scrollBy(0, 200);

// переместит в определенные координаты на странице
scrollTo(0, 200);