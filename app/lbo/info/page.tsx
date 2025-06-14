'use client';
import Image from "next/image";
import SideNavbar from "@/app/components/SideNav";
import { useState, useEffect } from "react";
import CommonStats from "../components/lbo/CommonStats";
import LBOInfo from "@/app/components/lbo/LBOInfo";

export default function Login() {

  


  return (
    <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
            <SideNavbar />
          </div>

            <LBOInfo/>
            
        </div>
      </div>
    </>
  );
}
