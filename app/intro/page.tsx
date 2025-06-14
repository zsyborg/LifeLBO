'use client';
import Image from "next/image";
import SideNavbar from "../components/SideNav";
import { useState, useEffect, useRef } from "react";
import gsap from "gsap";
export default function Login() {


    const logoRef = useRef(null);

    useEffect(() => {
        gsap.from(logoRef.current, {
          duration: 2,
          scale: 0,
          ease: 'back.out(1.7)',
        });
      }, []);
  return (
      
    <>
      <div className="w-full items-center justify-items-center justify-center min-h-screen">
        <div className="grid grid-cols-1 items-center justify-center justify-items-center min-h-screen place-items-center">
            
          <img src='/logo.png' width='400' className="resize" alt="logo" ref={logoRef} />
          <p className="w-2/4 text-justify">Lifeis Concept is the result of business and life experience of our founder. He has a spectacular life story that involves unrelenting rigorous work, the work that involves interaction with many sides of human activities. That gives the ability to know and understand the aspirations, needs and desires of people not only of our native country, India, but also in all places where our business requires us to be present. Quite naturally, being in the forefront of modern business, it is impossible to ignore all the rapid changes that global society is experiencing at this time, first of all technologic advances that are bound to successfully and significantly change the people's lives. </p>
          <h4 className="text-3xl">14 Years of Proven Success</h4>
          <h2 className="text-4xl mt-8">Enter</h2>
        </div>
      </div>
    </>
  );
}