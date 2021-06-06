'use strict'

let request = new Promise((resolve, reject) => {
    console.log('Promise');

    setTimeout(() => {
        console.log('Response');
        resolve()
    }, 2000)
}
);


request.then(
    () => {
        console.log('resolved')
    },
    () => {
        console.log('rejected');
    }
);