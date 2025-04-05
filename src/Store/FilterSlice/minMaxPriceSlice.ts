import { createSlice } from "@reduxjs/toolkit";

const minMaxPriceSlice=createSlice({
    name:"minMaxPrice",
    initialState:{
        minPrice:0,
        maxPrice:0
    },
    reducers:{
       setMinMaxPrice:(state,action)=>{
        state.minPrice=action.payload.minPrice
        state.maxPrice=action.payload.maxPrice
       } 
    }
})  

export const {setMinMaxPrice}=minMaxPriceSlice.actions
export default minMaxPriceSlice.reducer