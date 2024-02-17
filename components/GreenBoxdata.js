/* eslint-disable @next/next/no-img-element */
import React, { useState } from 'react'

const GreenBoxdata = ({ green, setGreen }) => {
  const handleClick = () => {
    setGreen((green) => !green) // Toggle the value of showData
  }
  return (
    <>
      {green && (
        <div>
          <div className='flex justify-between mt-20 mb-8'>
            <h1 className='font-bold text-3xl'>Next Block</h1>
            <span onClick={handleClick} className='cursor-pointer'>
              X
            </span>
          </div>
          <div className='flex md:flex-nowrap flex-wrap justify-between gap-6 bg-[#24273e]  p-5'>
            <div className='w-full'>
              <div className='flex justify-between bg-gray-900 p-3'>
                <p className='text-white'>Median fee</p>
                <p className='text-white'>
                  ~15 <span className='text-gray-500'>sat/vB</span>
                  <span className='text-yellow-400'> $1.06</span>
                </p>
              </div>
              <div className='flex justify-between p-3'>
                <p className='text-white'>Fee span</p>
                <p className='text-yellow-400'>
                  13 - 18 <span className='text-gray-500'>sat/vB</span>
                </p>
              </div>
              <div className='flex justify-between bg-gray-900 p-3'>
                <p className='text-white'>Total fees</p>
                <p className='text-white'>
                  0.17 BTC <span className='text-yellow-400'>$8,700</span>
                </p>
              </div>
              <div className='flex justify-between p-3'>
                <p className='text-white'>Transactions </p>
                <p className='text-white'>2029</p>
              </div>
              <div className='flex justify-between bg-gray-900 p-3'>
                <p className='text-white'>Size</p>
                <p className='text-white'>
                  <span className='bg-blue-900 p-2 rounded'>1.9 MB</span>
                </p>
              </div>
              <img
                className='mt-6 w-full object-cover'
                src='/chart-red.jpg'
                alt='chart'
              />
            </div>
            <div className='w-full flex items-center'>
              <img
                className='ml-auto w-full object-cover'
                src='/chart-green.jpg'
                alt='chart'
              />
            </div>
          </div>
        </div>
      )}
    </>
  )
}

export default GreenBoxdata
