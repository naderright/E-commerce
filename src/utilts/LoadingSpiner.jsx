'use client'
import Lottie from 'lottie-react'
import spiner from './animation_Lotti/LoadingSpiner.json'
function LoadingSpiner() {
  return (
    <div>
      <Lottie style={{height:'1.7rem', width:'100%'}} animationData={spiner} loop={true}/>
    </div>
  )
}

export default LoadingSpiner
