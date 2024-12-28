// import OrderDetailsPage from '@/components/orderPreview/OrderDetailsPage'
import dynamic from 'next/dynamic'
import React from 'react'
const OrderDetailsPage = dynamic(()=>import('@/components/orderPreview/OrderDetailsPage'))

function page() {
  return (
    <div className='px-11 py-[3rem]'>
      <OrderDetailsPage/>
    </div>
  )
}

export default page
