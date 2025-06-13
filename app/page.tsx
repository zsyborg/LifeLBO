'use client';
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
import {faFacebook, faInstagram, faInstagramSquare, faLinkedin, faYoutube} from "@fortawesome/free-brands-svg-icons";
import { faUser, faUserCircle } from "@fortawesome/free-regular-svg-icons";
import {AiOutlineShoppingCart, AiOutlineUser, AiFillFacebook, AiFillInstagram, AiFillYoutube} from "react-icons/ai";
import Slider from "./components/Slider";
import ParallaxCard from "./components/ParallaxCard";
import axios from 'axios';
import WhyChooseUs from './components/WhyChooseUs';
import Whatis from './components/Whatis';
import MonthlyLeaders from "./components/MonthlyLeaders";
import ImageSlider from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";
import SteamCards from "./components/SteamCards";
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Environment } from '@react-three/drei';

interface Products{
  name: string,
  price: number
}


const images = [
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001310.jpeg",
  },
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001312.jpeg",
  },
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001309.jpeg",
  },
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001311.jpeg",
  },
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001203.png",
  },
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001202.png",
  },
  {
    original: "https://lifeisspeed.in/content/images/thumbs/0001204.png",
  },
];



const pros = [
  {
    "id": 0,
    "Name": "Regular Half Package",
    "description": "Description Description Description Description Description Description Description Description Description Description ",
    "price": 4000,
    "image": null
  },
  {
    "id": 1,
    "Name": "Regular Half Package",
    "description": "Description Description Description Description Description Description Description Description Description Description ",
    "price": 4000,
    "image": null
  },
  {
    "id": 2,
    "Name": "Regular Half Package",
    "description": "Description Description Description Description Description Description Description Description Description Description ",
    "price": 4000,
    "image": null
  },
  {
    "id": 3,
    "Name": "Regular Half Package",
    "description": "Description Description Description Description Description Description Description Description Description Description ",
    "price": 4000,
    "image": null
  },
  {
    "id": 4,
    "Name": "Regular Half Package",
    "description": "Description Description Description Description Description Description Description Description Description Description ",
    "price": 4000,
    "image": null
  }
]


export default function Home() {
  
  const [data, setData] = useState<Products[]>([]);
  const [pics, setPics] = useState<any[]>([]);


  useEffect(() => {
    fetch('http://localhost:3001/v1/products')
      .then((res) => res.json())
      .then((data: Products[]) => setData(data));
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:3001/v1/pics")
  //     .then((res: { data: SetStateAction<any[]>; }) => setProductCategory(res.data))
  //     .catch((err: any) => console.error(err));
  // }, []);



  return (
    <div className="grid items-center justify-items-center xl:mt-8 gap-16 sm:p-0 font-[family-name:var(--font-lato)]">
      <header className="w-full flex items-center justify-between px-2 mt-9 sm:px-8 mb-8">
        {/* Left: Menu Links */}
        <nav className="flex gap-4 sm:gap-8">
          <a href="/" className="font-medium hover:underline">Home</a>
          <a href="/shop" className="font-medium hover:underline">About Us</a>
          <a href="/shop" className="font-medium hover:underline">LBO</a>
        <a href="/" className="font-medium hover:underline">Shop</a>
          <a href="/lifeiseducation" className="font-medium hover:underline">LifeisEducation</a>
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
        
        {/* <div className="p-0 m-0 min-w-full" >
          <img src="/slider2.jpeg" style={{minWidth:"100vw"}}/>
        </div> */}

<div className="w-full">

        <ImageSlider
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={true}
          autoPlay={true}
          autoPlayInterval={3000}
          />

</div>
        
        
        
        <div className="container">
          <div className="flex flex-row items-center justify-center text-center">
            <div className="basis-full">
              <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover our wide range of products and services designed to meet your needs.
              </p>
          <SteamCards />

            </div>
          </div>
        </div>



       
        <div className="container">

          <Whatis />
          <WhyChooseUs />
        </div>

        
          <MonthlyLeaders />



    </div>
  );
}
