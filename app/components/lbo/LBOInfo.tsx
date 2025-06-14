import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { FileInput, HelperText, Label, TextInput, Dropdown, Select, Radio } from "flowbite-react";
import axios from 'axios';
import countries from '@/app/components/data/countries.json';


function LBOInfo() {

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [countryCode, setCountryCode] = useState('');

    const handleCountryChange = (e) => {
        setCountryCode(e.target.value);
    };

    const days = Array.from({length: 31}, (_, i) => i + 1)
    const months = [
        'January',
        'February',
        'March',
        'April',
        'May',
        'June',
        'July',
        'August',
        'September',
        'October',
        'November',
        'December',
      ];
      const years = Array.from({ length: 120 }, (_, i) => new Date().getFullYear() - i);
    
      const handleDayChange = (e) => {
        setDay(e.target.value);
      };
    
      const handleMonthChange = (e) => {
        setMonth(e.target.value);
      };
    
      const handleYearChange = (e) => {
        setYear(e.target.value);
      };



          useEffect(() => {
            const fetchData = async () => {
                try {
                    const response = await axios.get('http://localhost:3001/v1/scrap');
                    const dob = response.data[0].DateOfBirth;
                    const newdob = new Date(dob);
                    const day = newdob.getDate();
                    const month = newdob.getMonth() + 1; // Months are 0-based
                    const year = newdob.getFullYear();
                    console.log(year);

                    setDay(day);
                    setMonth(month);
                    setYear(year);
                } catch (error) {
                  console.error(error);
                }
              };
              fetchData();
          }, []);




  return (
    <>
    
        <div className="w-full pl-64 pr-12">
                
                <div className="grid grid-cols-1 py-4 pl-8">
                  <div>
                    <h2>LBO Information - LBO12345</h2>
                    <h3 className='fontlight text-2xl'>Sponsor Information</h3>
                    <h4>Sponsor ID - Anant Gupta (LBO590602S)</h4>
                  </div>
                </div>

                        <h3 className='fontlight bg-indigo-900 text-white text-2xl py-4 pl-8'>Your Personal Details</h3>
                <div className='grid grid-cols-4 gap-8 py-4 pl-8'>
                    
                    <div>
                        <p>Profile Picture</p>
                        <img src="/logo.png"width={80} alt='Profile Picture' />
                        <div id="fileUpload" className="max-w-md">
                            <Label className="mb-2 block" htmlFor="file">
                                Upload file
                            </Label>
                            <FileInput id="file" />
                            <HelperText className="mt-1">A profile picture is useful to confirm your are logged into your account</HelperText>
                            <HelperText>
                                * N.B.: Image size should not exceed than 4 MB and Image format should be .PNG, .JPG and .JPEG 
                            </HelperText>
                            <br/>
                            <div>
                                <p className='font-bold'>Date Of Birth</p>
                                <div className='grid grid-cols-3'>
                                    <Select value={day}>
                                        {days.map((m, i) =>(
                                            <option key={m} value={i + 1}>{m}</option>
                                        ))}
                                    </Select>
                                    <Select value={month}>
                                        {months.map((m, i) =>(
                                            <option key={m} value={i + 1}>{m}</option>
                                        ))}
                                    </Select>
                                    <Select value={year}>
                                        {years.map((m, i) =>(
                                            <option key={m} value={i + 1}>{m}</option>
                                        ))}
                                    </Select>
                                </div>
                                <br/>
                                <p className='font-bold'>Email</p>
                                    <TextInput type='email' placeholder='Email' value='it@lifeisspeed.com'/>
                                    <br/>
                                <Select>
                                    {countries.map((country) => (
                                        <option key={country.code} value={country.dial_code}>
                                            {country.dial_code} ({country.name})
                                        </option>
                                    ))}
                                </Select>
                            </div>


                        </div>

                    </div>
                        <div>
                            <p>Username: LBO12345</p><br/>
                            <p>LBO Number: LBO12345</p><br/>
                            <p>Full Name: Gabriela Kamei</p><br/>
                            <p>Payment Type: E-Pin</p><br/>
                            <p>Joining/Upgrade Amount: E-Pin</p><br/>
                        </div>
                        <div>
                            <p>
                            Address: 101, Madina Apartments, Tere Gali,, Near Jama Masjid, Andheri West., Mumbai, Mumbai, Maharashtra
                            </p><br/>
                            <p>Zip/Postal Code: 400061</p><br/>
                            <p>City: Mumbai</p><br/>
                            <p>State: Mumbai</p><br/>
                        </div>
                </div>
        </div>
          
    </>
  );
}

export default LBOInfo;