import React, { useEffect, useState } from 'react';
import Image from 'next/image';
// import quotes from "./quotes.json";
import { FaFacebook, FaInstagram, FaTwitter, FaLinkedin, FaThreads } from "react-icons/fa6";
import {faFacebook, faInstagram, faInstagramSquare, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faUser, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {AiOutlineShoppingCart, AiOutlineUser, AiFillFacebook, AiFillInstagram, AiFillYoutube} from "react-icons/ai";

function Footer() {

  return (
    <>
     
     <header className="w-full flex hdr xs:hidden @xs:hidden @3xs:hidden @2xs:hidden @sm:hidden items-center justify-between px-2 mt-9 sm:px-8">
        {/* Left: Menu Links */}
        <nav className="flex gap-4 sm:gap-8 navbar">
            <ul className='homemenu grid grid-cols-5 navbar-left'>
                <li>
                    <a href="/" className="font-medium hover:underline">Home</a>
                </li>
                <li>
                    <a href="/shop" className="font-medium hover:underline">About Us</a>
                </li>
                <li>
                    <a href="/shop" className="font-medium hover:underline">LBO</a>
                </li>
                <li className='dropdown'>
                    <a href="/" className="dropdown-toggle font-medium hover:underline">Shop</a>
                        <ul className="dropdown-menu">
                            <li>
                                <a href="#">Item 1</a>
                            </li>
                            <li>
                                <a href="#">Item 2</a>
                            </li>
                        </ul>
                </li>
                <li>
                    <a href="/lifeiseducation" className="font-medium hover:underline">LifeisEducation</a>
                </li>
            </ul>
          
        </nav>
        {/* Center: Logo */}
        <div className="absolute left-1/2 -translate-x-1/2">
          <Image
            src="/logo.png"
            alt="Logo"
            width={180}
            height={50}
            priority
          />
        </div>
        {/* Right: Cart & User Icons */}
        <div className="flex gap-4 items-center">
          <nav className="flex gap-4 sm:gap-8">
          <a href="/about" className="font-medium hover:underline">Contact</a>
          <a href="/about" className="font-medium hover:underline">Resources</a>
          <a href="/lifeiseducation" className="font-medium hover:underline">Blog</a>
        </nav>
        <form>

          <input
            type="text"
            placeholder="Search"
            className="border border-gray-300 rounded px-1 w-35 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </form>
        {/* <AiFillFacebook/>
        <AiFillInstagram/>
        <AiFillYoutube/> */}
          <a href="/cart" aria-label="Cart" className="hover:text-gray-500">
            {/* <i className="fa-solid fa-cart-shopping text-xl"></i> */}
            <AiOutlineShoppingCart className="text-xl" />
          </a>
          <a href="/login" aria-label="Login" className="hover:text-gray-500">
            {/* <i className="fa-solid fa-user text-xl"></i> */}
            <AiOutlineUser className="text-xl" />
          </a>
        </div>
      </header>
        
    </>
  );
}

export default Footer;