'use client'
import Lottie from 'lottie-react'
import spiner from './animation_Lotti/LoadingSpiner.json'
function LoadingSpiner() {
  return (
    <div className='flex font-[1rem] '>
      <Lottie style={{height:'1.7rem', width:'100%'}} animationData={spiner} loop={true}/>
      <span>Loading...</span>
    </div>
  )
}

export default LoadingSpiner
