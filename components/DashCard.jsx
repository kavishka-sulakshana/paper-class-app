import React from 'react'

const DashCard = ({name, value}) => {
  return (
      <div className='w-64 mx-5 my-4'>
            <div className='bg-white shadow-md rounded-md p-4'>
                <div className='flex justify-between'>
                  <div className='text-sm text-gray-500'>{name}</div>
                    <div className='text-3xl font-bold'>{value}</div>
                </div>
            </div>
      </div>
  )
}

export default DashCard