import React from "react";
import './App.css';
import { Provider} from 'react-redux';
import { store } from '../../app/store';
import CatComponent from "./catComponent";

const Exercicio4 = () => {


    return (
        <Provider store={store}>
        <div>
        <p>Este é um sistema novo, de gatinhos</p>
        </div>
        <CatComponent/>
        </Provider>
    );
    }

    export default Exercicio4;

