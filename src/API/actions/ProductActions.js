import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";



export const getAllProducts = createAsyncThunk('product/allProducts', async (_, thunkAPI) => {
    const { rejectWithValue } = thunkAPI;

    try {
        const { data } = await axios.get('https://dummyjson.com/products');
        return data.products;
    } catch (error) {
        return rejectWithValue(error.respose.data.message || error.message)
    }
});


export const getSingleProduct = createAsyncThunk('product/slug',async(id,thunkAPI)=>{
    const {rejectWithValue} = thunkAPI;
    try {
        const {data} = await axios (`https://dummyjson.com/products/${id}`)
        return data;
    } catch (error) {
        return rejectWithValue(error.respose.data.message || error.message)
    }
})


