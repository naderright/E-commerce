'use client'
import React from "react";
import Link from "next/link";
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from "react-icons/fa";
import Image from "next/image";
import NaderShop from '../public/NaderShop.png'


const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="container mx-auto px-4">
        {/* Top Section */}
        <div className="flex flex-col md:flex-row justify-around items-center">
          {/* Brand Section */}
          <div className="mb-6 md:mb-0 text-center md:text-left">
            <Link href={'/'} className="text-2xl font-bold w-full flex justify-center">
              <Image src={NaderShop} width={150} height={120} priority alt="NaderShop"/>
              </Link>
            <p className="text-gray-400 mt-2">
              Your one-stop shop for everything trendy!
            </p>
          </div>

          {/* Navigation Links */}
          <div className="flex flex-col md:flex-row md:space-x-10 text-center md:text-left">
            <div>
              <h4 className="font-semibold text-lg mb-2">Quick Links</h4>
              <ul>
                <li>
                  <Link href="/" className="hover:text-blue-500">
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/product" className="hover:text-blue-500">
                    Products
                  </Link>
                </li>
                <li>
                  <Link href="/about" className="hover:text-blue-500">
                    About Us
                  </Link>
                </li>
                <li>
                  <Link href="/contact" className="hover:text-blue-500">
                    Contact Us
                  </Link>
                </li>
              </ul>
            </div>

            <div className="mt-6 md:mt-0">
              <h4 className="font-semibold text-lg mb-2">Customer Care</h4>
              <ul>
                <li>
                  <Link href="/faq" className="hover:text-blue-500">
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link href="/terms" className="hover:text-blue-500">
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link href="/privacy" className="hover:text-blue-500">
                    Privacy Policy
                  </Link>
                </li>
                <li>
                  <Link href="/returns" className="hover:text-blue-500">
                    Return Policy
                  </Link>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="my-6 border-t border-gray-700"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center">
          {/* Social Media Links */}
          <div className="mb-4 md:mb-0">
            <h4 className="font-semibold text-lg mb-2 text-center md:text-left">
              Follow Us
            </h4>
            <div className="flex space-x-4 justify-center md:justify-start">
              <Link href="https://facebook.com">
                <FaFacebook className="text-2xl hover:text-blue-500" />
              </Link>
              <Link href="https://twitter.com">
                <FaTwitter className="text-2xl hover:text-blue-400" />
              </Link>
              <Link href="https://instagram.com">
                <FaInstagram className="text-2xl hover:text-pink-500" />
              </Link>
              <Link href="https://linkedin.com">
                <FaLinkedin className="text-2xl hover:text-blue-600" />
              </Link>
            </div>
          </div>

          {/* Copyright */}
          <div className="text-gray-500 text-sm text-center md:text-right">
            &copy; {new Date().getFullYear()} NaderShop. All Rights Reserved.
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
