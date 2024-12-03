const { createSlice } = require("@reduxjs/toolkit");
const { getSingleProduct } = require("../actions/ProductActions");

const initialState = {
  data: null,
  error: false,
  loading: 'idle'
};


export const SingleProductSlice = createSlice({
  name: 'singleProduct',
  initialState,
  reducers: {
    cleanUpSingleProduct: (state) => {
      state.data = null
    }
  },
  extraReducers: (builder) => {
    builder.addCase(getSingleProduct.pending, (state) => {
      state.error = false,
        state.loading = 'pending'
    });
    builder.addCase(getSingleProduct.fulfilled, (state, action) => {
      state.error = false,
        state.loading = 'succeded',
        state.data = action.payload
    });
    builder.addCase(getSingleProduct.rejected, (state, action) => {
      state.error = action.payload,
        state.loading = 'faild'
    })
  }
});

export const {cleanUpSingleProduct} = SingleProductSlice.actions;
export default SingleProductSlice.reducer;