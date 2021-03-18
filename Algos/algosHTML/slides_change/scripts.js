window.addEventListener('DOMContentLoaded', function() {
    'use strict';

    let info = document.querySelector('.info-header'),
        tab = document.querySelectorAll('.info-header-tab');
    let tabContent = document.querySelectorAll('.info-tabcontent');
    console.log(tabContent[0]);

    function hideTabcontent(TC) {
        for (let i = TC; i < tabContent.length; i++) {
            // console.log(i)
            // Этими строчками все элементы tabContent скроются со страницы
            tabContent[i].classList.remove('show');
            console.log('done show: ' + i);
            tabContent[i].classList.add('hide');
            console.log('done hide: ' + i);
            
            
        }
    }
    // Таким образом будет отображаться 0-ой элемент массива
    // в классе info-tabcontent
    // Т.к. проходя через цикл в функции будет скрыт 1 и 2 элементы массива
    hideTabcontent(1);

    function showTabcontent(TC) {
        if (tabContent[TC].classList.contains('hide')) {
            tabContent[TC].classList.remove('hide');
            console.log('done show: ' + TC);
            tabContent[TC].classList.add('show');
            console.log('done hide: ' + TC);
        }
    }

    info.addEventListener('click', function(event) {
        let target = event.target;
        // Если при нажатии на div с классом info-header
        // внутри есть элементы с классом info-header-tab
        // то срабатывает цикл внутри функции
        if (target && target.classList.contains('info-header-tab')) {
            console.log('pressed');
            // благодаря циклу он пройдет все элементы с указанным классом
            //  он скроеет все Табы и покажет, который совпал
            for (let i = 0; i < tab.length; i++) {
                if (target == tab[i]) {
                    // скрываем все Табы
                    hideTabcontent(0);
                    // который берется из tab[i]
                    showTabcontent(i);
                }
            }
        }
        
    })

})