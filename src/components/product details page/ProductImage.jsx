'use client'
import React, { useState } from 'react'
import { motion } from "framer-motion";
import Image from 'next/image';


function ProductImage({ product }) {
    const [selectedImage, setSelectedImage] = useState(product.images[0]);
    // console.log(product);


    return (
        <>
            <div className="flex flex-col items-center">
                <motion.div
                    className="relative"
                    whileHover={{ scale: 1.01 }}
                    transition={{ duration: 0.3 }}
                >
                    <Image
                        property={product.title}
                        priority
                        width={200}
                        height={200}
                        src={selectedImage}
                        alt={product.title}
                        className="w-full h-96 object-cover rounded-lg shadow-md"
                    />
                </motion.div>

                {/* Thumbnail Images */}
                <div className="flex mt-4 space-x-4">
                    {product.images.map((image, index) => (
                        <Image
                            property={product.title}
                            priority
                            width={100}
                            height={100}
                            key={index}
                            src={image}
                            alt={`Thumbnail ${index + 1}`}
                            className={`w-16 h-16 object-cover rounded-lg cursor-pointer ${selectedImage === image ? "ring-2 ring-gray-800" : ""
                                }`}
                            onClick={() => setSelectedImage(image)}
                        />
                    ))}
                </div>
            </div>
        </>
    )
}

export default ProductImage
