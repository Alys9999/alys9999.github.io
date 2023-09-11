

import RootLayout from './layout'
import WorkCard from './workcard'
import Contacts from './contacts'




export default function Home() {
  
  return (
    <RootLayout>
      <Contacts>
            <div className='grid justify-center'>
              <h1>Web Developer & UI/UX Designer</h1>
              <h1 className='flex text-8xl pb-5 justify-center'>Zhaoyang Lu</h1>
              <div className='flex py-3 justify-center'><h3>I graduated from&nbsp; </h3><h2> University of California, Irvine</h2></div>
              <div className='flex pb-3 justify-center'><h3>I major in&nbsp; </h3><h2>Informatics</h2></div>
            </div>
            <div id='workContent' className='flex flex-col'>
              <div className='flex flex-row flex-grow my-3 ml-5'>
                <h3>My&nbsp;</h3><h2>Work</h2>
              </div>
              <WorkCard iconadd='/PAlogo.png' alttext='Puerta Abierta' gifadd='/PAInteraction.gif' link='/works/PuertaAbierta'>a financial literacy education website. </WorkCard>
              <WorkCard iconadd='/PrelovedLogo.png' alttext='Preloved' gifadd='/PrelovedInteraction.gif' link='/works/preloved'>a second-hand product e-commerce app based on community sections.</WorkCard>
            </div>
      </Contacts>
           
    </RootLayout>
  )
}
