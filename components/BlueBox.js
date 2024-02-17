import React, { useState } from 'react'
import Transaction from './Transaction'

/* eslint-disable @next/next/no-img-element */
const BlueBox = () => {
  const [boxdata, setBoxdata] = useState(false)
  const [auditclicked, setauditClicked] = useState(false)
  const [detailsclicked, setdetailsClicked] = useState(false)

  const auditClick = () => {
    setauditClicked((auditclicked) => !auditclicked)
  }
  const detailsClick = () => {
    setdetailsClicked((detailsclicked) => !detailsclicked)
  }
  const showData = () => {
    setBoxdata((boxdata) => !boxdata)
  }

  return (
    <>
      {/*blue box */}
      <div onClick={showData} className='cursor-pointer'>
        <p className='w-[150px] p-2 text-gray-400 text-center'>830750</p>
        <div className='w-[150px] h-[150px] bg-blue-700 p-2  space-y-2'>
          <p className='text-center text-sm'>~37 sat/vB</p>
          <p className='text-center text-sm text-yellow-400'>17 - 416 sat/vB</p>
          <p className='text-center font-bold'>1.50MB</p>
          <p className='text-center text-sm'>2323 transactions</p>
          <p className='text-center text-sm'>10 minutes ago</p>
        </div>
        {/* show this code onClick the bluebox */}
        {boxdata && (
          <>
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
            <hr className='w-full flex border-y-[1.5px]' />
          </>
        )}
        {/* show this code onClick the bluebox */}
      </div>
      {/*blue box */}
      {/* show below code onClick the bluebox */}
      {boxdata && (
        <>
          <div className='flex justify-between my-8'>
            <h1 className='font-bold text-3xl'>
              Block
              <span className='text-gray-400'> &lt; 830749 &gt; </span>
            </h1>
            <span onClick={showData} className='cursor-pointer'>
              X
            </span>
          </div>
          <div className='flex flex-wrap justify-between gap-6 bg-[#24273e]  p-5'>
            {/* onclick grid props */}
            <table
              className={`w-full grid grid-cols-1 md:flex gap-4 ${
                auditclicked ? 'flex-wrap' : 'flex-nowrap'
              }`}
            >
              <tbody
                className={`gap-x-4 w-full ${
                  auditclicked
                    ? 'grid grid-cols-1 md:grid-cols-2'
                    : 'grid grid-cols-1'
                }`}
              >
                <tr
                  className={` ${auditclicked ? 'bg-gray-900' : 'bg-gray-900'}`}
                >
                  <div className='flex justify-between  p-3'>
                    <p className='text-white'>Hash</p>
                    <p className='text-white flex items-center'>
                      000000...edc5e99
                      <span className='text-yellow-400 ml-2'>
                        <svg
                          className='w-6 h-6'
                          fill='none'
                          strokeWidth={1.5}
                          stroke='currentColor'
                          viewBox='0 0 24 24'
                          xmlns='http://www.w3.org/2000/svg'
                          aria-hidden='true'
                        >
                          <path
                            strokeLinecap='round'
                            strokeLinejoin='round'
                            d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z'
                          />
                        </svg>
                      </span>
                    </p>
                  </div>
                </tr>
                <tr
                  className={` ${
                    auditclicked ? 'bg-gray-900' : 'bg-[#24273e]'
                  }`}
                >
                  <div className='flex justify-between p-3'>
                    <p className='text-white'>Timestamp</p>
                    <p className='text-white'>
                      <span className='text-white'>2024-02-17 00:12:37</span>
                      <small className='text-gray-500'> (2 hours ago)</small>
                    </p>
                  </div>
                </tr>
                <tr className={` ${auditclicked ? '' : 'bg-gray-900'}`}>
                  <div className='flex justify-between  p-3'>
                    <p className='text-white'>Size</p>
                    <p className='text-white'>
                      1.71
                      <span className='text-gray-500'> MB</span>
                    </p>
                  </div>
                </tr>
                <tr className={` ${auditclicked ? '' : 'bg-[#24273e]'}`}>
                  <div className='flex justify-between p-3'>
                    <p className='text-white'>Weight</p>
                    <p className='text-white'>
                      <span className='text-white'>4</span>
                      <span className='text-gray-500'> MWU</span>
                    </p>
                  </div>
                </tr>
                <tr
                  className={` ${auditclicked ? 'bg-gray-900' : 'bg-gray-900'}`}
                >
                  <div className='flex justify-between  p-3'>
                    <p className='text-white'>Median fee</p>
                    <p className='text-white'>
                      ~15 <span className='text-gray-500'>sat/vB</span>
                      <span className='text-yellow-400'> $1.06</span>
                    </p>
                  </div>
                </tr>
                <tr
                  className={` ${
                    auditclicked ? 'bg-gray-900' : 'bg-[#24273e]'
                  }`}
                >
                  <div className='flex justify-between p-3'>
                    <p className='text-white'>Fee span</p>
                    <p className='text-yellow-400'>
                      13 - 18 <span className='text-gray-500'>sat/vB</span>
                    </p>
                  </div>
                </tr>
                <tr className={` ${auditclicked ? '' : 'bg-gray-900'}`}>
                  <div className='flex justify-between  p-3'>
                    <p className='text-white'>Total fees</p>
                    <p className='text-white'>
                      0.17 BTC <span className='text-yellow-400'>$8,700</span>
                    </p>
                  </div>
                </tr>
                <tr className={` ${auditclicked ? '' : 'bg-[#24273e]'}`}>
                  <div className='flex justify-between p-3'>
                    <p className='text-white'>Subsidy + fees</p>
                    <p className='text-white'>
                      0.307 BTC <span className='text-yellow-400'>$15,980</span>
                    </p>
                  </div>
                </tr>
                <tr
                  className={` ${auditclicked ? 'bg-gray-900' : 'bg-gray-900'}`}
                >
                  <div className='flex justify-between  p-3'>
                    <p className='text-white'>Miner</p>
                    <p className='text-white'>
                      <span className='bg-blue-900 p-2 rounded'>oxPol</span>
                    </p>
                  </div>
                </tr>
                <tr
                  className={` ${
                    auditclicked ? 'bg-gray-900' : 'bg-[#24273e]'
                  }`}
                >
                  {' '}
                  <div className='flex justify-between p-3'>
                    <div className='flex gap-x-2'>
                      <p className='text-white'>Health </p>
                      <svg
                        className='w-6 h-6'
                        dataSlot='icon'
                        fill='none'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
                        />
                      </svg>
                    </div>
                    <p className='text-white'>
                      <span className='bg-green-600 p-2 rounded'>99.81%</span>
                    </p>
                  </div>
                </tr>
              </tbody>
              <div
                className={`w-full grid items-center gap-4 ${
                  auditclicked ? 'grid-cols-1 md:grid-cols-2' : 'grid-cols-1'
                }`}
              >
                <div className='flex flex-col w-full gap-4 text-center'>
                  {auditclicked && (
                    <h1 className='font-bold text-3xl'>Expected Block</h1>
                  )}
                  <img
                    className='ml-auto w-full object-cover'
                    src='/chart-green.jpg'
                    alt='chart'
                  />
                  {auditclicked && (
                    <table>
                      <tbody>
                        <tr className='bg-gray-900'>
                          <div className='flex justify-between p-3'>
                            <p className='text-white'>Weight</p>
                            <p className='text-white'>
                              <span className='text-white'>4</span>
                              <span className='text-gray-500'> MWU</span>
                            </p>
                          </div>
                          <div className='flex justify-between p-3 bg-[#24273e]'>
                            <p className='text-white'>Transaction</p>
                            <p className='text-white'>
                              <span className='text-white'>2214</span>
                            </p>
                          </div>
                        </tr>
                        <tr className='bg-gray-900'>
                          <div className='flex justify-between  p-3'>
                            <p className='text-white'>Total fees</p>
                            <p className='text-white'>
                              0.17 BTC{' '}
                              <span className='text-yellow-400'>$8,700</span>
                            </p>
                          </div>
                        </tr>
                      </tbody>
                    </table>
                  )}
                </div>
                {auditclicked && (
                  <div className='flex flex-col w-full gap-4 text-center'>
                    <div className='flex items-center justify-center gap-x-2'>
                      <h1 className='font-bold text-3xl'>Actual Block</h1>
                      <svg
                        className='w-6 h-6'
                        fill='none'
                        strokeWidth={1.5}
                        stroke='currentColor'
                        viewBox='0 0 24 24'
                        xmlns='http://www.w3.org/2000/svg'
                        aria-hidden='true'
                      >
                        <path
                          strokeLinecap='round'
                          strokeLinejoin='round'
                          d='m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z'
                        />
                      </svg>
                    </div>
                    <img
                      className='ml-auto w-full object-cover'
                      src='/chart-green.jpg'
                      alt='chart'
                    />
                    <table>
                      <tbody>
                        <tr className='bg-gray-900'>
                          <div className='flex justify-between p-3'>
                            <p className='text-white'>Weight</p>
                            <p className='text-white'>
                              <span className='text-white'>4</span>
                              <span className='text-gray-500'> MWU</span>
                            </p>
                          </div>
                          <div className='flex justify-between p-3 bg-[#24273e]'>
                            <p className='text-white'>Transaction</p>
                            <p className='text-white'>
                              <span className='text-white'>2214</span>
                            </p>
                          </div>
                        </tr>
                        <tr className='bg-gray-900'>
                          <div className='flex justify-between  p-3'>
                            <p className='text-white'>Total fees</p>
                            <p className='text-white'>
                              0.17 BTC{' '}
                              <span className='text-yellow-400'>$8,700</span>
                            </p>
                          </div>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                )}
              </div>
            </table>
          </div>
        </>
      )}

      {/* details */}
      {boxdata && (
        <div>
          {detailsclicked && (
            <table className='w-full mt-4 border border-gray-800'>
              <tbody>
                <tr className='bg-gray-900'>
                  <div className='flex justify-between p-3'>
                    <p className='text-white'>Weight</p>
                    <p className='text-white'>
                      <span className='text-white'>4</span>
                      <span className='text-gray-500'> MWU</span>
                    </p>
                  </div>
                  <div className='flex justify-between p-3 bg-[#24273e]'>
                    <p className='text-white'>Transaction</p>
                    <p className='text-white'>
                      <span className='text-white'>2214</span>
                    </p>
                  </div>
                </tr>
                <tr className='bg-gray-900'>
                  <div className='flex justify-between  p-3'>
                    <p className='text-white'>Total fees</p>
                    <p className='text-white'>
                      0.17 BTC <span className='text-yellow-400'>$8,700</span>
                    </p>
                  </div>
                </tr>
              </tbody>
            </table>
          )}
          {/* buttons */}
          <div className='flex gap-4 justify-end my-8'>
            <button
              type='button'
              onClick={auditClick}
              className='focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border-gray-400 border text-white  hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700'
            >
              Audit
            </button>
            <button
              type='button'
              onClick={detailsClick}
              className=' focus:outline-none focus:ring-4 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 border-gray-400 border text-white  hover:bg-gray-700 hover:border-gray-600 focus:ring-gray-700'
            >
              Details
            </button>
          </div>
          <Transaction />
        </div>
      )}
    </>
  )
}

export default BlueBox
