/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const GreenBox = ({ green, setGreen }) => {
  const handleClick = () => {
    setGreen((green) => !green)
  }
  return (
    <div onClick={handleClick} className='cursor-pointer'>
      {/*green box */}
      <div className='relative'>
        <div className='w-[150px] h-[150px] bg-green-700 p-2 space-y-2 animate-pulse'>
          <p className='text-center text-sm'>~17 sat/vB</p>
          <p className='text-center text-sm text-yellow-400'>14 - 216 sat/vB</p>
          <p className='text-center font-bold'>1.85MB</p>
          <p className='text-center text-sm'>2225 transactions</p>
          <p className='text-center text-sm'>In ~ 10 minutes</p>
        </div>
        {/* show this code onClick the bluebox */}
        {green && (
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
            
          </div>
        )}
      </div>
      {/*green box */}
    </div>
  )
}

export default GreenBox
