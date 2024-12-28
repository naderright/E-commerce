import React from 'react'
// import CartPage from './CartPage'
import dynamic from 'next/dynamic'
const CartPage = dynamic(()=>import('./CartPage'))
function page() {
  return (
    <div>
      <CartPage/>
    </div>
  )
}

export default page
