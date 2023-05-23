import Table1 from '@components/Table1.jsx'
import React from 'react'

const Students = () => {
  return (
    <div className='m-5 rounded-md  flex flex-col'>
      <div className='bg-slate-50 py-4 px-3 flex justify-between'>
        <h1 className='text-xl lg:text-2xl text-left font-bold text-blue-900'>
          S T U D E N T S
        </h1>

      </div>

      <div className='py-4 px-3'>
        <Table1 />
      </div>
    </div>
  )
}

export default Students