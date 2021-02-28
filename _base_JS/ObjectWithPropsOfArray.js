var a = {};

// Добавить свойства, которые сделают его похожим на массив
var i = 0;
while (i < 10) {
    a[i] = i * i;
    i++;
}

a.length = i;
console.log(a.length)

// Теперь можно перебрать свойства объекта, как если бы это был настоящий массив
var total = 0;
for (var j = 0; j < a.length; j++) {
    total += a[j];
    console.log(total);
}

//

var o = {
    key: 1,
    door: 1
}

var p = 'a';

// Добавить в массив a перечислимые имена свойств объекта o и вернуть массив a.
// Если массив a не указан или равен null, создать и вернуть новый массив a
function copyPropertyNamesToArray(o, a) {
    a = a || [];
    for (var property in o) a.push(property);
    return a;
}

// Получить имена свойств объектов o и p
var a = copyPropertyNamesToArray(o); // Получить свойства объекта o
// в виде нового массива
copyPropertyNamesToArray(p, a); // добавить к массиву свойства объекта p

