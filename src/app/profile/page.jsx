import React from 'react'
// import Portfolio from './Profile'
import dynamic from 'next/dynamic'
const Portfolio = dynamic(()=>import('./Profile'))

function page() {
  return (
    <div>
      <Portfolio/>
    </div>
  )
}

export default page
