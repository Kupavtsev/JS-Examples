//    ---> 1 <--- copy of Array
// prompt / Array / length / for loop 

let N = prompt('Enter Array len: ')

let A = [] 
A.length = N    // specify length of the Array
let B = [] 
B.length = N

for (let i = 0; i < A.length; i++) {
    A[i] = prompt('Enter value for Array element: ')    //# putting values one by one to the list A
}
for (let i = 0; i < A.length; i++) {    //coping elements from one to another
    B[i] = A[i]
}

console.log(A, B)


// ---> 2 <--- Create dict in range and append it to list

let aliens = []
aliens.length = 5

for (let i = 0; i < aliens.length; i++) {
    let new_alien = {}  // let work only inside of loop
    new_alien['color'] = 'green'
    new_alien['points'] = 5
    new_alien['x'] = 20 * i
    new_alien['y'] = 0
    aliens.push(new_alien)
}

console.log(aliens)
// First version is out of memory crash, second norm
let aliens = []

for (let i = 0; i < 5; i++) {
    var new_one = {} // var become global for all document
    new_one['x'] = 1 + i
    new_one['y'] = 'color'
    aliens.push(new_one)
}