import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import LBOStats from './LBOStats';

function CommonStats() {

    const [data, setData] = useState([]);
    useEffect(() => {
        fetch('https://quotes-api-self.vercel.app/quote')
      .then(response => response.json())
      .then(data => {
        // Handle the retrieved quote
        setData(data);
        console.log(data);
      })
      .catch(error => {
        // Handle any errors
        console.error(error);
      });
    }
    , []);


  return (
    <>
    
        <div className="w-full pl-64 pr-12">
                
                <div className="grid grid-cols-2 py-10 pl-8">
                  <div>
                    <h2>Welcome Gabriela Kamei - LBO12345678</h2>
                  </div>
                  <div>
                    <p className="font-bold text-right">Quote of the day</p>
                    <p className="font-bold text-right">{data.quote}</p>
                  </div>
                </div>
                    
                <h2 className="pl-8 h-fit text-white bg-indigo-900 my-12">My Statistics</h2>
                <div className="grid grid-cols-4 w-full pr-12 gap-8 mx-8 justify-center items-center">
                  <div className="h-40 bg-blue-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">Paid 21-April-2025</h3>
                      <p>My Status</p>
                    </div>
    
                    <div className="h-40 bg-amber-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">Approved</h3>
                        <p>KYC Status</p>
                      </div>
    
                    <div className="h-40 bg-red-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">8</h3>
                      <p>My Downline Count</p>
                      <div className="grid grid-cols-2 gap-4 flex flex-col w-full justify-items-center text-center">
                        <div className="">
                        <h3 className="text-3xl text-white">8</h3>
                          <p>Total</p>
                          </div>
                        <div className="">
                          <h3 className="text-3xl text-white">8</h3>
                          <p>Total</p>
                        </div>
                      </div>
                    </div>
    
                    <div className="h-40 bg-green-700 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">0.00</h3>
                      <p>Income Received</p>
                    </div>
    
    
                </div>
    
                <div className="grid grid-cols-4 w-full pr-12 gap-8 mx-8 justify-center items-center mt-8">
                  <div className="h-40 bg-blue-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">-</h3>
                      <p>Big Boss Reward Status</p>
                    </div>
    
                    <div className="h-40 bg-amber-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">0.00</h3>
                        <p>E-Wallet Balance</p>
                      </div>
    
    
    
                    <div className="h-40 bg-green-700 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">0.00</h3>
                      <p>Income Received</p>
                    </div>
                    <div className="h-40 bg-red-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">8</h3>
                      <p>Multiple E-Wallet Balance</p>
                      <div className="grid grid-cols-2 gap-4 flex flex-col w-full justify-items-center text-center">
                        <div className="">
                        <h3 className="text-3xl text-white">8</h3>
                          <p>Credit Note Wallet</p>
                          </div>
                        <div className="">
                          <h3 className="text-3xl text-white">8</h3>
                          <p>Repurchase Wallet</p>
                        </div>
                      </div>
                    </div>
    
                </div>
    
    
                <div className="grid grid-cols-2 w-full pr-12 gap-8 mx-8 justify-center items-center mt-8">
                  <div className="h-40 bg-blue-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">21-April-2025</h3>
                      <p>Last Sign-In</p>
                    </div>
    
                    <div className="h-40 bg-amber-500 text-white justify-center items-center flex flex-col rounded-lg shadow-2xl">
                      <h3 className="text-3xl text-white">192.168.0.1</h3>
                        <p>Last Sign-In IP</p>
                      </div>
    
                </div>
              <LBOStats/>
              </div> {/* Container End */}
    </>
  );
}

export default CommonStats;