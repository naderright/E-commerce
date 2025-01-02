'use client'
import { getAllProducts } from '@/API/actions/ProductActions'
import ProductCard from '@/components/productCard'
import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'



function ProductPage() {
  const dispatch = useDispatch()
  const { data } = useSelector((state) => state.products)
  const [search, setSearch] = useState('')

  const handleSearch = (e) => {
    setSearch(e.target.value);

  }

  const filterProduct = data.filter((product) => product.title.toLowerCase().includes(search))


  useEffect(() => {
    if (!data.length) {
      dispatch(getAllProducts())
    }
    // console.log(data);

  }, [dispatch, data])
  return (
    <div>
      <div className='search flex justify-center items-center   pb-4'>

        <input onChange={handleSearch} type="text" placeholder='search...' className='border rounded-md px-2 outline-none
           focus:outline-none focus:ring py-1 focus:border-blue-400 w-[20rem] ' />
      </div>

      <div className="  grid grid-cols-1 sm:grid-cols-2  lg:grid-cols-4 gap-4 md:gap-6">
        {search ? filterProduct?.map((product) => (
          <ProductCard product={product} key={product.id} />

        )) : data?.map((product) => (

          <ProductCard product={product} key={product.id} />
        ))}


      </div>
    </div>
  )
}

export default ProductPage

