import axios from "axios";
import WebApis from "./WebApis";

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
export const getProduct=createAsyncThunk('ProductSlice/getProduct',async ()=>{
    try {
        let response = await axios.get(WebApis.getAllProduct);
        return response.data.result;
    } catch (error) {
        
    }
})
const slice = createSlice({
    name:'ProductSlice',
    initialState:{
        productList : [],
        isLoading : false,
        error : false
    },
    extraReducers:(builder)=>{
        builder.addCase(getProduct.pending,(state,action)=>{
            state.isLoading=true;
        }).addCase(getProduct.fulfilled,(state,action)=>{
            state.isLoading=false;
            state.productList=action.payload;
        }).addCase(getProduct.rejected,(state,action)=>{
            state.error="Oops! Something get Wronng";
        })
    }
})
export default slice.reducer;