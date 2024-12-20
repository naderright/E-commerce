const { createSlice } = require("@reduxjs/toolkit");
const initialState={
    items:{},
    cart:[],
    error:false,
    loading:'idle'
}

const CartSlice = createSlice({
    name:'cart',
    initialState,
    reducers:{
        removeCart:(state)=>{
             state.cart = [],
             state.items={} 
        },
       addToCart:(state,action)=>{
        if (!state.items[action.payload.id]) {
            
            state.items[action.payload.id]=1;
            state.cart.push(action.payload) ;           
        }else{
            state.items[action.payload.id] +=1;
            state.cart.forEach((product)=>{
                if (product.id === action.payload.id) {
                    product.quantity +=1
                }
            })
        }        
         
         
       },
       removeFromCart:(state,action)=>{
                //  cartItm = cart.filter((product)=>{
                //          product.id !== action.payload
                //       }) 
                            
             delete state.items[action.payload]
             state.cart=state.cart.filter((product)=>product.id !== action.payload)
       },

       incremantQuantity:(state,action)=>{
        state.cart.forEach((product)=>{
            if (product.id === action.payload) {
                product.quantity+=1
            }
        })
       },

       decremantQuantity:(state,action)=>{
        state.cart.forEach((product)=>{
            if (product.id === action.payload && product.quantity>1) {
                product.quantity-=1
            }
        })
       },

    },

});


export const {addToCart,removeFromCart,incremantQuantity,decremantQuantity,removeCart} = CartSlice.actions;

export default CartSlice.reducer;