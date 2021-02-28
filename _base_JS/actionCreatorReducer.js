const ADD = 'ADD';
const CHANGE = 'CHANGE';
const LAST = 'LAST';

InitState = {
    stocks: [
        {id: 1, followed: false,  stock: 'CCL', exchange: 'NYSE'},
        {id: 2, followed: true,  stock: 'FB', exchange: 'Nasdaq'},
        {id: 3, followed: false,  stock: 'MAR', exchange: 'NYSE'}
    ]
};

let newStock = {id: 4, followed: false,  stock: 'HLT', exchange: 'NYSE'};

let reducer = (state = InitState, action) => {
    switch(action.type) {
        case ADD:
            state.stocks.push(newStock)
            return state;
        case CHANGE:
            if (state.stocks[0]["followed"] == false)
            return state.stocks[0]["followed"] = true;
        case LAST:
            lastArr = state.stocks[state.stocks.length - 1]
            return lastArr;
        default:
            return state;
    }
};

const lastAC = () => ({ type: LAST});
const addAC = () => ({ type: ADD});
const changeAC = () => {
    return {type : CHANGE}
};


reducer(InitState, addAC());
reducer(InitState, changeAC());
reducer(InitState, lastAC());