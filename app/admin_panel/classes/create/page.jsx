'use client'

import FormClass from '@components/Forms/FormClass.jsx'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();

    const [clz, setClz] = useState({
        name: '',
        town: ''
    });

    const createClass = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/class/new', {
                method: 'POST',
                body: JSON.stringify(clz),
            })

            if (response.ok) {
                router.push('/admin_panel/classes');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='m-5 rounded-md  flex flex-col'>
            <div className='bg-slate-50 py-4 px-3 flex justify-between'>
                <h1 className='text-xl lg:text-2xl text-left font-bold text-blue-900'>
                    C R E A T E - C L A S S
                </h1>

            </div>
            <FormClass
                clz={clz}
                setClz={setClz}
                submission={createClass}
            />
        </div>
    )
}

export default page