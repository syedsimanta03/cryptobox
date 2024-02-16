/* eslint-disable @next/next/no-img-element */


const GreenBox = () => {
  return (
    <>
      {/*green box */}
      <div>
        <div className='w-[150px] h-[150px] bg-green-700 p-2 space-y-2 animate-pulse'>
          <p className='text-center text-sm'>~17 sat/vB</p>
          <p className='text-center text-sm text-yellow-400'>14 - 216 sat/vB</p>
          <p className='text-center font-bold'>1.85MB</p>
          <p className='text-center text-sm'>2225 transactions</p>
          <p className='text-center text-sm'>In ~ 10 minutes</p>
        </div>
        {/* show this code onClick the greenbox */}
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
        {/* show this code onClick the greenbox */}
      </div>
      {/*green box */}
      {/* show below code onClick the greenbox */}
      <div className='flex justify-between my-8'>
        <h1 className='font-bold text-3xl'>Next Block</h1>
        <span className='cross'>X</span>
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
    </>
  )
}

export default GreenBox