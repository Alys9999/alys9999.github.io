
import Image from 'next/image'
import RootLayout from './layout'
import Header from './header'
import WorkCard from './workcard'


export default function Home() {
  return (
    <RootLayout>
      <Header></Header>
      <div className='flex flex-col bg-slate-100 py-3 mx-12 rounded-lg'>
        <div id='mainContent' className='flex flex-row'>
          <div className='flex flex-col px-3 space-y-6'>
            <Image priority={true} src='/github.png'width={50} height={50} alt='github icon'></Image>
            <Image priority={true} src='/linkedin.png'width={50} height={50} alt='linkedin icon'></Image>
            <Image priority={true} src='/gmail.png'width={50} height={50} alt='gmail icon'></Image>
          </div>

          <div className='flex flex-col mx-6 divide-y divide-slate-900'>
            <div className='flex flex-col flex-grow'>
              <h3 className=' text-slate-950'>Web Developer & UI/UX Designer</h3>
              <h1 className='text-slate-950'>Zhaoyang Lu</h1>
              <div className='flex flex-row'><p className=' text-slate-950'>I graduated from&nbsp; </p><p className=' bg-black rounded-lg px-2'> University of California, Irvine</p></div>
              <div className='flex flex-row'><p className=' text-slate-950'>I major in&nbsp; </p><p className=' bg-black rounded-lg px-2'>Informatics</p></div>
            </div>
            <div id='workContent' className='flex flex-col'>
              <div className='flex flex-row flex-grow my-3'>
                <p className='text-slate-950'>My&nbsp;</p><p className=' bg-black rounded-lg px-2'>Work</p></div>
                <WorkCard></WorkCard>
            </div>
          </div>
          
          <div className='flex flex-col mr-3'>
            <Image priority={true} src='/me.png'width={120} height={120} alt='me pic'></Image>
            <p className='text-slate-950 text-xs'>Can be called by: Alyssa<br></br>Pronoun: She/She++</p>
          </div>
        </div>
      </div>
    </RootLayout>
  )
}
