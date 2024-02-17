import Block from '@/components/Block'
import { Inter } from 'next/font/google'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
      <main className={`md:px-16 md:pt-16 px-8 pt-8 ${inter.className}`}>
        <Block />
      </main>
    </>
  )
}
