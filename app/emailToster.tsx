'use client';
import { ToastContainer, toast } from 'react-toastify';
import Image from 'next/image';


export default function EmailToster(){
    const copyAndRemind = (Text: string) => {
        navigator.clipboard.writeText(Text);
        toast("Email address saved to the clipboard");
      }
    return(
        <div>
            <button onClick={()=>copyAndRemind("41v1rj@gmail.com")}><Image priority={true} src='/gmail.png'width={50} height={50} alt='gmail icon'></Image></button>
            <ToastContainer/>
        </div>

    )
}