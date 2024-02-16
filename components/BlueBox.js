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
          <div className='flex justify-between p-3'>
            <p className='text-white'>Hash</p>
            <p className='text-white'>
              ~15 <span className='text-gray-500'>sat/vB</span>
              <span className='text-yellow-400'> $1.06</span>
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
        </div>
        <div className='w-full flex items-center'>
          <img className='ml-auto' src='/chart-green.jpg' alt='chart' />
        </div>
      </div>
    </>
  )
}

export default BlueBox
