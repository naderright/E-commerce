import { addToCart } from '@/API/slices/CartSlice'
import React from 'react'
import { useDispatch } from 'react-redux'

function ButtonCard({item,quantity}) {
  const dispatch = useDispatch();
  const product = {id:item.id,title:item.title,quantity:quantity||1,price:item.price,stock:item.stock,imag:item.thumbnail}
  const handlAddToCart=()=>{
    dispatch(addToCart(product))
    
  }
  return (
    
      <button
      onClick={handlAddToCart}
            aria-label="Add to cart"
            className="flex items-center px-4 py-2 bg-blue-500 text-white text-lg font-medium 
            rounded-lg shadow hover:bg-blue-600 transition-colors"
          >
            🛒 Add to Cart
          </button>
  )
}

export default ButtonCard
