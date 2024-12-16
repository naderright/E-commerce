'use client'
import Link from "next/link";
import { useDispatch } from "react-redux";
import { signOut } from "@/API/slices/AuthSlice";
import { Navigate } from "@/utilts/Navigate";
import toast from "react-hot-toast";

const accountData = {
  name: "John Doe",
  email: "johndoe@example.com",
  orders: [
    {
      id: 1,
      date: "2024-12-01",
      status: "Delivered",
      total: "$150.00",
    },
    {
      id: 2,
      date: "2024-11-20",
      status: "Pending",
      total: "$75.00",
    },
  ],
};

const Portfolio = () => {
  const dispatch = useDispatch()

  // Handle Logout
  const handleLogout = () => {

    dispatch(signOut())
    toast.success('loged in successfuly')
    Navigate('/login')
    // Logic for logging out
  };

  return (
    <div>
      {/* Header */}
      <header className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Welcome, {accountData.name}</h1>
          <p className="text-gray-300 mt-2">Manage your account and orders.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            <p className="text-gray-700">
              <span className="font-semibold">Name:</span> {accountData.name}
            </p>
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Email:</span> {accountData.email}
            </p>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
            </button>
          </div>
        </section>

        {/* Orders Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Order History</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            {accountData.orders.length > 0 ? (
              <table className="table-auto w-full text-left border-collapse">
                <thead>
                  <tr>
                    <th className="border-b py-2">Date</th>
                    <th className="border-b py-2">Status</th>
                    <th className="border-b py-2">Total</th>
                    <th className="border-b py-2">Details</th>
                  </tr>
                </thead>
                <tbody>
                  {accountData.orders.map((order) => (
                    <tr key={order.id}>
                      <td className="py-2 border-b">{order.date}</td>
                      <td className="py-2 border-b">{order.status}</td>
                      <td className="py-2 border-b">{order.total}</td>
                      <td className="py-2 border-b">
                        <Link
                          href={`/`}
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
      </main>
    </div>
  );
};

export default Portfolio;
