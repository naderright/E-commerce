'use client'
import Link from "next/link";
import { useDispatch, useSelector } from "react-redux";
import { signOut } from "@/API/slices/AuthSlice";
import { Navigate } from "@/utilts/Navigate";
import toast from "react-hot-toast";
import OrderHistory from "@/components/OrderHistory";

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

const Profile = () => {
  const dispatch = useDispatch()

  const user = useSelector((state)=>state.auth.user)

  // Handle Logout
  const handleLogout = () => {

    dispatch(signOut())
    toast.success('loged out successfuly')
    Navigate(window.location.origin,'/login')
    // Logic for logging out
  };

  return (
    <div className="pt-10">
      {/* Header */}
      <header className="bg-gray-800 text-white py-10">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-3xl font-bold">Welcome, {user.email}</h1>
          <p className="text-gray-300 mt-2">Manage your account and orders.</p>
        </div>
      </header>

      {/* Main Content */}
      <main className="container mx-auto px-4 py-8">
        {/* Profile Section */}
        <section className="mb-10">
          <h2 className="text-2xl font-bold mb-4">Profile Information</h2>
          <div className="bg-white shadow-md rounded-lg p-6">
            
            <p className="text-gray-700 mt-2">
              <span className="font-semibold">Email:</span> {user.email}
            </p>
            <button
              onClick={handleLogout}
              className="mt-4 bg-red-500 text-white px-4 py-2 rounded hover:bg-red-600"
            >
              sign out
            </button>
          </div>
        </section>

        {/* Orders Section */}
       <OrderHistory/>
      </main>
    </div>
  );
};

export default Profile;
