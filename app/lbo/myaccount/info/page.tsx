'use client';
import Image from "next/image";
import SideNavbar from "@/app/components/SideNav";
import { useState, useEffect } from "react";
import LBOInfo from "@/app/components/lbo/LBOInfo";
import Sidebar from "@/app/components/NewSideNav";
export default function Info() {

  


  return (
    <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
              <Sidebar/>
          </div>

            <LBOInfo/>
            
        </div>
      </div>
    </>
  );
}
