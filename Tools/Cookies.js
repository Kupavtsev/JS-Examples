document.cookies

// set cookies, few values
document.cookies = 'user=John';
document.cookies = 'token=Q0215sdFWE3';

// Куки может состоять из любых символов
let name = 'user name';
let value = 'John Smith';

document.cookies = encodeURIComponent(name) + '=' + encodeURIComponent(value);

// параметры управляют тем как Куки будут работать, например
// max-age=3600 показывает сколько Куки живет 3600 Seconds
document.cookies = 'user=John;max-age=3600';