// В таком случае JS начнет выполняться только,
// когда вся страница полностью загрузится
// window.addEventListener('load')
// __________________________________________________

// Срабатывает, когда загрузилась DOM структура
// Весь код BLL расположится внутри функции
window.addEventListener('DOMContentLoaded', function() {
    'use strict'

    // __________________________________________________
    // My try to get text oust from HTML
    // Also I can put this text to txt file or json...
    // const pozvon = 'Йога, массажи и плавание в море - помогут уставшей спине! Индийские йоги считали, что здоровье человека можно определить по тому, насколько здоров и гибок у него позвоночник.<br> Интересно, что бы древние йоги сказали, глядя на современного человека, который уже со школьного возраста мучается болями в спине, работает подолгу в неудобных сидячих позах и не умеет расслабляться, имеет искривление, которое в итоге приведет к болезням других органов? Йоги сказали бы – займись собой и срочно!';
    // let myTryd = document.querySelector('.description-text');
    // myTryd.innerText = pozvon;
    // console.log(pozvon);
    // __________________________________________________

    let tab = document.querySelectorAll('.info-header-tab'),
        info = document.querySelector('.info-header'),
        tabContent = document.querySelectorAll('.info-tabcontent');

        function hideTabContent(a) {
            for (let i = a; i < tabContent.length; i++) {
                // Этими строчками все элементы tabContent скроются со страницы
                tabContent[i].classList.remove('show');
                tabContent[i].classList.add('hide');
            }
        }

        hideTabContent(1);

        function showTabContent(b) {
            if (tabContent[b].classList.contains('hide')) {
                tabContent[b].classList.remove('hide');
                tabContent[b].classList.add('show');
            }
        }

        info.addEventListener('click', function(event) {
            let target = event.target;
            if (target && target.classList.contains('info-header-tab')) {
                for(let i = 0; i < tab.length; i++) {
                    if (target == tab[i]) {
                        // скрываем все Табы
                        hideTabContent(0);
                        // который берется из tab[i]
                        showTabContent(i);
                        break;

                    }
                }
            }
        })

});

// 3:30