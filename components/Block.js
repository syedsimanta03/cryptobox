import { useState } from 'react'
import GreenBox from '@/components/GreenBox'
import BlueBox from '@/components/BlueBox'
import GreenBoxdata from '@/components/GreenBoxdata'
import BlueBoxdata from './BlueBoxdata'

const Block = () => {
  const [green, setGreen] = useState(false)
  const [blue, setBlue] = useState(false)

  const handleGreen = (newValue) => {
    setGreen(newValue)
  }
  const handleBlue = (newValue) => {
    setBlue(newValue)
  }

  return (
    <>
      <div className='grid grid-flow-col-dense justify-center gap-2 items-end'>
        <GreenBox key='1' index='1' green={green} setGreen={handleGreen} />
        <GreenBox key='2' index='2' green={green} setGreen={handleGreen} />
        <GreenBox key='3' index='3' green={green} setGreen={handleGreen} />
        <div class='flex justify-center mx-2'>
          <div class='inline-block h-[200px] min-h-[1em] w-0.5  self-stretch bg-neutral-100 opacity-80'></div>
        </div>
        <BlueBox blue={blue} setBlue={handleBlue} />
        <BlueBox blue={blue} setBlue={handleBlue} />
        <BlueBox blue={blue} setBlue={handleBlue} />
      </div>
      <div className='max-auto flex justify-center w-full'>
        <p class='text-center inline'>&larr;</p>
        <p class='text-center inline'>&rarr;</p>
      </div>
      {green && <hr className='w-full mt-10 flex border-y-[1.5px]' />}
      {blue && <hr className='w-full mt-10 flex border-y-[1.5px]' />}
      <GreenBoxdata green={green} setGreen={handleGreen} />
      <BlueBoxdata blue={blue} setBlue={handleBlue} />
    </>
  )
}

export default Block
