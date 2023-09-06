

import RootLayout from './layout'
import WorkCard from './workcard'
import Contacts from './contacts'




export default function Home() {
  
  return (
    <RootLayout>
      <Contacts>
            <div>
              <h3 className=' text-slate-950 text-5xl'>Web Developer & UI/UX Designer</h3>
              <h1 className='text-slate-950 text-8xl pb-5'>Zhaoyang Lu</h1>
              <div className='flex py-3'><p className=' text-slate-950 text-3xl'>I graduated from&nbsp; </p><p className=' bg-black rounded-lg px-2 text-3xl'> University of California, Irvine</p></div>
              <div className='flex pb-3'><p className=' text-slate-950 text-3xl'>I major in&nbsp; </p><p className=' bg-black rounded-lg px-2 text-3xl'>Informatics</p></div>
            </div>
            <div id='workContent' className='flex flex-col'>
              <div className='flex flex-row flex-grow my-3'>
                <p className='text-slate-950 text-3xl'>My&nbsp;</p><p className=' bg-black rounded-lg px-2 text-3xl'>Work</p>
              </div>
              <WorkCard iconadd='/PAlogo.png' alttext='Puerta Abierta' gifadd='/PAInteraction.gif' link='/works/PuertaAbierta'>a financial literacy education website. </WorkCard>
              <WorkCard iconadd='/PrelovedLogo.png' alttext='Preloved' gifadd='/PrelovedInteraction.gif' link='/works/preloved'>a second-hand product e-commerce app based on community sections.</WorkCard>
            </div>
      </Contacts>
           
    </RootLayout>
  )
}
