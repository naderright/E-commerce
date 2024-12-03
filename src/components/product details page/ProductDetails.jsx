'use client'
import ButtonCard from '@/utilts/ButtonCard';
import React, { useState } from 'react'
import { FaHeart, FaStar } from "react-icons/fa";

function ProductDetails({product}) {
   
    const [quantity, setQuantity] = useState(1);


    const handleIncrease = () => setQuantity(quantity + 1);
    const handleDecrease = () => quantity > 1 && setQuantity(quantity - 1);
    return (
        <div>
            <h1 className="text-3xl font-bold text-gray-800">{product.title}</h1>
            <p className="text-gray-600 mt-2">{product.description}</p>

            {/* Stars */}
            <div className="flex items-center mt-4">
                {[...Array(5)].map((_, index) => (
                    <FaStar
                        key={index}
                        className={index < product.rating ? "text-yellow-400" : "text-gray-300"}
                    />
                ))}
                <span className="ml-2 text-gray-600">({product.reviews.length} reviews)</span>
            </div>

           

            {/* Quantity and Action Buttons */}
            <div className="mt-6  items-center space-y-5">
                <div className="count">
                    <div className="flex items-center ">
                        <button
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                            onClick={handleDecrease}
                        >
                            -
                        </button>
                        <span className="px-4 py-2 border">{quantity}</span>
                        <button
                            className="px-4 py-2 bg-gray-100 hover:bg-gray-200"
                            onClick={handleIncrease}
                        >
                            +
                        </button>
                    </div>
                </div>
                <div className=" flex  my-2 space-x-2 ">
                        <ButtonCard  item={product.id} quantity={quantity}/>
                    
                    <button className="flex items-center  space-x-2  bg-red-500 hover:bg-red-600 text-white px-4 py-2 rounded-md">
                        <FaHeart />
                        <span>Add to Wishlist</span>
                    </button>
                </div>
            </div>
        </div>
    )
}

export default ProductDetails
