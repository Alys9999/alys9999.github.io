
import Contacts from '@/app/contacts';
import RootLayout from '../../layout';


export default function PPPage() {
    return (
      <RootLayout>
         <Contacts>
         <div className='flex flex-col'>
            <h1>Puerta Abierta</h1>
            <p>a financial literacy education website</p>
            <p className='mt-10'>Puerta Abierta aims to bridge the gap in financial literacy by offering an educational platform that
               is both engaging and informative. Designed to be user-centric, the website serves as a comprehensive resource for individuals seeking
               to improve their financial knowledge.</p>
            <p className=' text-[32px] mt-8'>Requirement Iteration</p>
            <p>Initially, our sponsor envisioned the platform as a static website that merely displayed content. However, after reviewing our initial prototype, she
              pivoted towards a more dynamic approach.
            </p>
          </div>
        
        </Contacts>
      </RootLayout>
    )
  }