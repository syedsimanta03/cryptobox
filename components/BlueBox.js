import React, { useState } from 'react'

/* eslint-disable @next/next/no-img-element */
const BlueBox = ({ blue, setBlue }) => {
  const handleClick = () => {
    setBlue((blue) => !blue)
  }
  return (
    <div className='relative'>
      {/*blue box */}
      <div onClick={handleClick} className='cursor-pointer'>
        <p className='w-[150px] p-2 text-gray-400 text-center'>830750</p>
        <div className='w-[150px] h-[150px] bg-blue-700 p-2  space-y-2'>
          <p className='text-center text-sm'>~37 sat/vB</p>
          <p className='text-center text-sm text-yellow-400'>17 - 416 sat/vB</p>
          <p className='text-center font-bold'>1.50MB</p>
          <p className='text-center text-sm'>2323 transactions</p>
          <p className='text-center text-sm'>10 minutes ago</p>
        </div>
        {/* show this code onClick the bluebox */}
        {blue && (
          <div className='absolute w-full'>
            <div className='w-[150px] h-auto'>
              <div
                style={{
                  width: '65px',
                  height: '50px',
                  clipPath: 'polygon(50% 0%, 0% 100%, 100% 100%)',
                  backgroundColor: 'white',
                  margin: '15px auto 0 auto',
                }}
              />
            </div>
            <hr className='w-[80vw] flex border-y-[1.5px]' />
          </div>
        )}
        {/* show this code onClick the bluebox */}
      </div>
      {/*blue box */}
      {/* show below code onClick the bluebox */}
    </div>
  )
}

export default BlueBox
