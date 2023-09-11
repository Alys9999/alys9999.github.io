
import Contacts from '@/app/contacts';
import RootLayout from '../../layout';
import Image from 'next/image';


export default function PPPage() {
    return (
      <RootLayout>
         <Contacts>
         <div className='flex flex-col space-y-5'>
          <div>
            <h1>Puerta Abierta</h1>
              <p>a financial literacy education website</p>
              <p>Puerta Abierta aims to bridge the gap in financial literacy by offering an educational platform that
                is both engaging and informative. Designed to be user-centric, the website serves as a comprehensive resource for individuals seeking
                to improve their financial knowledge.</p>
              <div className='flex justify-center'>
              <Image src='/PA/landingPage.png' height={430} width={600} alt='PA landing page'></Image>
              </div>
              
          </div>
           <div>
            <h3>Requirement Iteration</h3>
              <p>Initially, our sponsor envisioned the platform as a static website that merely displayed content. However, after reviewing our initial prototype, she
                pivoted towards a more dynamic approach.
              </p>
              <div className='flex justify-center px-10 py-5'>
              <Image src='/PA/req.png' alt='PA requirements before' width={0} height={0} sizes="100vw" style={{ width: '100%', height: 'auto' }}></Image>
              </div>
           </div>
          
          </div>
          <div className='flex flex-col pt-5 space-y-5'>
            <h2 className=' max-w-fit'>Design Artifact</h2>
            <div>
              <h3>Userflow</h3>
              <p>
              To ensure a seamless user experience, we meticulously crafted a user flow that outlines the journey 
              from initial engagement to achieving specific financial learning outcomes. 
              This flow serves as a roadmap for both developers and stakeholders to understand how users interact with the platform.
              </p>
            </div>
           
           <div>
            <h3>Use Case Diagram Iteration</h3>
              <p>
              As our understanding of our sponsor's needs evolved, so did our use case diagram. 
              The diagram underwent multiple iterations to more accurately reflect the platform's expanded scope and functionalities. 
              These iterative changes have been instrumental in guiding the development team and clarifying the project's objectives, 
              ensuring that we are aligned with our sponsor's vision for the platform.
              </p>
           </div>

            <div>
              <h3>
                User Persona
              </h3>
              <p>
              We zeroed in on high school students with little to no financial background as our primary user persona. 
              The platform is designed to be intuitive and straightforward, 
              making it accessible for this demographic who may be new to the world of finance.
              </p>
            </div>

           <div>
            <h3>
                Wireframes
              </h3>
              <p>
              Through multiple iterations, we developed wireframes that strike a balance between aesthetic appeal and functionality. 
              These wireframes serve as the blueprint for the website's layout, 
              ensuring that users can easily navigate through the platform.
              </p>`
           </div>

            <div>
              <h3>Demo</h3>
              <p>

              </p>
            </div>
          </div>

        
        </Contacts>
      </RootLayout>
    )
  }