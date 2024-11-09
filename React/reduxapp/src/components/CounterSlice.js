import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const slice=createSlice({
    name:"counterSlice",
    initialState:{
        counter:100
    },
    reducers:{
        increment : (state,action)=>{
            state.counter =  state.counter + 1;
        },
        decrement :(state,action)=>{
            state.counter =  state.counter - 1;
        }
    }
})
export const {increment,decrement}=slice.actions;
export default slice.reducer;