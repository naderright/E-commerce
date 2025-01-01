import React from 'react'
// import CartPage from './CartPage'
import dynamic from 'next/dynamic'
const CartPage = dynamic(()=>import('./CartPage'))

export const metadata ={
  title:'Cart',
  description:'Cart items to checkout your products'
}
function page() {
  return (
    <div>
      <CartPage/>
    </div>
  )
}

export default page
