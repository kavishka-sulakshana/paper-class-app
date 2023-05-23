import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
    <nav className='flex text-center px-9 py-3 bg-blue-900 text-white sticky top-0'>

      <Link href="/admin_panel" className='hover:text-sky-200'>
        <div className="px-9">
          Dashboard
        </div>
      </Link>

      <Link href="/admin_panel/classes" className='hover:text-sky-200'>
        <div className="px-9">
          Classes
        </div>
      </Link>

      <Link href="/admin_panel/students" className='hover:text-sky-200'>
        <div className="px-9">
          Students
        </div>
      </Link>

    </nav>
  )
}

export default Navbar