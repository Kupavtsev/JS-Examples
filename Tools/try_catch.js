try {
    value = value + 5;
} catch (err) {
     console.error(err);

}
console.log('+')

// error properties
error.name
error.message
error.stack

/* types of erros
... is not defined
... is not a function
unexpected token ...
*/

//
let error = new Error('Bad data');
throw error;

//
throw new Error('Messgae')

// throw

try {
    throw new Error('Error Data')
} catch (err) { ()=>{} }

// NAME SURNAME

try {
    let input = prompt('Enter your name:');
    const inputArray = input.split(' ');

    if (inputArray.length != 2) {
        throw new Error('Invalid Input')
    }
} catch (err) {
    alert(err.message);
}
console.log('+');