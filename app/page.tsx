'use client';
import Image from "next/image";
import { SetStateAction, useEffect, useState } from "react";
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
import LatestAchievers from "./components/LatestAchievers";
import Header from '@/app/components/Header'
import Footer from "./components/Footer";


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
  
  const [products, setProducts] = useState<Products[]>([]);
  const [pics, setPics] = useState<any[]>([]);


  useEffect(() => {
    

      const fetchData = async () => {
        try {
          const response = await axios.get('/api/products');
          console.log(response.data);
          setProducts(response.data)
        } catch (error) {
          console.error(error);
        }
      }
      fetchData();
  }, []);

  // useEffect(() => {
  //   axios.get("http://localhost:3001/v1/pics")
  //     .then((res: { data: SetStateAction<any[]>; }) => setProductCategory(res.data))
  //     .catch((err: any) => console.error(err));
  // }, []);



  return (
    <div className="grid items-center justify-items-center mt-8 gap-16 sm:p-0 font-[family-name:var(--font-lato)]" >
    <Header/>
        {/* <div className="p-0 m-0 min-w-full" >
          <img src="/slider2.jpeg" style={{minWidth:"100vw"}}/>
        </div> */}

<div className="w-full sm:w-full lg:w-full">

        <ImageSlider
          items={images}
          showThumbnails={false}
          showFullscreenButton={false}
          showPlayButton={false}
          showNav={true}
          autoPlay={true}
          />

</div>
        
        
        
        <div className="container">
          <div className="flex flex-row items-center justify-center text-center">
            <div className="basis-full">
              <h1 className="text-4xl font-bold mb-4">Welcome to Our Store</h1>
              <p className="text-lg text-gray-600 mb-8">
                Discover our wide range of products and services designed to meet your needs.
              </p>

              <div className="grid grid-cols-3">
            {products.map((product, index) => (
                <div key={index}>
                  <p>{product.Name}</p>
                  <p>{product.Price}</p>
                </div>
            ))}
            </div>

                {/* <SteamCards /> */}

            </div>
          </div>
        </div>



       
        <div className="container">

          <Whatis />
          <WhyChooseUs />
        </div>

        
          <MonthlyLeaders />
          <LatestAchievers />
          <Footer />

    </div>
  );
}
