'use client'

import Image from "next/image"
import Link from "next/link";
import Loading from "@components/loading.jsx";

const PaperList = ({ data }) => {
    return (
        <section className='flex flex-col m-3 sm:mx-auto lg:w-5/6'>
            <div className='flex text-center table-width font-semibold bg-gray-300 py-3 rounded-tl-lg rounded-tr-lg'>
                <div className='basis-2/5'>
                    Name
                </div>
                <div className='basis-1/5'>
                    Town
                </div>
                <div className='basis-1/5'>
                    Total Marks
                </div>
                <div className='basis-1/5'>

                </div>
            </div>
            {(data.length === 0) && (<div className='flex text-center table-width font-semibold py-3 rounded-tl-lg rounded-tr-lg'>
                <Loading text="" width="50" height="50" />
            </div>)}
            {data.length > 0 && data.map((paper) => (
                <div className='flex py-2 text-center odd:bg-gray-50' key={paper._id}>
                    <div className='basis-2/5'>
                        {paper.name}
                    </div>
                    <div className='basis-1/5'>
                        {paper.town}
                    </div>
                    <div className='basis-1/5'>
                        {paper.total_marks}
                    </div>
                    <div className='basis-1/5  flex justify-evenly'>
                        <Link href={`/admin_panel/papers/update/${paper._id}`}>
                            <Image alt="edit" src='/assets/icons/black_edit.png' width={22} height={15} />
                        </Link>
                        <Image alt="eye" src='/assets/icons/black_eye.png' width={22} height={15} />
                    </div>
                </div>
            ))}

        </section>
    )
}

export default PaperList