import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

const API_URL = "https://api.thecatapi.com/v1/images/search";

export const fetchCat = createAsyncThunk("cat/fetchCat", async ({limit, page, order, api_key}) => {

    const response= await axios.get( API_URL, { params:
        {
            limit,
            page,
            order,
            api_key,
        },
    });
    return response.data;
});

const catSlice= createSlice ({
    name: 'cat',
    initialState:{
        cats:[],
        status: 'idle',
        error: null,
    },
    reducers:{},
    extraReducers: (builder)=>{
        builder.addCase(fetchCat.pending, (state)=>{
            state.status='loading';
        });
        builder.addCase(fetchCat.fulfilled, (state, action)=>{
            state.status='succeeded';
            state.cats= state.cats.concat(action.payload);
        });
        builder.addCase(fetchCat.rejected, (state, action)=>{
            state.status='failed';
            state.error= action.error.message;
    });

},
});
        

export default catSlice.reducer;
