/* eslint-disable @next/next/no-img-element */
import { Inter } from 'next/font/google'
import GreenBox from '@/components/greenBox'
import BlueBox from '@/components/BlueBox'
import Transaction from '@/components/Transaction'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <main className={`md:px-16 md:py-16 px-8 py-8 ${inter.className}`}>
        <BlueBox />
        <Transaction />
    </main>
  )
}
