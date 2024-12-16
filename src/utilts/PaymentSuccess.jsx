'use client'
import Lottie from 'lottie-react'
import paymentSuccesss from './animation_Lotti/paymentSuccess.json'
import { Navigate } from './Navigate'

function PaymentSuccess() {
    const handelGoToHme = () => {
        Navigate('/')
    }
    return (
        <div>
            <div className='flex flex-col justify-center items-center   '>
                <Lottie style={{height:'20rem'}} animationData={paymentSuccesss} loop={true} />
                <div className="go_Home p-5 flex flex-col">
                    <p className='font-bold'>You want to go home Website Click this button </p>
                    <button className='  p-2 bg-slate-950 cursor-pointer hover:bg-slate-700
                       text-white font-medium rounded-md' onClick={handelGoToHme}>GO Home</button>
                </div>
            </div>
        </div>
    )
}

export default PaymentSuccess
