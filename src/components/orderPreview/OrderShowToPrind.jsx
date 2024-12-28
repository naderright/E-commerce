'use client'
import Image from 'next/image'
import { useSearchParams } from 'next/navigation'
import React from 'react'
import { useSelector } from 'react-redux'
import logo from '../../public/NaderShop.png'
function OrderShowToPrind({ contentRef }) {
    const id = useSearchParams().get('id')
    const { user } = useSelector((state) => state.auth)
    const allOrder = useSelector((state) => state.order.orderItems)
    const orderUser = allOrder.filter((order) => order.user == user.email)
    const order = orderUser.filter((order) => order.id == id)[0]
    return (
        <div>
           
            <div ref={contentRef} className='px-5 ' >
                <div className="order_details">
                <h3 className='w-full text-center font-bold text-[1.3rem]'>Order Details</h3>
                    <div className="logo flex justify-between flex-row-reverse">
                        <Image src={logo} width={170} height={150} alt='nadershop' />
                        <div className="informaion mt-7  shadow-sm" >
                            <h3 className='font-bold'>Email :<span className='font-normal'> {order.user}</span></h3>
                            <p className='font-bold'>Order_ID :<span className='font-normal'> {order.id}</span></p>
                            <p className='font-bold'>Total Price : <span className='font-normal'>${order.amount}</span></p>
                            <p className='font-bold'>Date : <span className='font-normal'>{order.date}</span></p>
                            <p className='font-bold'>Time : <span className='font-normal'>{order.time}</span></p>
                        </div>
                    </div>
                </div>
                <div className="products">
                    <h3 className='w-full text-center font-bold text-[1.4rem] py-4'>Products</h3>

                    <div className="productsItems" >
                        <table className=' text-[14px] table-fixed w-full text-left  border border-s-amber-100 border-collapse'>
                            <thead>
                                <tr className='font-bold'>
                                    <td className='border border-s-amber-100'>image</td>
                                    <td className='border border-s-amber-100' >name</td>
                                    <td className='border border-s-amber-100'>price</td>
                                    <td className='border border-s-amber-100'>quantity</td>
                                    <td className='border border-s-amber-100'>total</td>
                                </tr>
                            </thead>

                            <tbody>
                                {order.items.map((item, index) => (
                                    <tr key={index}>
                                        <td className='border border-s-amber-100'><Image src={item.imag} priority width={100} height={100} alt={item.title} /></td>
                                        <td className='border border-s-amber-100'>{item.title}</td>
                                        <td className='border border-s-amber-100'>${item.price.toFixed(1)}</td>
                                        <td className='border border-s-amber-100'>{item.quantity}</td>
                                        <td className='border border-s-amber-100'>${item.price.toFixed(1) * item.quantity}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                </div>

            </div>
        </div>
    )
}

export default OrderShowToPrind
