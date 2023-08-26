'use client';
import { useState } from 'react';
import React from 'react';
import Image from 'next/image';
import { Alert } from '@mui/material';


export default function EmailToster(){

    const [open, setOpen] = useState(false);

    const handleClose = () => {
    setOpen(false);
    };
    const copyAndRemind = (Text: string) => {
        navigator.clipboard.writeText(Text);
        setOpen(true);
    
      }
    return(
          <div>
            <button onClick={()=>copyAndRemind("41v1rj@gmail.com")}><Image priority={true} src='/gmail.png'width={50} height={50} alt='gmail icon'></Image></button>
            {open && (
              <div>
                <Alert severity="info">Email address copied</Alert>
                <button onClick={handleClose} className=' text-black'>Close</button>
              </div>
            )}
          </div>
    )
}









