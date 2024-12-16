import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    orderItems:[],
    eroror:false,
    loading:'idle',
}

const OrderSlice = createSlice({
    name:'order',
    initialState,
    reducers:{
        addOrder:(state,action)=>{
          state.orderItems=action.payload
        }
    }
});


export const {addOrder} =OrderSlice.actions;
export default OrderSlice.reducer;