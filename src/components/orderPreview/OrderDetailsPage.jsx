'use client'

import React, { useState } from 'react'
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import OrderShowToPrind from '@/components/orderPreview/OrderShowToPrind'
import { deleteOrder } from '@/API/slices/OrderSlice';
import { useSearchParams } from 'next/navigation';
import { useDispatch } from 'react-redux';
import { Navigate } from '@/utilts/Navigate';
import LoadingSpiner from '@/utilts/LoadingSpiner';

function OrderDetailsPage() {
    const dispatch = useDispatch()
    const id = useSearchParams().get('id')
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });
    const [loading,setLoading] = useState(false)

const handleDeleteOrder = ()=>{
    setLoading(true)
     dispatch(deleteOrder(id))
     Navigate(window.location.origin,'/profile')
     setLoading(false)
}
    return (
        <>

            <OrderShowToPrind contentRef={contentRef} />
            <div className='text-center px-5 py-2   flex justify-between items-center space-x-2'>
                <button onClick={() => reactToPrintFn()} className='p-2 w-full shadow-sm bg-slate-950 text-white  hover:bg-slate-800' >
                    Print Order
                </button>
                <button onClick={handleDeleteOrder} className=' w-full p-2 shadow-sm bg-slate-950 text-white
                  hover:bg-slate-800'>{loading?<LoadingSpiner/>:'Delete order'}</button>
            </div>

        </>
    )
}

export default OrderDetailsPage
