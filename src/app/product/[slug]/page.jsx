import SingleProductPage from '@/components/SinglePage'
import React from 'react'

function page({params}) {
  
  
  
  return (
    <div>
      <SingleProductPage params={params.slug}/>
    </div>
  )
}

export default page
