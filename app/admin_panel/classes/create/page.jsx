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
        <div>
            <FormClass
                clz={clz}
                setClz={setClz}
                submission={createClass}
            />
        </div>
    )
}

export default page