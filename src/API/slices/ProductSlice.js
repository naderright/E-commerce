import { getAllProducts } from "../actions/ProductActions";

const { createSlice } = require("@reduxjs/toolkit")

const initialState = {
  data: [],
  loading: 'idle',
  error: null
}


export const ProductSlice = createSlice({
  name: 'products',
  initialState,
  reducers: {
    dataCleanUp:(state)=>{
      state.data=[]
    }
  },
  extraReducers: (builder) => {
    //get all products
    builder.addCase(getAllProducts.pending, (state) => {
      state.loading = 'pending';
      state.error = null;
    });
    builder.addCase(getAllProducts.fulfilled,(state,action)=>{
      state.loading = 'succeeded';
      state.data = action.payload;
    });
    builder.addCase(getAllProducts.rejected, (state,action) => {
      state.loading = 'faild';
      state.error = action.payload;
    });
  },
});


export const {dataCleanUp, } = ProductSlice.actions;
export default ProductSlice.reducer;