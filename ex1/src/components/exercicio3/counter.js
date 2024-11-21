import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { incremented, decremented, reset } from './features/counter/counter-slice';
import styled from 'styled-components';




const Counter = () => {
    const value = useSelector((state) => state.counter.value);
    const dispatch = useDispatch();
    const [amount, setAmount] = useState(0);
    const [message, setMessage]= useState('');


    const Message = styled.p`
    color: white;
    font-size: 20px;
    background-color: red;
    padding:1.5rem;
    margin:1rem;
    border-radius:20px;
  `;



    const handleIncrement = () => {
        setMessage('');
        dispatch(incremented(Number(amount)));
    };

    const handleDecrement = () => {
        if (value - amount < 0) {
            setMessage('Valor não pode ser negativo');
            return;
        }
        setMessage('')
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
            <div>
            {message && <Message> {message}</Message>}
            </div>
           
            </div>
        </div>
    );
};

export default Counter; 