// IP address this is URL address
// DNS transform URL to IP

// http(s) протокол это набор правил в каком виде передаются данные между 
// участниками общения

// PUT запрос, как и POST отправляет инфо на сервер 
// с целью создания объекта на сервере
// Ex: если на сервере есть таблица с Users, то 
// с помощью POST мы обновляем инфо о пользователях
// с помощью PUT создаем нового пользователя

// Headers - фрагменты служебной информации, которые помогают Серверу
// правильно обработать Запрос
// Content-Type: text/html; charset=utf-8

// AJAX - Asynchronous JavaScript and XML
// XML very old, not using now!

// fetch() по умолчанию принимает GET запрос. Возвращает Promis
// then - это Callback, аргументы которого response
// Из response мы получаем служебную информацию (код ответа, код статуса и URL)

let url = 'http://ya.ru';
fetch(url);

fetch(url).then(
    (response) => {
        response.status;
        response.statustext;
        response.url;
    }
);

// Тело ответа Сервера. Либо в текстовом формате, либо json 
// преобразует ответ в Объект

fetch(url).then(
    (response) => {
        response.text();
        response.json();
    }
);

// Оба этих метода возвращают promis, поэтому нам нужно в 1ом CB then
// вернуть результат этого метода. И потом вызвать еще один метод then с CB,
// в котором мы обрабатываем результат, который передается в качестве аргумента
fetch(url).then(
    (response) => {
        return response.text();
    }
)
.then((data) => {
    console.log(data);
});

// POST, тогда вторым параметром fetch будет объект настроек
// body - то, что мы отправляем на Сервер, строка.
const options = {
    method: 'post',
    headers: {},
    body: ''
}

fetch(url, options).then();

// Цепочка промисов, когда нужно снова писать then и снова обрабатывать это promis