/* eslint-disable @next/next/no-img-element */
import { Inter } from 'next/font/google'
import GreenBox from '@/components/greenBox'
import BlueBox from '@/components/BlueBox'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={` p-24 ${inter.className}`}>
      {/*  <GreenBox /> */}
      <BlueBox />
    </main>
  )
}
