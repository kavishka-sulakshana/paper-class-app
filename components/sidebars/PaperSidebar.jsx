'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

const PaperSidebar = ({ params }) => {

    const [show, setShow] = useState(true);

    const toggleShow = () => {
        setShow(show => !show);
    }

    return (
        <nav className={((show) ? "w-56 " : "") + "transition duration-1000 flex flex-col pt-6 px-3 bg-blue-800 overflow-y-hidden"} style={{ height: "100vh", }}>
            <div className='text-center rounded py-2 my-1 hover:bg-blue-600 cursor-pointer text-white flex items-center justify-center'
                onClick={toggleShow}
            >
                <Image
                    className={((!show) ? "rotate-180 " : "") + 'mx-3 transition duration-1000'}
                    src='/assets/icons/nav_left.png'
                    width={28}
                    height={28}
                    alt='nav left'
                ></Image>
            </div>

            {/* space  */}
            <div className='py-2 my-1 flex items-center justify-center'></div>

            <Link href={`/admin_panel/papers/${params.id}`}>
                <div className='text-center rounded py-2 my-1 hover:bg-blue-700 cursor-pointer text-white flex items-center justify-center'>
                    <Image
                        className='mx-3'
                        src='/assets/icons/students.png'
                        width={28}
                        height={28}
                        alt='students icon'

                    ></Image>
                    {show && "All Students"}
                </div>
            </Link>

            <Link href={`/admin_panel/papers/${params.id}/students/add`}>
                <div className='text-center rounded py-2 my-1 hover:bg-blue-700 cursor-pointer text-white flex items-center justify-center'>
                    <Image
                        className='mx-3'
                        src='/assets/icons/add.png'
                        width={28}
                        height={28}
                        alt='add student'
                    ></Image>
                    {show && "Add Student"}
                </div>
            </Link>

            <Link href={`/admin_panel/papers/${params.id}`}>
                <div className='text-center rounded py-2 my-1 hover:bg-blue-700 cursor-pointer text-white flex items-center justify-center'>
                    <Image
                        className='mx-3'
                        src='/assets/icons/add.png'
                        width={28}
                        height={28}
                        alt='add student'
                    ></Image>
                    {show && "Settings"}
                </div>
            </Link>


        </nav>
    )

}

export default PaperSidebar