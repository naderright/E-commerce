import React from 'react'
// import Portfolio from './Profile'
import dynamic from 'next/dynamic'
const Portfolio = dynamic(()=>import('./Profile'))

export const metadata = {
  title:'Profile User',
  description:'view profile page for NaderShop'
}

function page() {
  return (
    <div>
      <Portfolio/>
    </div>
  )
}

export default page
