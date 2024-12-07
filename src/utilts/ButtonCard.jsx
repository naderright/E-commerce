import { addToCart } from '@/API/slices/CartSlice'
import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import LoadingSpiner from './LoadingSpiner';
import toast from 'react-hot-toast';
// import LoadingSpiner from './LoadingSpiner';

function ButtonCard({ item, quantity }) {
  const dispatch = useDispatch();
  const [loading, setLoading] = useState(false)
  const product = { id: item.id, title: item.title, quantity: quantity || 1, price: item.price, stock: item.stock, imag: item.thumbnail }
  const handlAddToCart = () => {
    setLoading(true)
    dispatch(addToCart(product))
      setInterval(() => { setLoading(false) }, 1500)
      toast.success('add to cart successfuly')
   

    
  }

  return (

    <button
      onClick={handlAddToCart}
      aria-label="Add to cart"
      className="flex items-center px-2 md:px-4 py-2 bg-slate-950 text-white text-lg font-medium 
            rounded-lg shadow hover:scale-105 transition-colors"
    >
      {loading ? <LoadingSpiner/> : '🛒 Add to Cart'}
    </button>
  )
}

export default ButtonCard
