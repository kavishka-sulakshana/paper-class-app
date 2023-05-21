import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex text-center px-9 py-4 bg-blue-900 text-white'>

      <Link href="" className='hover:text-sky-200'>
        <div className="px-9">
          Dashboard
        </div>
      </Link>

      <Link href="/classes" className='hover:text-sky-200'>
        <div className="px-9">
          Classes
        </div>
      </Link>

      <Link href="/students" className='hover:text-sky-200'>
        <div className="px-9">
          Students
        </div>
      </Link>

    </nav>
  )
}

export default Navbar