'use client'

import FormTown from '@components/Forms/FormTown.jsx'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();

    const [town, setTown] = useState({
        name: '',
    });

    const addTown = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/class/newTown', {
                method: 'POST',
                body: JSON.stringify(town),
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
                    A D D - T O W N
                </h1>
            </div>
            <FormTown
                town={town}
                setTown={setTown}
                submission={addTown}
            />
        </div>
    )
}

export default page