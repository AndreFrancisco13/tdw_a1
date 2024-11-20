//DUCKS pattern

import { createSlice, PayloadAction } from '@reduxjs/toolkit';


const initialState = {

    value:0
}

const counterSlice = createSlice({

name:'counter',
initialState,
reducers:{
    incremented(state, action){

        state.value += action.payload;
    },
    decremented(state, action){

        state.value -= action.payload;
    },
    reset(state){

        state.value = 0;

}
}
})

export const {incremented, decremented, reset} = counterSlice.actions;
export default counterSlice.reducer;

