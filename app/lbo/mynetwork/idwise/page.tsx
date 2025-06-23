'use client';
import Image from "next/image";
import SideNavbar from "@/app/components/SideNav";
import { useState, useEffect } from "react";
import LBOInfo from "@/app/components/lbo/LBOInfo";
import 'primereact/resources/themes/fluent-light/theme.css';
import { FaUserLarge } from "react-icons/fa6";
         



export default function IDWise() {
    


  return (
      <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
            <SideNavbar />
          </div>

          <div className="w-full pl-64">

              <h3 className='fontlight w-full bg-indigo-900 text-white text-2xl py-4 pl-8'>ID-Wise Downline</h3>
            

        </div>
        </div>
      </div>
    </>
  );
}
