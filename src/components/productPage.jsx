'use client'
import { getAllProducts } from '@/API/actions/ProductActions'
import ProductCard from '@/components/productCard'
import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'



function ProductPage() {
    const dispatch = useDispatch()
    const {data}= useSelector((state)=>state.products)
    // const re = async()=>{
    //   const {data}  = await axios.get('https://dummyjson.com/products')
    //   return data.products
    // }
    useEffect(()=>{
      if(!data.length){
        dispatch(getAllProducts())
      }
      // console.log(data);
  
    },[dispatch,data])
  return (
    <div>
      <div className="  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 md:gap-6">
          {data?.map((product,key) => (
          
            <ProductCard product={product} key={key}/>
          ))}
        </div>
    </div>
  )
}

export default ProductPage

