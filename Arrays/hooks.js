import React from 'react';

const News = () => {
    // useState this is Hook
    //const [state, setState] = React.useState(InitialState)
    //useState возвращает ([...], f())
    const [numbers, setNumbers] = React.useState([1, 2, 3])
    // numbers используется для передачи массива в правой части (хранит данные)
    // setNumbers функция используется для обновления массива (меняет numbers)

    const addNumber = () => {
        const randNumber = Math.round(Math.random() * 10);
        // Массив каждый раз заменяется на новый, благодаря спрэду
        const newArr = [...numbers, randNumber];
        // очичтить массив
        // setNumbers([]);
        setNumbers(newArr);
    };

    return (
        <div>
            <button onClick={addNumber}>New Number</button>
            <ul>
                {numbers.map((num, index) => (
                    <li key={index}>{num}</li>
                ))}                
            </ul>
        </div>
    )
};

export default News;