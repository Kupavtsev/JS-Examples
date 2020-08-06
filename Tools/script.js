fetch('./data.json')
.then((response) => {
    return response.text();
})
.then((data) => {
    console.log(data);
})

// Получаем объект .json

fetch('./data.json')
.then((response) => {
    return response.json();
})
.then((data) => {
    console.log(data);
})