'use client'
import { decremantQuantity, incremantQuantity, removeFromCart } from "@/API/slices/CartSlice";
import CartCheck from "@/components/CartCheck";
import CartItem from "@/components/CartItem";
import { Navigate } from "@/utilts/Navigate";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";

const CartPage = () => {
  const {user} = useSelector((state) => state.auth)
  const cartItems = useSelector((state) => state.cart.cart)
  const dispatch = useDispatch();  //   {
  

  // Increment quantity
  const incrementQuantity = (id) => {
    dispatch(incremantQuantity(id))
  };

  // Decrement quantity
  const decrementQuantity = (id) => {
    dispatch(decremantQuantity(id))
  };

  // Remove item from cart
  const removeItem = (id) => {
    dispatch(removeFromCart(id))
    toast.error('remove item from cart'+ ' id = '+id)
  };


  useEffect(() => {
    
    if (!user.email) {
      Navigate('/login')
    }
    
       
  }, [])

  

  return (

    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {/* Cart Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CartItem cartItems={cartItems}
          incrementQuantity={incrementQuantity}
          decrementQuantity={decrementQuantity}
          removeItem={removeItem}
        />

        {/* Cart Summary */}
        <div className="checkBox ">
          <CartCheck cartItems={cartItems} />
        </div>

      </div>
    </div>
  );
};

export default CartPage;
