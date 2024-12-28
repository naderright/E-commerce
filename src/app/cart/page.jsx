'use client'
import CartCheck from "@/components/CartCheck";
import CartItem from "@/components/CartItem";
import { Navigate } from "@/utilts/Navigate";
import { useRouter } from "next/router";
import { useEffect } from "react";
import {  useSelector } from "react-redux";

const CartPage = () => {
 
  const {user} = useSelector((state) => state.auth)
  const cart = useSelector((state) => state.cart.cart)

  const cartItems = cart.filter((item)=>item.user == user.email)
  
   
  useEffect(() => {
    
    if (!user.email) {
      Navigate('/login')
    }
    
       
  }, [user.email])

  

  return (

    <div className="container mx-auto p-4">
      <h1 className="text-3xl font-bold text-center mb-6">Your Cart</h1>

      {/* Cart Items */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <CartItem cartItems={cartItems}/>

        {/* Cart Summary */}
        <div className="checkout ">
          <CartCheck cartItems={cartItems} />
        </div>

      </div>
    </div>
  );
};

export default CartPage;
