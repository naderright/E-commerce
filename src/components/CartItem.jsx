'use client'
import { decremantQuantity, incremantQuantity, removeFromCart } from '@/API/slices/CartSlice';
import Image from 'next/image'
import { useDispatch } from 'react-redux'
import toast from "react-hot-toast";

function CartItem({ cartItems}) {
    // const auth = useSelector((state)=>state.auth.user)
    // const cartUser = cartItems.filter((item)=>item.user == auth.email)

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
    return (
        <div>
            <div className="md:col-span-2">
                {cartItems.length === 0 ? (
                    <p className="text-gray-500 text-center">Your cart is empty.</p>
                ) : (
                    cartItems.map((item) => (
                        <div
                            key={item.id}
                            className="flex items-center justify-between bg-white p-4 rounded shadow mb-4"
                        >
                            <Image
                                width={100}
                                height={100}
                                priority
                                src={item.imag}
                                alt={item.title}
                                className="w-20 h-20 object-cover rounded"
                            />
                            <div className="flex-1 ml-4">
                                <h2 className="text-lg font-semibold">{item.title}</h2>
                                <p className="text-gray-500">${item.price.toFixed(1)}</p>
                                <div className="flex items-center mt-2">
                                    <button
                                        onClick={() => decrementQuantity(item.id)}
                                        className="bg-gray-200 px-2 py-1 rounded"
                                    >
                                        -
                                    </button>
                                    <span className="mx-2">{item.quantity}</span>
                                    <button
                                        onClick={() => incrementQuantity(item.id)}
                                        className="bg-gray-200 px-2 py-1 rounded"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>
                            <div className="flex flex-col items-end">
                                <p className="text-lg font-bold">
                                    ${(item.price * item.quantity).toFixed(1)}
                                </p>
                                <button
                                    onClick={() => removeItem(item.id)}
                                    className="text-red-500 text-sm mt-2"
                                >
                                    Remove
                                </button>
                            </div>
                        </div>
                    ))
                )}
            </div>
        </div>
    )
}

export default CartItem
