'use client'
import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { FaHeart, FaShoppingBasket, FaUser, FaBars, FaTimes } from 'react-icons/fa';
import Link from 'next/link';
import { useSelector } from 'react-redux';
import { Navigate } from '@/utilts/Navigate';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const user = useSelector((state) => state.auth.user)
  const cart = useSelector((state) => state.cart.cart)
const handlePortofilioPage = ()=>{
  Navigate('/portfolio')
}


  return (
    <header className="bg-white shadow-md fixed w-full z-10">
      <div className="container mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-2xl font-bold text-gray-800">
          <Link href="/">NaderShop</Link>
        </div>

        {/* Menu for large screens */}
        <nav className="hidden md:flex items-center space-x-6">
          <Link href="/" className="text-gray-700 hover:text-gray-900">
            Home
          </Link>
          <Link href="/product" className="text-gray-700 hover:text-gray-900">
            Product
          </Link>
          <Link href="/contactus" className="text-gray-700 hover:text-gray-900">
            Contact Us
          </Link>
        </nav>

        {/* Icons */}
        <div className='flex items-center justify-center space-x-3'>
          <div className=" flex items-center space-x-4">
            <FaHeart className=" text-[1.3rem] text-gray-600 hover:text-gray-800 cursor-pointer" />
            <Link href={'/cart'} >

              <div className="basket relative px-1 py-2" >
                <FaShoppingBasket className="text-[1.3rem] text-gray-600 hover:text-gray-800 cursor-pointer" />
                <span className='w-[1.1rem] h-[1.1rem] rounded-full bg-red-600 text-white 
              font-semibold top-[-1%] right-[-1%] absolute text-center align-middle'>{user.email?cart.length:0}</span>
              </div>

            </Link>


            {!user.email ? <Link href={'/login'}><button className='cursor-pointer rounded-sm px-2 py-1 text-white bg-slate-950 
            font-semibold'>Login</button></Link> :
              <FaUser onClick={handlePortofilioPage} className="text-[1.3rem] text-gray-600 hover:text-gray-800 cursor-pointer" />}

          </div>

          {/* Hamburger menu for mobile */}
          <div className="md:hidden flex items-center">
            <button onClick={() => setIsOpen(!isOpen)} className="text-gray-600 hover:text-gray-800">
              {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      {isOpen && (
        <motion.div
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          className="md:hidden bg-white shadow-lg"
        >
          <nav className="flex flex-col space-y-4 py-4 px-6">
            <Link href="/" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Home
            </Link>
            <Link href="/product" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Product
            </Link>
            <Link href="/contactus" className="text-gray-700 hover:text-gray-900" onClick={() => setIsOpen(false)}>
              Contact Us
            </Link>

          </nav>
        </motion.div>
      )}
    </header>
  );
}
