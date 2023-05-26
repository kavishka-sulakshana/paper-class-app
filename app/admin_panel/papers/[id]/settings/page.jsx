'use client'

import { useEffect, useState } from "react";

const Page = ({ params }) => {

    return (
        <div className='m-5 rounded-md  flex flex-col'>
            <div className='bg-slate-50 py-4 px-3 flex justify-between'>
                <h1 className='text-xl lg:text-2xl text-left font-bold text-blue-900'>
                    P A P E R - S E T T I N G S
                </h1>

            </div>

            <div className='py-4 px-3 w-96 m-auto'>
                <ul role="list" className="divide-y divide-gray-100">
                    <li className="flex justify-between gap-x-6 py-2 px-5 my-5 bg-gray-100 rounded-sm">
                        <div className="flex gap-x-4 items-center">
                            <div className="min-w-0 flex-auto ">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Active</p>
                            </div>
                        </div>
                        <input type="checkbox" className="w-5" />
                    </li>
                    <li className="flex justify-between gap-x-6 py-2 px-5 my-5 bg-gray-100 rounded-sm">
                        <div className="flex gap-x-4 items-center">
                            <div className="min-w-0 flex-auto ">
                                <p className="text-sm font-semibold leading-6 text-gray-900">Completed</p>
                            </div>
                        </div>
                        <input type="checkbox" className="w-5" />
                    </li>
                </ul>
            </div>
        </div>
    )
}

export default Page