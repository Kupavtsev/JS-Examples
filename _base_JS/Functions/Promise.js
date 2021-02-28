// Конструкция, которая обрабатывает Асинхронные операции
// Промису передается функции содержащая 2 параметра (res, rej)-это CB funcs
new Promise((resolve, reject) => {
    // асинхронная операция
});

// Theory
const prom = new Promise(...);

prom.then(() => {
    // вызван resolve
}, () => {
    // вызван reject
}
});

//
const request = new Promise((resolve, reject) => {
    console.log('request');

    setTimeout(() => {
    console.log('response');
    resolve();
    }, 2000);

});

request.then(() => {
    console.log('resolve')
},
 () => {
    console.log('reject');
 });

