// import SingleProductPage from '@/components/SinglePage'
import dynamic from 'next/dynamic'
import React from 'react'
const SingleProductPage = dynamic(()=>import('@/components/SinglePage'))

function page({params}) {
  
  
  
  return (
    <div>
      <SingleProductPage params={params.slug}/>
    </div>
  )
}

export default page
