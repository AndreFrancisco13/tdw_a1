import { configureStore } from "@reduxjs/toolkit";
import catReducer from "../components/exercicio4/features/cat/cat-slice";
import {thunk} from "redux-thunk";
import counterReducer from "../components/exercicio3/features/counter/counter-slice";


export const store = configureStore({
    reducer:{
        cat: catReducer,
        counter: counterReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})


