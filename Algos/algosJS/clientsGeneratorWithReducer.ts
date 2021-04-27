const ADD = 'ADD'


type ClientsType ={
    id: number
    birthday: string
    discount: string
    name: string
}

let initState = {
    clients: [
        // { id: 1, birthday: null, discount: null, name: ''},
    ] as Array<ClientsType>
}

type initialStateType = typeof initState


// Scale of client's birthday
let randomBirthday = () => {
    let date = new Date()

    let start = date.setFullYear(1970, 0o0, 0o1)
    let end = date.setFullYear(2000, 11, 31)
    
    function getRandomArbitrary(min: number, max: number): number {
        return Math.random() * (max - min) + min
      }

    let myTry = Math.floor(getRandomArbitrary(start, end))
    let result = new Date(myTry)
    return result
}


// Reducer which is Add all clients to the state
let reducer = (state = initState, action: any) => {
    
    switch(action.type) {

        case ADD:

            let newClient = {
                id: action.id,
                birthday: action.birthday,
                discount: action.discount,
                name: action.name
                };
            
            initState = {       
                ...state,       
                clients: [...state.clients, newClient]
            }
            return state
        
        default:
            return state;
    }
};


// Clients id - fibonacci numbers
let n: number = 50; // Сколько элементов хотим получить
let fibonacci: Array<number> = [1, 2]; // Первые два элемента последовательности Фибоначчи
for (let i = 2; i < n; i ++) {
  // Получаем i-й элемент последовательности как сумму предыдущих двух
  fibonacci[i] = fibonacci[i-1] + fibonacci[i-2];
};
let ids: Array<number> = fibonacci.slice(0,n).reverse();


type addActionType = {
    type: typeof ADD
    id: number
    birthday: string
    discount: string
    name: string
}

// Action Creator
for (let i=0; i < 7; i++) {
    let id: number;

    // Get it from internet, its convert Date to YYYYMMDD
    let birthday: string = randomBirthday().toISOString().slice(0,10).replace(/-/g,"")
    
    let discount: string = ''
    if (+birthday < 19900101) {
        discount = '7%'  
    }
    if ( +birthday < 20010101 && +birthday > 19900101) {
        discount = '5%'
    }
    
    
    let value: number

    for (value of ids) {    // Данная конструкция всегда передает последнее значение...
        id = value;
    }
    ids.pop();      // That is why we delete last el each cycle

    let name = 'Jhon' + [i] + ' Smith' + [i];

    const addAC = (birthday: string, id: number, discount: string, name: string): addActionType => (
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