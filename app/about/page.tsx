'use client';
import Image from "next/image";
import SideNavbar from "../components/SideNav";
import { useState, useEffect } from "react";
import CommonStats from "../components/lbo/CommonStats";

export default function Login() {

  


  return (
    <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
            <SideNavbar />
          </div>

            <CommonStats/>
            
        </div>
      </div>
    </>
  );
}
