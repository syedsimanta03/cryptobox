/* eslint-disable @next/next/no-img-element */
import { Inter } from 'next/font/google'
import GreenBox from '@/components/GreenBox'
import BlueBox from '@/components/BlueBox'


const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main
      className={`flex justify-between gap-4 overflow-x-scroll  md:px-16 md:py-16 px-8 py-8 ${inter.className}`}
    >
      <GreenBox />
      {/* <GreenBox />
      <GreenBox />
      <BlueBox />
      <BlueBox />
      <BlueBox /> */}
    </main>
  )
}
