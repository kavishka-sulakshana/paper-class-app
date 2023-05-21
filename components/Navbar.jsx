import React from 'react'
import Link from 'next/link'

const Navbar = () => {
  return (
      <nav className='flex text-center px-9 py-4 bg-emerald-700 text-white'>

        <Link href="">
          <div class="px-9">
              Dashboard
          </div>
        </Link>

        <Link href="/classes">
          <div class="px-9">
              Classes
          </div>
        </Link>

          <Link href="/students">
          <div class="px-9">
              Students
          </div>
        </Link>

    </nav>
  )
}

export default Navbar