import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incremented, decremented, reset } from './features/counter/counter-slice';


const Counter = () => {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);

    const handleIncrement = () => {
        dispatch(incremented(Number(amount)));
    };

    const handleDecrement = () => {
        dispatch(decremented(Number(amount)));
    };

    const handleReset = () => {
        dispatch(reset());
    };

    return (
        <div>


            <h2>Valor Atual: {value}</h2>
            <input
                type="number"
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
            />
            <div>
            <button className='button' onClick={handleIncrement}>Adicionar</button>
            <button className='button' onClick={handleDecrement}>Remover</button>
            <button className='button' onClick={handleReset}>Limpar</button>
            </div>
        </div>
    );
};

export default Counter;