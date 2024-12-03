'use client'
import { useState } from "react";

export default function Checkout() {
  const [formData, setFormData] = useState({
    name: "",
    address: "",
    phone: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("تم تأكيد الطلب بنجاح!");
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <h1 className="text-3xl font-bold text-center mb-10">الدفع</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        {/* User Details */}
        <div>
          <label className="block text-gray-700 mb-1">الاسم الكامل</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">العنوان</label>
          <input
            type="text"
            name="address"
            value={formData.address}
            onChange={handleInputChange}
            required
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>
        <div>
          <label className="block text-gray-700 mb-1">رقم الهاتف</label>
          <input
            type="text"
            name="phone"
            value={formData.phone}
            onChange={handleInputChange}
            required
            className="w-full border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
          />
        </div>

        {/* Order Summary */}
        <div className="bg-gray-100 p-4 rounded-lg shadow-md">
          <h3 className="text-xl font-semibold mb-4">ملخص الطلب</h3>
          <p className="text-gray-700">الإجمالي: <span className="font-bold">120 ريال</span></p>
        </div>

        <button
          type="submit"
          className="bg-green-500 text-white px-6 py-3 rounded w-full"
        >
          تأكيد الطلب
        </button>
      </form>
    </div>
  );
}
