import Image from 'next/image'
import Link from 'next/link'
import EmailToster from './emailToster'

export default function Contacts({children}:any){
    return(
        <div>
            <div className=' h-32'></div>
        <div className='flex flex-col bg-[#dcdcdc] py-14 lg:mx-12 rounded-lg '>
            <div className='flex flex-col flex-grow divide-y px-3 divide-slate-900 min-w-fit break-words '>
              <div className='flex flex-row space-x-6 font-bold min-w-fit'>
                <Link href='https://github.com/Alys9999' target='_blank'><Image priority={true} src='/github.png'width={50} height={50} alt='github icon'></Image></Link>
                <Link href='https://www.linkedin.com/in/zhaoyang-lu-3a2814261/' target='_blank'><Image priority={true} src='/linkedin.png'width={50} height={50} alt='linkedin icon'></Image></Link>
                <EmailToster></EmailToster>
              </div>
              <div className='divide-y divide-slate-900 '>
                {children}
              </div>
            </div>
        </div>
        </div>
    )
}