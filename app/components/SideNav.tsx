'use client'
import React, { useState } from 'react';
import { SlLogout, SlScreenDesktop } from "react-icons/sl";
import { FaBell, FaBurger, FaCreditCard, FaLink, FaNewspaper, FaTicket, FaUser, FaUserTie } from "react-icons/fa6";
import { LuMenu, LuNetwork, LuNewspaper, LuSpeech, LuWalletCards } from "react-icons/lu";
import { PiMoneyLight, PiNotification } from "react-icons/pi";
import { AiFillHome } from "react-icons/ai";

function SideNav() {

  const [open, setOpen] = useState(false);
  const [openSettings, setOpenSettings] = useState(false);

  const [isContentVisible, setIsContentVisible] = useState(false);
  const [isTextvisible, setIsTextVisible] = useState(false);

  const handleToggle = () => {
    setIsContentVisible(!isContentVisible);
  };

  const navText = () => {
    setIsTextVisible(!isTextvisible);
  }


  return (
    <aside id="default-sidebar" className="fixed top-0 left-0 z-40 w-fit h-screen" aria-label="Sidenav">
    <div className="overflow-y-auto py-5 px-3 h-full border-r border-gray-200 bg-blue-950">
      <ul className="space-y-2">
      <li className="p-2 absolute top-0 left-0 z-50">
        <LuMenu onClick={navText} className='text-white text-3xl text-center pl-2 pb-2'/>
        {/* <p onClick={navText} className='text-white'>Hide</p> */}
      </li>

        <li className="pt-2 items-center justify-items-center">
          <img src="/logo.png" className={isTextvisible ? 'hidden' : 'w-15 h-15 rounded-full inline'} alt='Lifeis Speed Logo'/>
          <p className={isTextvisible ? 'hidden' : 'text-white inline'}>Grabriela Kamei</p>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <SlScreenDesktop />
            <span className={isTextvisible ? 'hidden' : 'ml-3 navtext'}>Dashboard</span>
          </a>
        </li>
        <li>
          <button onClick={handleToggle} type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-pages" data-collapse-toggle="dropdown-pages">
            <FaUserTie/>
            <span className={isTextvisible ? 'hidden': 'flex-1 ml-3 text-left whitespace-nowrap'} >My Account</span>
            <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>

          <ul id="dropdown-pages" className={isContentVisible ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">LBO Info</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Change Password</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Upload KYC Document</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Orders</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Invoices</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Address</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Welcome Letter</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Receipt</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">ID Card</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Download Documents</a>
            </li>
          </ul>
        </li>
        <li>
          <button type="button" onClick={handleToggle} className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-sales" data-collapse-toggle="dropdown-sales">
            <LuNetwork/>
            <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>My Network</span>
            <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <ul id="dropdown-sales" className={isContentVisible ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Binary Tree</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">ID-Wise Downline</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Generation Tree</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">My Direct</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">My Downline</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Generation Downline</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Generation Tree Adjustment</a>
            </li>
          </ul>
        </li>
        <li>
          <a href="#" className="flex items-center p-2 text-base font-normal text-gray-900 rounded-lg dark:text-white hover:bg-gray-100 dark:hover:bg-gray-700 group">
            <PiMoneyLight/>
            <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 whitespace-nowrap'}>My Commision</span>
            
            <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>

          </a>
        </li>
        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">

            <FaNewspaper/>

            <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>Testimonial Transaction</span>
            
            <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <ul id="dropdown-authentication" className={isContentVisible ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign In</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sign Up</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Forgot Password</a>
            </li>
          </ul>
        </li>





        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">

            <FaCreditCard/>

            <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>E-Wallet</span>
            
            <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <ul id="dropdown-authentication" className={isContentVisible ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Add Money Request</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Add Money Request Report</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Fund Transfer</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Withdraw Amount</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Account Statement</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Change Password</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Account Statement (Credit Note)</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Self Fund Transfer</a>
            </li>
          </ul>
        </li>





        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">

            <FaCreditCard/>

            <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>E-Pin</span>
            
            <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <ul id="dropdown-authentication" className={isContentVisible ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Check E-Pin</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">E-Pin Place Order</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">E-Pin Order Details</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">E-Pin Transfer</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">E-Pin Report</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Change Password</a>
            </li>
          </ul>
        </li>




        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">

            <LuSpeech/>

            <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>Communication Centre</span>
            
            <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <ul id="dropdown-authentication" className={isContentVisible ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Compose</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Inbox</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Sent</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Folders</a>
            </li>
          </ul>
        </li>




        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">

            <FaTicket/>

            <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>Tickets</span>
            
            <svg aria-hidden="true" className={isTextvisible ? 'hidden' : 'w-6 h-6'} fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
          </button>
          <ul id="dropdown-authentication" className={isContentVisible ? 'fadeIn dropdownpages' : 'hidden py-2 space-y-2'}>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">Add New Ticket</a>
            </li>
            <li>
              <a href="#" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700">My Tickets</a>
            </li>
          </ul>
        </li>


        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">

            <LuNewspaper/>

            
            <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>News</span>

            </button>
            </li>

        <li>
          <button type="button" className="flex items-center p-2 w-full text-base font-normal text-gray-900 rounded-lg transition duration-75 group hover:bg-gray-100 dark:text-white dark:hover:bg-gray-700" aria-controls="dropdown-authentication" data-collapse-toggle="dropdown-authentication">

            <AiFillHome/>

            <span className={isTextvisible ? 'hidden' : 'flex-1 ml-3 text-left whitespace-nowrap'}>Go to Website</span>

            </button>
            </li>

            <li>
              <ul className='extranavs flex content-evenly place-content-evenly'>
                <li>
                <a href="#" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 hover:text-gray-900 dark:hover:text-white hover:bg-gray-100 dark:hover:bg-gray-600">
                  <FaUser/>
                </a>
                </li>
                <li>
                <a href="#" data-tooltip-target="tooltip-settings" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <FaBell/>
                </a>
                </li>
                <li>
                <a href="#" data-tooltip-target="tooltip-settings" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <SlLogout/>
                </a>
                </li>
                <li>
                <a href="#" data-tooltip-target="tooltip-settings" className="inline-flex justify-center p-2 text-gray-500 rounded cursor-pointer dark:text-gray-400 dark:hover:text-white hover:text-gray-900 hover:bg-gray-100 dark:hover:bg-gray-600">
                  <FaLink/>
                </a>
                </li>
              </ul>
            </li>


      </ul>


      
    </div>
      
     

     

 
      
     {/* <div className="absolute bottom-0 left-0 justify-center p-4 space-x-4 w-full lg:flex bg-white dark:bg-gray-800 z-20 border-r border-gray-200 dark:border-gray-700">
    </div> */}
  </aside>
  );
}

export default SideNav;