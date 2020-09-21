// Меняем булевый флаг в одном из элементов массива
// Этот массив является значением свойства объекта

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';

state = {
    stocks: [
        {id: 1, followed: false,  stock: 'CCL', exchange: 'NYSE'},
        {id: 2, followed: true,  stock: 'FB', exchange: 'Nasdaq'},
        {id: 3, followed: false,  stock: 'MAR', exchange: 'NYSE'}
    ]
};

let copyState = {...state}
// Без копирования массива, т.е. изменение происходит по ссылке!
copyState.stocks[0]["followed"] = true
// С копированием массива, НО ТАКОЙ ВАРИАНТ не дает возможность поменять
// текущие элементы массива (поменяет везде)
let  copyState = {...state, stocks : [...state.stocks]}; 
let  copyState = {...state, stocks : [...state.stocks.map( s => s)]}; 
// С добавлением элемента в массив
let newStock = {id: 4, followed: false,  stock: 'HLT', exchange: 'NYSE'}
let  copyState = {...state, stocks : [...state.stocks, newStock]}; 
// map для изменения элементов массива

/*
switch(action.type) {
    case FOLLOW:
        return {
            ...state,
            stocks: state.stocks.map( s => {
                if (s.id === action.stockId) {
                    return {...s, followed: true}
                }
                return s;
            })
        }
    case UNFOLLOW:
        return {
            ...state,
            stocks: state.stocks.map( s => {
                if (s.id === action.stockId) {
                    return {...s, followed: false}
                }
                return s;
            })
        }
    case SET_USERS: {
        // перезаписать старых юзеров, новыми, которые пришли по action
        return { ...state, users: action.users }
    }
    default:
        return state;
};
*/

const followAC = (stockId) => ({ type: FOLLOW, stockId });
const unfollowAC = (stockId) => ({ type: UNFOLLOW, stockId });