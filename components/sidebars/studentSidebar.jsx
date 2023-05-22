import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

const studentSidebar = () => {
  return (
    <nav className="w-56 flex flex-col pt-6 px-3 bg-blue-800 overflow-y-hidden" style={{ height: "100vh" }}>
      <div className='text-center rounded py-2 my-1 hover:bg-blue-600 cursor-pointer text-white flex items-center justify-center'>
        <Image
          className='mr-3'
          src='/assets/icons/nav_left.png'
          width={28}
          height={28}
          alt='nav left'
        ></Image>
      </div>

      {/* space  */}
      <div className='py-2 my-1 flex items-center justify-center'></div>

      <Link href='/students'>
        <div className='text-center rounded py-2 my-1 hover:bg-blue-700 cursor-pointer text-white flex items-center justify-center'>
          <Image
            className='mr-3'
            src='/assets/icons/students.png'
            width={28}
            height={28}
            alt='students icon'

          ></Image>
          All Students
        </div>
      </Link>

      <Link href='/students/add'>
        <div className='text-center rounded py-2 my-1 hover:bg-blue-700 cursor-pointer text-white flex items-center justify-center'>
          <Image
            className='mr-3'
            src='/assets/icons/add.png'
            width={28}
            height={28}
            alt='add student'
          ></Image>
          Add Student
        </div>
      </Link>

      <div className='text-center rounded py-2 my-1 hover:bg-blue-700 cursor-pointer text-white flex items-center justify-center'>
        <Image
          className='mr-3'
          src='/assets/icons/remove.png'
          width={28}
          height={28}
          alt='remove student'
        ></Image>
        Restrictions
      </div>

    </nav>
  )
}

export default studentSidebar