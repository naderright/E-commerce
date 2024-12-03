import React from 'react'

function CartCheck({cartItems}) {
    const subtotal = cartItems.reduce(
        (acc, item) => acc + item.price * item.quantity,
        0
      );
      const tax = subtotal * 0.1; // Example 10% tax
      const total = subtotal + tax;
    return (
        <div>
            <div className="bg-white p-6 rounded shadow">
                <h2 className="text-xl font-bold mb-4">Cart Summary</h2>
                <div className="flex justify-between mb-2">
                    <span>Subtotal:</span>
                    <span>${subtotal.toFixed(2)}</span>
                </div>
                <div className="flex justify-between mb-2">
                    <span>Tax (10%):</span>
                    <span>${tax.toFixed(2)}</span>
                </div>
                <hr className="my-4" />
                <div className="flex justify-between text-lg font-bold">
                    <span>Total:</span>
                    <span>${total.toFixed(2)}</span>
                </div>
                <button className="w-full bg-blue-500 text-white py-2 rounded mt-4">
                    Proceed to Checkout
                </button>
            </div>
        </div>
    )
}

export default CartCheck
