'use client'

import Image from "next/image"
import Link from "next/link";
import Loading from "@components/loading.jsx";

const TownsList = ({ data }) => {
    return (
        <section className='flex flex-col m-3 sm:mx-auto lg:w-96'>
            <div className='flex text-center table-width font-semibold bg-gray-300 py-3 rounded-tl-lg rounded-tr-lg'>
                <div className='basis-2/3'>
                    Name
                </div>
                <div className='basis-1/3'>

                </div>
            </div>
            {(data.length === 0) && (<div className='flex text-center table-width font-semibold py-3 rounded-tl-lg rounded-tr-lg'>
                <Loading text="" width="50" height="50" />
            </div>)}
            {data.length > 0 && data.map((town) => (
                <div className='flex py-2 text-center odd:bg-gray-50' key={town._id}>
                    <div className='basis-2/3'>
                        {town.name}
                    </div>
                    <div className='basis-1/3  flex justify-evenly'>
                        <Link href={`/admin_panel/students/update/${town._id}`}>
                            <Image alt="edit" src='/assets/icons/black_edit.png' width={22} height={15} />
                        </Link>
                        <Link href={`/admin_panel/students/delete/${town._id}`}>
                            <Image alt="edit" src='/assets/icons/red_remove.png' width={22} height={15} />
                        </Link>
                    </div>
                </div>
            ))}

        </section>
    )
}

export default TownsList