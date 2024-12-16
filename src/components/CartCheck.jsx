'use client'
import { addOrder } from '@/API/slices/OrderSlice';
import { Navigate } from '@/utilts/Navigate';
import { useState } from 'react';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';

function CartCheck({cartItems}) {
const [isloading,setIsloading] = useState(false)
    const dispatch = useDispatch()
    // const auth = useSelector((state)=>state.auth.user)

    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      const tax = subtotal * 0.1; // Example 10% tax
      const total = subtotal + tax;

    //   const cartUser = cartItems.filter((item)=>item.user == auth.email);
    //   const orderUser = {
    //     user:auth.email,
    //     items:cartUser,
    //     amount:total.toFixed(2)
    //   }

      const handleOrder=()=>{
        setIsloading(true)
        // dispatch(addOrder(orderUser))
        setIsloading(false)
        toast.success('success make new order')
         Navigate(`/checkout?amount=${total.toFixed(2)}`)

      }
    return (
        <div>
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
                <div className="flex justify-between mb-2">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Tax (10%):</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <button disabled={isloading} onClick={handleOrder} className="w-full bg-slate-950 text-white py-2 rounded mt-4">
                   {isloading?'Proceesing......':'Checkout'} 
                </button>
            </div>
        </div>
    )
}

export default CartCheck
