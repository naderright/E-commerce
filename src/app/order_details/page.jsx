import OrderDetailsPage from '@/components/OrderDetailsPage'
import TitleSec from '@/components/TiltleSec'
import React from 'react'

function page() {
  return (
    <div className='px-11 py-[3rem]'>
        <TitleSec name={'Order'}/>
      <OrderDetailsPage/>
    </div>
  )
}

export default page
