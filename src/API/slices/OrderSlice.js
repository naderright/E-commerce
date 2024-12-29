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
          state.orderItems.push(action.payload)
        },

        deleteOrder:(state,action)=>{
            const newState = state.orderItems.filter((item)=>item.id!=action.payload);
            state.orderItems = newState
        }
    }
});


export const {addOrder, deleteOrder} =OrderSlice.actions;
export default OrderSlice.reducer;