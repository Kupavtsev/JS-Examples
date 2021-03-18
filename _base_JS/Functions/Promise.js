// Конструкция, которая обрабатывает Асинхронные операции
// Промису передается функции содержащая 2 параметра (resolve, reject)-это CB funcs
new Promise((resolve, reject) => {
    // асинхронная операция
});

// 1    --- Theory ---

const prom = new Promise(...);

prom.then(() => {
    // вызван resolve
}, () => {
    // вызван reject
}
});

//  2

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

