'use client'

import Image from "next/image"
import Link from "next/link";
import Loading from "@components/loading.jsx";

const ClassesList = ({ data }) => {
    return (
        <section className='flex flex-col m-3 sm:mx-auto lg:w-5/6'>
            <div className='flex text-center table-width font-semibold bg-gray-300 py-3 rounded-tl-lg rounded-tr-lg'>
                <div className='basis-2/6'>
                    Name
                </div>
                <div className='basis-1/6'>
                    Town
                </div>
                <div className='basis-1/6'>
                    Students
                </div>
                <div className='basis-1/6'>
                    Papers
                </div>
                <div className='basis-1/6'>

                </div>
            </div>
            {(data.length === 0) && (<div className='flex text-center table-width font-semibold py-3 rounded-tl-lg rounded-tr-lg'>
                <Loading text="" width="50" height="50" />
            </div>)}
            {data.length > 0 && data.map((clz) => (
                <div className='flex py-2 text-center odd:bg-gray-50' key={clz._id}>
                    <div className='basis-2/6'>
                        {clz.name}
                    </div>
                    <div className='basis-1/6'>
                        {clz.town}
                    </div>
                    <div className='basis-1/6'>
                        {clz.students}
                    </div>
                    <div className='basis-1/6'>
                        {clz.papers}
                    </div>
                    <div className='basis-1/6  flex justify-evenly'>
                        <Link href={`/admin_panel/classes/update/${clz._id}`}>
                            <Image alt="edit" src='/assets/icons/black_edit.png' width={22} height={15} />
                        </Link>
                        <Link href={`/admin_panel/inClass/${clz._id}`}>
                            <Image alt="edit" src='/assets/icons/black_eye.png' width={22} height={15} />
                        </Link>
                    </div>
                </div>
            ))}

        </section>
    )
}

export default ClassesList