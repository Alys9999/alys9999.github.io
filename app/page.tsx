
import Image from 'next/image'
import RootLayout from './layout'
import Header from './header'
import WorkCard from './workcard'
import Link from 'next/link'
import EmailToster from './emailToster'
import { TextField } from '@mui/material'




export default function Home() {
  
  return (
    <RootLayout>
      <Header></Header>
      <div className=' h-32'></div>
      <div className='flex flex-col bg-[#dcdcdc] py-14 lg:mx-12 rounded-lg '>
          <div className='flex flex-col flex-grow divide-y px-3 divide-slate-900 min-w-fit break-words '>
            <div className='flex flex-col flex-grow space-y-3'>
              <div className='flex flex-row space-x-6 font-bold min-w-fit'>
                <Link href='https://github.com/Alys9999' target='_blank'><Image priority={true} src='/github.png'width={50} height={50} alt='github icon'></Image></Link>
                <Link href='https://www.linkedin.com/in/zhaoyang-lu-3a2814261/' target='_blank'><Image priority={true} src='/linkedin.png'width={50} height={50} alt='linkedin icon'></Image></Link>
                <EmailToster></EmailToster>
              </div>
              <h3 className=' text-slate-950 text-5xl'>Web Developer & UI/UX Designer</h3>
              <h1 className='text-slate-950 text-8xl pb-5'>Zhaoyang Lu</h1>
              <div className='flex py-3'><p className=' text-slate-950 text-3xl'>I graduated from&nbsp; </p><p className=' bg-black rounded-lg px-2 text-3xl'> University of California, Irvine</p></div>
              <div className='flex pb-3'><p className=' text-slate-950 text-3xl'>I major in&nbsp; </p><p className=' bg-black rounded-lg px-2 text-3xl'>Informatics</p></div>
            </div>
            <div id='workContent' className='flex flex-col'>
              <div className='flex flex-row flex-grow my-3'>
                <p className='text-slate-950 text-3xl'>My&nbsp;</p><p className=' bg-black rounded-lg px-2 text-3xl'>Work</p>
              </div>
                <WorkCard iconadd='/PrelovedLogo.png' alttext='Preloved' gifadd='/PrelovedInteraction.gif'>a second-hand product e-commerce app based on community sections.</WorkCard>
                <WorkCard iconadd='/PAlogo.png' alttext='Puerta Abierta' gifadd='/PAInteraction.gif'>a financial literacy education website. </WorkCard>
              </div>
          </div>
        </div>
    </RootLayout>
  )
}
