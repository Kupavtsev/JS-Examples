'use strict'

const names = ['max', 'manu', 'julie', 'max'];

for (const el of names) {
    console.log(el)
}

// findIndex
const findJulie = names.findIndex(el => el === 'julie');
console.log(findJulie);
// splice to remove this position
names.splice(findJulie, 1);
names.push('julie');
console.log(names);