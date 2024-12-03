import { createSlice } from "@reduxjs/toolkit";
import { AuthAction } from "../actions/AuthAction";
 const initialState = {
    user:{},
    loading:'idle',
    error:false
 }

export const AuthSlice = createSlice({
    name:'auth',
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(AuthAction.pending,(state)=>{
                state.loading = 'pending'
        });
        builder.addCase(AuthAction.fulfilled,(state,action)=>{
             state.loading = 'succeded',
             state.user = action.payload
        });
        builder.addCase(AuthAction.rejected,(state,action)=>{
            state.loading='faild',
            state.error = action.payload
        });
    }
})


export default AuthSlice.reducer;