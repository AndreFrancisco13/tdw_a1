import React from "react";
import './App.css';
import { Provider} from 'react-redux';
import { store } from '../../app/store';
import Counter from "./counter";

const Exercicio3 = () => {


    return (
        <Provider store={store}>
        <div className="container">
        <h1 className=" titulo">Máquina de Multibanco</h1>
        <p>Este é um sistema que permite alterar o valor através de Redux</p>
        <Counter />
        </div>
        </Provider>
    );
    }

    export default Exercicio3;

