const Transactioncard = ({ arrow, arrowAmount }) => {
  return (
    <div className='space-y-2 mt-6'>
      <div className='flex md:flex-nowrap flex-wrap justify-between gap-6 bg-[#24273e]  p-3'>
        <a href='#' className='text-blue-300'>
          <small className='text-wrap'>1c7e7964306752393b7d3c386c5ae5...</small>
        </a>
        <p className='text-white'>2024-02-17 00:12</p>
      </div>
      <div className=' bg-[#24273e]  p-3'>
        <div className='flex md:flex-nowrap flex-wrap justify-between gap-6'>
          <div className='flex gap-x-2'>
            <svg
              className={`w-6 h-6 ${arrow}`}
              dataSlot='icon'
              fill='currentColor'
              viewBox='0 0 16 16'
              xmlns='http://www.w3.org/2000/svg'
              aria-hidden='true'
            >
              <path
                clipRule='evenodd'
                fillRule='evenodd'
                d='M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z'
              />
            </svg>
            <a href='#' className='text-blue-300'>
              <small>1JRhv7zRN9xCyTntYT5nuu...</small>
            </a>
          </div>
          <div className='flex justify-between'>
            <small className='text-white'>0.55555</small>
            <small className='text-white'>
              1.71
              <span className='text-gray-500'> BTC</span>
            </small>
          </div>
          <div className='flex flex-col justify-between gap-y-2'>
            <small className='text-white'>OP_RETURN X2</small>
            <small className='text-blue-300'>CyTntYT5n2</small>
            <small className='text-blue-300'>OP_CyTntYT5nX2</small>
            <small className='text-blue-300'>OP_CyTntYT5nX2</small>
          </div>
          <div className='flex flex-col gap-y-2'>
            <div className='flex items-center gap-x-2'>
              <svg
                className={`w-[15px] h-[15px] ${arrowAmount}`}
                dataSlot='icon'
                fill='currentColor'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z'
                />
              </svg>
              <div className='flex justify-between'>
                <small className='text-white'>0.00000000 </small>
                <small className='text-white'>
                  1.71
                  <span className='text-gray-500'> BTC</span>
                </small>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
              <svg
                className={`w-[15px] h-[15px] ${arrowAmount}`}
                dataSlot='icon'
                fill='currentColor'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z'
                />
              </svg>
              <div className='flex justify-between'>
                <small className='text-white'>0.00070000 </small>
                <small className='text-white'>
                  1.71
                  <span className='text-gray-500'> BTC</span>
                </small>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
              <svg
                className={`w-[15px] h-[15px] ${arrowAmount}`}
                dataSlot='icon'
                fill='currentColor'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z'
                />
              </svg>
              <div className='flex justify-between'>
                <small className='text-white'>0.00054000 </small>
                <small className='text-white'>
                  1.71
                  <span className='text-gray-500'> BTC</span>
                </small>
              </div>
            </div>
            <div className='flex items-center gap-x-2'>
              <svg
                className={`w-[15px] h-[15px] ${arrowAmount}`}
                dataSlot='icon'
                fill='currentColor'
                viewBox='0 0 16 16'
                xmlns='http://www.w3.org/2000/svg'
                aria-hidden='true'
              >
                <path
                  clipRule='evenodd'
                  fillRule='evenodd'
                  d='M15 8A7 7 0 1 0 1 8a7 7 0 0 0 14 0ZM4.75 7.25a.75.75 0 0 0 0 1.5h4.69L8.22 9.97a.75.75 0 1 0 1.06 1.06l2.5-2.5a.75.75 0 0 0 0-1.06l-2.5-2.5a.75.75 0 0 0-1.06 1.06l1.22 1.22H4.75Z'
                />
              </svg>
              <div className='flex justify-between'>
                <small className='text-white'>0.00040000 </small>
                <small className='text-white'>
                  1.71
                  <span className='text-gray-500'> BTC</span>
                </small>
              </div>
            </div>
          </div>
        </div>
        <div className='flex mt-4 font-bold justify-between items-center'>
          <div className='flex'>
            <small className='text-white'>
              2.03 <span className='text-gray-500'> sat/vB</span>
              <span>&nbsp;-&nbsp;701 </span>
            </small>
            <small className='text-gray-500'>&nbsp;sat</small>
            <small className='text-yellow-500 ml-4'>&nbsp;$0.36</small>
          </div>
          <span className='bg-blue-900 p-2 rounded'>
            <small className='text-white'>
              <small className='text-white'>0.00040000 </small>

              <span className='text-gray-500'> BTC</span>
            </small>
          </span>
        </div>
      </div>
    </div>
  )
}

export default Transactioncard
