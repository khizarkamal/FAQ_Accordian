import Image from 'next/image';
import Accordian from '@/components/Accordian';

export default function Home() {
  return (
    <main>
        <div className='h-full'>
          <div className="h-[30vh] sm:h-[40vh]">
            <Image src="/assets/background-pattern-desktop.svg"
              alt="Desktop Background"
              width={100}
              height={100}
              priority
              style={{width:"100%", height:"100%", objectFit:'cover', objectPosition:'center'}}
              >
               </Image>
          </div>
          <div className=" bg-white mx-auto max-w-[90vw] mt-4 p-4 shadow-lg rounded-md -translate-y-28 sm:max-w-[30rem] md:-translate-y-34 sm:-translate-y-24">
            <div className='flex items-center justify-start gap-3'>
              <div className='w-[1.5rem] h-[1.5rem'>
                <Image src="/assets/icon-star.svg"
                  alt="Star Icon" 
                  width={0} 
                  height={0}
                  style={{width:"100%", height:'100%'}} 
                  priority
                  ></Image>
              </div>
              <h1 className="text-3xl font-extrabold">FAQs</h1>
            </div>
            <div className='my-4'>
              <Accordian></Accordian>
            </div>
          </div>
        </div>
    </main>
  )
}
