'use client'

import FormPaper from '@components/Forms/FormPaper.jsx'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = ({ params }) => {
    const router = useRouter();
    console.log(params);

    const [paper, setPaper] = useState({
        clz_id: params.id,
        name: '',
        town: 'all',
        total_marks: 100,
    });

    const createPaper = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/papers/new', {
                method: 'POST',
                body: JSON.stringify(paper),
            })

            if (response.ok) {
                router.push(`/admin_panel/inClass/${params.id}`);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='m-5 rounded-md  flex flex-col'>
            <div className='bg-slate-50 py-4 px-3 flex justify-between'>
                <h1 className='text-xl lg:text-2xl text-left font-bold text-blue-900'>
                    C R E A T E - P A P E R
                </h1>

            </div>
            <FormPaper
                paper={paper}
                setPaper={setPaper}
                submission={createPaper}
            />
        </div>
    )
}

export default page