'use client'
import Lottie from 'lottie-react'
import spiner from './animation_Lotti/LoadingSpiner.json'
function LoadingSpiner() {
  return (
    <div className='flex font-[.7rem] w-full justify-center items-center '>
      <Lottie style={{height:'1.7rem'}} animationData={spiner} loop={true}/>
      <span>Loading...</span>
    </div>
  )
}

export default LoadingSpiner
