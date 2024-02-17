import { Inter } from 'next/font/google'
import GreenBox from '@/components/GreenBox'
import BlueBox from '@/components/BlueBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`md:px-16 md:pt-16 px-8 pt-8 ${inter.className}`}>
        <div className='grid grid-flow-col-dense justify-center gap-2 items-end'>
          <GreenBox />
          <GreenBox />
          <GreenBox />
          {/*  <div class='flex justify-center'>
          <div class='inline-block h-[200px] min-h-[1em] w-0.5  self-stretch bg-neutral-100 opacity-80'></div>
        </div> */}
          <BlueBox />
          <BlueBox />
          <BlueBox />
        </div>
      </main>
      {/* <div className='max-auto flex justify-center w-full'>
        <p class='text-center inline'>&larr;</p>
        <p class='text-center inline'>&rarr;</p>
      </div> */}
    </>
  )
}
