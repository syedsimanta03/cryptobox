import Transactioncard from "./Transactioncard"

const Transaction = () => {
  return (
    <>
     
      <div className='flex md:flex-nowrap flex-wrap justify-between my-8 gap-4'>
        <h1 className='font-bold text-3xl'>2,138 transactions</h1>
        <nav aria-label='Page navigation example'>
          <ul className='inline-flex -space-x-px text-base h-10'>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-4 h-10 ms-0 leading-tight border border-e-0 rounded-s-lg  bg-[#24273e] border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
              >
                Previous
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-4 h-10 leading-tight border  bg-[#24273e] border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
              >
                1
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-4 h-10 leading-tight border  bg-[#24273e] border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
              >
                2
              </a>
            </li>
            <li>
              <a
                href='#'
                aria-current='page'
                className='flex items-center justify-center px-4 h-10 text-blue-600 border bg-blue-50 hover:bg-blue-100 hover:text-blue-700 border-gray-700 bg-gray-700 text-white'
              >
                3
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-4 h-10 leading-tight border  bg-[#24273e] border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
              >
                4
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-4 h-10 leading-tight border  bg-[#24273e] border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
              >
                5
              </a>
            </li>
            <li>
              <a
                href='#'
                className='flex items-center justify-center px-4 h-10 leading-tight border rounded-e-lg  bg-[#24273e] border-gray-700 text-gray-400 hover:bg-gray-700 hover:text-white'
              >
                Next
              </a>
            </li>
          </ul>
        </nav>
      </div>
      <Transactioncard arrow='text-red-400' arrowAmount='text-green-400' />
      <Transactioncard arrow='text-gray-500' arrowAmount='text-gray-500' />
      <Transactioncard arrow='text-green-400' arrowAmount='text-green-400' />
    </>
  )
}

export default Transaction
