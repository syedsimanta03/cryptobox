/* eslint-disable @next/next/no-img-element */
const BlueBox = () => {
  return (
    <>
      {/*blue box */}
      <div>
        <p className='w-[150px] p-2 text-gray-400 text-center'>830750</p>
        <div className='w-[150px] h-[150px] bg-blue-700 p-2  space-y-2'>
          <p className='text-center text-sm'>~37 sat/vB</p>
          <p className='text-center text-sm text-yellow-400'>17 - 416 sat/vB</p>
          <p className='text-center font-bold'>1.50MB</p>
          <p className='text-center text-sm'>2323 transactions</p>
          <p className='text-center text-sm'>10 minutes ago</p>
        </div>
        {/* show this code onClick the bluebox */}
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
        {/* show this code onClick the bluebox */}
      </div>
      {/*blue box */}
      {/* show below code onClick the bluebox */}
      <div className='flex justify-between my-8'>
        <h1 className='font-bold text-3xl'>
          Block
          <span className='text-gray-400'> &lt; 830749 &gt; </span>
        </h1>
        <span className='cross'>X</span>
      </div>
      <div className='flex md:flex-nowrap flex-wrap justify-between gap-6 bg-[#24273e]  p-5'>
        <div className='w-full'>
          <div className='flex justify-between bg-gray-900 p-3'>
            <p className='text-white'>Hash</p>
            <p className='text-white flex items-center'>
              000000...edc5e99
              <span className='text-yellow-400 ml-2'>
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
                    d='M9 12h3.75M9 15h3.75M9 18h3.75m3 .75H18a2.25 2.25 0 0 0 2.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 0 0-1.123-.08m-5.801 0c-.065.21-.1.433-.1.664 0 .414.336.75.75.75h4.5a.75.75 0 0 0 .75-.75 2.25 2.25 0 0 0-.1-.664m-5.8 0A2.251 2.251 0 0 1 13.5 2.25H15c1.012 0 1.867.668 2.15 1.586m-5.8 0c-.376.023-.75.05-1.124.08C9.095 4.01 8.25 4.973 8.25 6.108V8.25m0 0H4.875c-.621 0-1.125.504-1.125 1.125v11.25c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V9.375c0-.621-.504-1.125-1.125-1.125H8.25ZM6.75 12h.008v.008H6.75V12Zm0 3h.008v.008H6.75V15Zm0 3h.008v.008H6.75V18Z'
                  />
                </svg>
              </span>
            </p>
          </div>
          <div className='flex justify-between p-3'>
            <p className='text-white'>Timestamp</p>
            <p className='text-white'>
              <span className='text-white'>2024-02-17 00:12:37</span>
              <small className='text-gray-500'> (2 hours ago)</small>
            </p>
          </div>
          <div className='flex justify-between bg-gray-900 p-3'>
            <p className='text-white'>Size</p>
            <p className='text-white'>
              1.71
              <span className='text-gray-500'> MB</span>
            </p>
          </div>
          <div className='flex justify-between p-3'>
            <p className='text-white'>Weight</p>
            <p className='text-white'>
              <span className='text-white'>4</span>
              <span className='text-gray-500'> MWU</span>
            </p>
          </div>
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
            <p className='text-white'>Subsidy + fees</p>
            <p className='text-white'>
              0.307 BTC <span className='text-yellow-400'>$15,980</span>
            </p>
          </div>
          <div className='flex justify-between bg-gray-900 p-3'>
            <p className='text-white'>Miner</p>
            <p className='text-white'>
              <span className='bg-blue-900 p-2 rounded'>oxPol</span>
            </p>
          </div>
          <div className='flex justify-between p-3'>
            <div className="flex gap-x-2">
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
        </div>
        <div className='w-full flex items-center'>
          <img className='ml-auto w-full object-cover' src='/chart-green.jpg' alt='chart' />
        </div>
      </div>
    </>
  )
}

export default BlueBox
