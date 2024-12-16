import React from "react";

const orderData = {
  id: "ORD12345678",
  date: "2024-12-03",
  status: "Delivered",
  items: [
    {
      id: 1,
      name: "Wireless Headphones",
      image: "https://via.placeholder.com/100",
      price: "$50.00",
      quantity: 1,
    },
    {
      id: 2,
      name: "Smart Watch",
      image: "https://via.placeholder.com/100",
      price: "$100.00",
      quantity: 2,
    },
  ],
  subtotal: "$250.00",
  tax: "$25.00",
  total: "$275.00",
  shippingAddress: {
    name: "John Doe",
    address: "123 Main Street, Springfield",
    phone: "+1 234 567 890",
  },
};

const OrderPage = () => {
  return (
    <div className="container mx-auto px-4 py-8">
      {/* Order Summary */}
      <section className="mb-10">
        <h1 className="text-3xl font-bold mb-4">Order Details</h1>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700">
            <span className="font-semibold">Order ID:</span> {orderData.id}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Date:</span> {orderData.date}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Status:</span>{" "}
            <span
              className={`font-bold ${
                orderData.status === "Delivered"
                  ? "text-green-500"
                  : "text-yellow-500"
              }`}
            >
              {orderData.status}
            </span>
          </p>
        </div>
      </section>

      {/* Order Items */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Order Items</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          {orderData.items.map((item) => (
            <div
              key={item.id}
              className="flex items-center border-b pb-4 mb-4"
            >
              <img
                src={item.image}
                alt={item.name}
                className="w-16 h-16 object-cover rounded-lg"
              />
              <div className="ml-4 flex-grow">
                <h3 className="text-lg font-bold">{item.name}</h3>
                <p className="text-gray-600">
                  {item.quantity} x {item.price}
                </p>
              </div>
              <p className="text-gray-800 font-semibold">
                ${parseFloat(item.price.slice(1)) * item.quantity}.00
              </p>
            </div>
          ))}
        </div>
      </section>

      {/* Pricing Details */}
      <section className="mb-10">
        <h2 className="text-2xl font-bold mb-4">Pricing Details</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <div className="flex justify-between mb-4">
            <p className="text-gray-700">Subtotal</p>
            <p className="text-gray-800">{orderData.subtotal}</p>
          </div>
          <div className="flex justify-between mb-4">
            <p className="text-gray-700">Tax</p>
            <p className="text-gray-800">{orderData.tax}</p>
          </div>
          <div className="flex justify-between font-bold text-lg">
            <p>Total</p>
            <p>{orderData.total}</p>
          </div>
        </div>
      </section>

      {/* Shipping Address */}
      <section>
        <h2 className="text-2xl font-bold mb-4">Shipping Address</h2>
        <div className="bg-white shadow-md rounded-lg p-6">
          <p className="text-gray-700">
            <span className="font-semibold">Name:</span>{" "}
            {orderData.shippingAddress.name}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Address:</span>{" "}
            {orderData.shippingAddress.address}
          </p>
          <p className="text-gray-700 mt-2">
            <span className="font-semibold">Phone:</span>{" "}
            {orderData.shippingAddress.phone}
          </p>
        </div>
      </section>
    </div>
  );
};

export default OrderPage;
