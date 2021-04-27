const ADD = 'ADD';
const DISCOUNT = 'DISCOUNT';

let initState = {
    clients: [
        // { id: 1, birthday: null, discount: null, name: ''},
        // { id: 2, birthday: null, discount: null, name: ''}
    ]
}

// Scale of client's birthday
let randomBirthday = () => {
    let date = new Date();

    let start = date.setFullYear(1970, 00, 01);
    let end = date.setFullYear(2000, 11, 31);
    
    function getRandomArbitrary(min, max) {
        return Math.random() * (max - min) + min;
      }

    let myTry = Math.floor(getRandomArbitrary(start, end));
    let result = new Date(myTry);
    return result;
}


// Reducer which is Add all clients to the state
let reducer = (state = initState, action) => {
    
    switch(action.type) {

        case ADD:

            let newClient = {
                id: action.id,
                birthday: action.birthday,
                discount: action.discount,
                name: action.name
                };
            
            state = {
                ...state,
                clients: [...state.clients, newClient]
            }
            initState = Object.assign({}, state);   // Without this the Cycle of AC will push only last 
                                                    // client to the state
            return state
        
        default:
            return state;
    }
};


// Clients id - fibonacci numbers
let n = 50; // Сколько элементов хотим получить
let fibonacci = [1, 2]; // Первые два элемента последовательности Фибоначчи
for (let i = 2; i < n; i ++) {
  // Получаем i-й элемент последовательности как сумму предыдущих двух
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
};
let ids = fibonacci.slice(0,n).reverse();



// Action Creator
for (let i=0; i < 50; i++) {

    // Get it from internet, its convert Date to YYYYMMDD
    let birthday = randomBirthday().toISOString().slice(0,10).replace(/-/g,"");
    
    let discount = ''
    if (+birthday < 19900101) {
        discount = '7%'  
    }
    if ( +birthday < 20010101 && +birthday > 19900101) {
        discount = '5%'
    }
    
    for (value of ids) {    // Данная конструкция всегда передает последнее значение...
        id = value;
    }
    ids.pop();      // That is why we delete last el each cycle

    let name = 'Jhon' + [i] + ' Smith' + [i];

    const addAC = (birthday, id, discount, name) => (
        { 
            type: ADD ,
            birthday,
            id,
            discount,
            name
        }
    );
    reducer(initState, addAC(       // Start the proccess
        birthday,
        id,
        discount,
        name
    ));
    
}