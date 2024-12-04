import { configureStore } from "@reduxjs/toolkit";
import catReducer from "../components/exercicio4/features/cat/cat-slice";
import {thunk} from "redux-thunk";


export const store = configureStore({
    reducer:{
        cat: catReducer,
    },
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(thunk),
})


