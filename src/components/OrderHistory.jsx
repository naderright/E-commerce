'use client'
import Link from 'next/link';
import React from 'react'
import { useSelector } from 'react-redux'

function OrderHistory() {

 const orderList = useSelector((state)=>state.order.orderItems);
 const user = useSelector((state)=>state.auth.user);
 const  orderUser = orderList.filter((order)=>order.user == user.email)
    return (
        <section className="mb-10">
            <h2 className="text-2xl font-bold mb-4">Order History</h2>
            <div className="bg-white shadow-md rounded-lg p-6">
                {orderUser.length > 0 ? (
                    <table className="table-auto w-full text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="border-b py-2">Date</th>
                                <th className="border-b py-2">Time</th>
                                <th className="border-b py-2">Total</th>
                                <th className="border-b py-2">Details</th>
                            </tr>
                        </thead>
                        <tbody>
                            {orderUser.map((order,index) => (
                                <tr key={index}>
                                    <td className="py-2 border-b">{order.date}</td>
                                    <td className="py-2 border-b">{order.time}</td>
                                    <td className="py-2 border-b"> ${order.amount}</td>
                                    <td className="py-2 border-b">
                                        <Link
                                            href={`/order_details?id=${order.id}`}
                                            className="text-blue-500 hover:underline"
                                        >
                                            View
                                        </Link>
                                    </td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                ) : (
                    <p className="text-gray-700">No orders yet.</p>
                )}
            </div>
        </section>
    )
}

export default OrderHistory
