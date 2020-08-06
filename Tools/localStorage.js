// Записываем ключ, значение в Локальное хранилище браузера
localStorage.setItem('username', 'john123');

// Читаем значение
const uname = localStorage.getItem('username');
console.log(uname);

// Удаляем элемент
localStorage.removeItem('username');

// Полная очистка хранилища
localStorage.clear();

// localStorage хранит только Строки "[object Object]"
// по этой причине для хранения объектов используется формат JSON
// ""  must be

const obj = 
{
    name : "John Smith",
    number : 25
}

// JSON преобразование
let str = JSON.stringify(obj);
let newObj = JSON.parse(str);

// sessionStorage работает точно также, как и localStorage
// но хранит инфо только пока открыт браузер
sessionStorage.setItem();
sessionStorage.getItem();
sessionStorage.removeItem();
sessionStorage.clear();


// User name Alert

const jsonObj = localStorage.getItem('user');

if (jsonObj) {
    const obj = JSON.parse(jsonObj);
    alert(`Hello ${obj.name}`);
} else {
    const input = prompt('Enter your name:');

    const obj = {
        name: input
    }
    
    const jsonObj = JSON.stringify(obj);
    localStorage.setItem('user', jsonObj);
}




