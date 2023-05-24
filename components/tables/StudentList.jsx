'use client'

import Image from "next/image"
import Link from "next/link";
import Loading from "@components/loading.jsx";

const StudentList = ({ data }) => {
    return (
        <section className='flex flex-col m-3 sm:mx-auto lg:w-5/6'>
            <div className='flex text-center table-width font-semibold bg-gray-300 py-3 rounded-tl-lg rounded-tr-lg'>
                <div className='basis-1/6'>
                    Barcode
                </div>
                <div className='basis-1/6'>
                    Name
                </div>
                <div className='basis-2/6'>
                    School
                </div>
                <div className='basis-1/6'>
                    A/L
                </div>
                <div className='basis-1/6'>

                </div>
            </div>
            {(data.length === 0) && (<div className='flex text-center table-width font-semibold py-3 rounded-tl-lg rounded-tr-lg'>
                <Loading text="" width="50" height="50" />
            </div>)}
            {data.map((student) => (
                <div className='flex py-2 text-center odd:bg-gray-50' key={student._id}>
                    <div className='basis-1/6'>
                        {student.barcode}
                    </div>
                    <div className='basis-1/6'>
                        {student.name}
                    </div>
                    <div className='basis-2/6'>
                        {student.school}
                    </div>
                    <div className='basis-1/6'>
                        {student.year}
                    </div>
                    <div className='basis-1/6  flex justify-evenly'>
                        <Image alt="eye" src='/assets/icons/black_eye.png' width={22} height={15} />
                    </div>
                </div>
            ))}

        </section>
    )
}

export default StudentList