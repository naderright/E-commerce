'use client'
import Lottie from 'lottie-react'
import Load from './animation_Lotti/Loading.json'

function Loading() {
  return (
    <div>
      <Lottie style={{height:'30rem'}} animationData={Load} loop={true}/>
    </div>
  )
}

export default Loading
