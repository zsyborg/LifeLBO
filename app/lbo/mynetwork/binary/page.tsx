'use client';
import Image from "next/image";
import Sidebar from "@/app/components/NewSideNav";
import { useState, useEffect } from "react";
import LBOInfo from "@/app/components/lbo/LBOInfo";
import { Card, Button,  } from "flowbite-react";
import {Dialog} from 'primereact/dialog';
import { PiShoppingCartFill } from "react-icons/pi";
import {PrimeReactProvider} from 'primereact/api';
import { OrganizationChart } from 'primereact/organizationchart';

// import 'primereact/resources/themes/md-light-indigo/theme.css';
// import 'primereact/resources/themes/bootstrap4-light-blue/theme.css';
// import 'primereact/resources/themes/bootstrap4-light-purple/theme.css';
// import 'primereact/resources/themes/bootstrap4-dark-blue/theme.css';
// import 'primereact/resources/themes/bootstrap4-dark-purple/theme.css';
// import 'primereact/resources/themes/md-light-indigo/theme.css';
// import 'primereact/resources/themes/md-light-deeppurple/theme.css';
// import 'primereact/resources/themes/md-dark-indigo/theme.css';
// import 'primereact/resources/themes/md-dark-deeppurple/theme.css';
// import 'primereact/resources/themes/mdc-light-indigo/theme.css';
// import 'primereact/resources/themes/mdc-light-deeppurple/theme.css';
// import 'primereact/resources/themes/mdc-dark-indigo/theme.css';
// import 'primereact/resources/themes/mdc-dark-deeppurple/theme.css';
// import 'primereact/resources/themes/tailwind-light/theme.css';
import 'primereact/resources/themes/fluent-light/theme.css';
import { FaUserLarge } from "react-icons/fa6";
// import 'primereact/resources/themes/lara-light-blue/theme.css';
// import 'primereact/resources/themes/lara-light-indigo/theme.css';
// import 'primereact/resources/themes/lara-light-purple/theme.css';
// import 'primereact/resources/themes/lara-light-teal/theme.css';
// import 'primereact/resources/themes/lara-dark-blue/theme.css';
// import 'primereact/resources/themes/lara-dark-indigo/theme.css';
// import 'primereact/resources/themes/lara-dark-purple/theme.css';
// import 'primereact/resources/themes/lara-dark-teal/theme.css';
// import 'primereact/resources/themes/soho-light/theme.css';
// import 'primereact/resources/themes/soho-dark/theme.css';
// import 'primereact/resources/themes/viva-light/theme.css';
// import 'primereact/resources/themes/viva-dark/theme.css';
// import 'primereact/resources/themes/mira/theme.css';
// import 'primereact/resources/themes/nano/theme.css';
// import 'primereact/resources/themes/saga-blue/theme.css';
// import 'primereact/resources/themes/saga-green/theme.css';
// import 'primereact/resources/themes/saga-orange/theme.css';
// import 'primereact/resources/themes/saga-purple/theme.css';
// import 'primereact/resources/themes/vela-blue/theme.css';
// import 'primereact/resources/themes/vela-green/theme.css';
// import 'primereact/resources/themes/vela-orange/theme.css';
// import 'primereact/resources/themes/vela-purple/theme.css';
// import 'primereact/resources/themes/arya-blue/theme.css';
// import 'primereact/resources/themes/arya-green/theme.css';
// import 'primereact/resources/themes/arya-orange/theme.css';
// import 'primereact/resources/themes/arya-purple/theme.css';
         



export default function Login() {
    
    const [visible, setVisible] = useState(false)
    
    
    const [data] = useState([
        {
            expanded: true,
            type: 'person',
            data: {
                name: 'Amy Elsner',
                title: 'LBO772631',
                date: '21-April-2023'
            },
            children: [
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/annafali.png',
                        name: 'Anna Fali',
                        title: 'LBO123456',
                        date: '21-April-2023'

                    },
                    children: [
                        {
                            label: 'Sales'
                        },
                        {
                            label: 'Marketing'
                        }
                    ]
                },
                {
                    expanded: true,
                    type: 'person',
                    data: {
                        image: 'https://primefaces.org/cdn/primereact/images/avatar/stephenshaw.png',
                        name: 'Stephen Shaw',
                        title: 'LBO773487',
                        date: '21-April-2023'

                    },
                    children: [
                        {
                            label: 'Development'
                        },
                        {
                            label: 'UI/UX Design'
                        }
                    ]
                }
            ]
        }
    ]);

    
    const nodeTemplate = (node:any) => {
        if (node.type === 'person') {
            return (
                <div className="flex flex-column">
                    <div className="flex flex-col justify-center justify-items-center items-center">
                        <FaUserLarge className="text-amber-500"/>
                        <span className="font-bold mb-2 text-amber-500">{node.data.name}</span>
                        <span className='text-amber-500'>{node.data.title}</span>
                        <span className='text-amber-500'>{node.data.date}</span>
                    </div>
                </div>
            );
        }

        return node.label;
    };


  return (
      <>
      <div className="w-full items-center justify-items-center min-h-screen">
        <div className="flex min-h-screen">
          <div className="min-h-screen">
            <Sidebar />
          </div>

          <div className="w-full">

              <h3 className='fontlight w-full bg-indigo-900 text-white text-2xl py-4 pl-8'>Binary Tree</h3>
            
            <OrganizationChart value={data} nodeTemplate={nodeTemplate} />

        </div>
        </div>
      </div>
    </>
  );
}
