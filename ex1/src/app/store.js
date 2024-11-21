import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "../components/exercicio3/features/counter/counter-slice";
import catReducer from "../components/exercicio4/features/cat/cat-slice";
import {thunk} from "redux-thunk";


export const store = configureStore({
    reducer:{
        counter:counterReducer,
        cat: catReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})


