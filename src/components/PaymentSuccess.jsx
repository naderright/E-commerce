'use client'
import Lottie from 'lottie-react'
import paymentSuccesss from '../utilts/animation_Lotti/paymentSuccess.json'
import Link from 'next/link'

function PaymentSuccess() {
   
    return (
        <div>
            <div className='flex flex-col justify-center items-center   '>
                <Lottie style={{height:'20rem'}} animationData={paymentSuccesss} loop={true} />
                <div className="go_Home p-5  pt-0 flex flex-col">
                    <p className='font-bold'>ٍSend massage your Email  </p>
                    <Link href={'/'} className='  p-2  bg-slate-950 cursor-pointer hover:bg-slate-700
                       text-white font-medium rounded-md text-center' >GO to Home</Link>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess
