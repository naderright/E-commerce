import dynamic from 'next/dynamic'
import React from 'react'
// import CheckoutPage from './CheckoutPage'
const CheckoutPage = dynamic(()=>import('./CheckoutPage'))

function page() {
  return (
    <div>
      <CheckoutPage/>
    </div>
  )
}

export default page
