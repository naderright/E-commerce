'use client'

import React from 'react'
import { useReactToPrint } from "react-to-print";
import { useRef } from "react";
import OrderShowToPrind from '@/components/orderPreview/OrderShowToPrind'

function OrderDetailsPage() {
    const contentRef = useRef(null);
    const reactToPrintFn = useReactToPrint({ contentRef });


    return (
        <>

            <OrderShowToPrind contentRef={contentRef} />
            <div className='text-center w-full'>
                <button onClick={() => reactToPrintFn()} className='p-3 w-[96%] bg-slate-950 text-white  hover:bg-slate-800' >
                    Print Order
                </button>
            </div>

        </>
    )
}

export default OrderDetailsPage
