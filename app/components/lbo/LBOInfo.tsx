import React, { useEffect, useState } from 'react';
import Image from 'next/image';

import { FileInput, HelperText, Label, TextInput, Dropdown, Select, Radio, Button, Card } from "flowbite-react";
import axios from 'axios';
import countries from '@/app/components/data/countries.json';
import { LuSave } from 'react-icons/lu';
import { FaPrint } from 'react-icons/fa6';
import { AiFillEdit } from 'react-icons/ai';
import {Dialog} from 'primereact/dialog';
import { MdAddCircle } from 'react-icons/md';


function LBOInfo() {

    const [day, setDay] = useState('');
    const [month, setMonth] = useState('');
    const [year, setYear] = useState('');
    const [countryCode, setCountryCode] = useState('');
    const [visible, setVisible] = useState(false)

    // const handleCountryChange = (e: { target: { value: React.SetStateAction<string>; }; }) => {
    //     setCountryCode(e.target.value);
    // };

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
    
    //   const handleDayChange = (e) => {
    //     setDay(e.target.value);
    //   };
    
    //   const handleMonthChange = (e) => {
    //     setMonth(e.target.value);
    //   };
    
    //   const handleYearChange = (e) => {
    //     setYear(e.target.value);
    //   };



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

                    setDay(day.toString());
                    setMonth(month.toString());
                    setYear(year.toString());
                } catch (error) {
                  console.error(error);
                }
              };
              fetchData();
          }, []);


          type FormDataState = {
            file: File | null;
            name: string;
        };

          const [formData, setFormData] = useState({
            file: null,
            name: '',
          });
          const [uploading, setUploading] = useState(false);
        
          const handleFileChange = (event:any) => {
            if (event.target.files && event.target.files[0]) {
                setFormData({ ...formData, file: event.target.files[0] });
            }
          };
        
          const handleInputChange = (event:any) => {
            setFormData({ ...formData, [event.target.name]: event.target.value });
          };
        
          const handleSubmit = async (event:any) => {
            event.preventDefault();
            setUploading(true);
        
            const data = new FormData();
            if (formData.file) {
                data.append('file', formData.file);
            }

            data.append('name', formData.name);
        
            try {
              const response = await fetch('http://localhost:3001/v1/profilepic', {
                method: 'POST',
                body: data,
              });
        
              if (response.ok) {
                console.log('Form submitted successfully!');
              } else {
                console.error('Error submitting form:', response.statusText);
              }
            } catch (error) {
              console.error('Error submitting form:', error);
            } finally {
              setUploading(false);
            }
          };

  return (
    <>
    
        <div className="w-full">

                    <h3 className='fontlight bg-indigo-900 text-white text-2xl py-4 pl-8'>Your Personal Details</h3>
                    <form onSubmit={handleSubmit}>
                <div className='grid grid-cols-4 gap-8 py-4 pl-8'>
                    <div>
                        <p>Profile Picture</p>
                        <img src="/logo.png"width={80} alt='Profile Picture' />
                        <div id="fileUpload" className="max-w-md">
                            <Label className="mb-2 block" htmlFor="file">
                                Upload file
                            </Label>
                            <FileInput id="file" onChange={handleFileChange} />
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
                                    <TextInput  type='email' placeholder='Email' onChange={handleInputChange}/>
                                    <br/>
                                    <div className='grid grid-cols-2'>

                                <Select className='w-40'>
                                    {countries.map((country) => (
                                        <option key={country.code} value={country.dial_code}>
                                            {country.dial_code} ({country.name})
                                        </option>
                                    ))}
                                </Select>
                                <TextInput type='number' className='w-48'/>
                                    </div>
                                    <br/>
                                    <p className='font-bold'>Withdrawal Options</p>
                                    <div className='grid grid-cols-2'>
                                        <div>
                                            <Radio name='auto' value="auto" />
                                            <Label htmlFor="withdrawal">Auto</Label>
                                        </div>
                                        <div>
                                            <Radio name='manual' value="manual" />
                                            <Label htmlFor="withdrawal">Manual</Label>
                                        </div>
                                    </div>
                            </div>


                        </div>

                    </div>
                        <div>
                            <p>Username: LBO12345</p><br/>
                            <p>LBO Number: LBO12345</p><br/>
                            <p>Full Name: Lifeis Speed Pvt. Ltd.</p><br/>
                            <p>Payment Type: E-Pin</p><br/>
                            <p>Joining/Upgrade Amount: E-Pin</p><br/>
                            <br/>
                            <h4 className='font-bold'>Nominee Details</h4>
                            <TextInput placeholder='Nominee Name'/>
                            <br/>
                            <p className='font-bold'>Nominee Date Of Birth</p>
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
                            <p className='font-bold'>Nominee Relation</p>
                            <Select>
                                <option value="Father">Father</option>
                                <option value="Mother">Mother</option>
                                <option value="Brother">Brother</option>
                                <option value="Sister">Sister</option>
                                <option value="Husband">Husband</option>
                                <option value="Wife">Wife</option>
                                <option value="Son">Son</option>
                                <option value="Father-In-Law">Father-In-Law</option>
                                <option value="Mother-In-Law">Mother-In-Law</option>
                                <option value="Brother-In-Law">Brother-In-Law</option>
                                <option value="Sister-In-Law">Sister-In-Law</option>
                                <option value="Nephew">Nephew</option>
                                <option value="Uncle">Uncle</option>
                                <option value="Aunt">Aunt</option>
                            </Select>
                            <div className='grid grid-cols-2 gap-8'>
                                <Button type='submit' disabled={uploading} pill color='green' className='text-white mt-8'><LuSave className='mr-2'/> {uploading ? 'Saving...' : 'Save'}</Button>
                                <Button pill color='blue' className='text-white mt-8'><FaPrint className='mr-2'/>Preview</Button>
                            </div>
                        </div>
                        <div>
                            <p>
                            Address: 101, Madina Apartments, Tere Gali, Near Jama Masjid, Andheri West., Mumbai, Mumbai, Maharashtra
                            </p><br/>
                            <p>Zip/Postal Code: 400061</p><br/>
                            <p>City: Mumbai</p><br/>
                            <p>State: Mumbai</p><br/><br/>
                            <p className='font-bold'>Change Password</p>
                            <TextInput type='password' placeholder='Old Password'/><br/>
                            <TextInput type='password' placeholder='New Password'/><br/>
                            <TextInput type='password' placeholder='Confirm Password'/>
                        </div>
                </div>
                        </form>


                <div>
                <div className='bg-indigo-900 text-white w-full grid grid-cols-2'>
                <h3 className='fontlight bg-indigo-900 text-white text-2xl py-4 pl-8'>Manage My Addresses</h3>
                        <div className='justify-end text-right'>
                        <div className='grid grid-cols-1 justify-end text-right h-full pr-4 items-center content-center relative'>
                            <p>
                                <MdAddCircle className='inline-block'/>Add Address
                            </p>
                        </div>
                        </div>
                </div>

                    </div>

                <div className='grid grid-cols-3 gap-8'>

                <Card className="  mt-8">
                    
                    <p className="font-normal text-green-700 ">
                        Zahid Shaikh<br/>
                        101, MAdina Apts, Versova<br/>
                        Mumbai, Maharashtra<br/>
                        Mobile: +919167021410<br/>
                        Email:zahid.shaikh@live.com<br/>
                    </p>
                    <p className="font-normal text-green-700 ">
                    </p>
                    <Button onClick={() => setVisible(true)}>
                        Edit
                        <AiFillEdit/>
                    </Button>
                    <Dialog className="bg-blue-800 text-white p-8" header="Header" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Dialog>
                    </Card>


                    <Card className=" mt-8">
                    
                    <p className="font-normal text-green-700 ">
                        Zahid Shaikh<br/>
                        101, MAdina Apts, Versova<br/>
                        Mumbai, Maharashtra<br/>
                        Mobile: +919167021410<br/>
                        Email:zahid.shaikh@live.com<br/>
                    </p>
                    <p className="font-normal text-green-700 ">
                    </p>
                    <Button onClick={() => setVisible(true)}>
                        Edit
                        <AiFillEdit/>
                    </Button>
                    <Dialog className="bg-blue-800 text-white p-8" header="Header" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Dialog>
                    </Card>



                    <Card className=" mt-8">
                    
                    <p className="font-normal text-green-700 ">
                        Zahid Shaikh<br/>
                        101, MAdina Apts, Versova<br/>
                        Mumbai, Maharashtra<br/>
                        Mobile: +919167021410<br/>
                        Email:zahid.shaikh@live.com<br/>
                    </p>
                    <p className="font-normal text-green-700 ">
                    </p>
                    <Button onClick={() => setVisible(true)}>
                        Edit
                        <AiFillEdit/>
                    </Button>
                    <Dialog className="bg-blue-800 text-white p-8" header="Header" visible={visible} maximizable style={{ width: '50vw' }} onHide={() => {if (!visible) return; setVisible(false); }}>
                        <p className="m-0">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                            Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo
                            consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                            Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
                        </p>
                    </Dialog>
                    </Card>
                    </div>

        </div>
          
    </>
  );
}

export default LBOInfo;