'use client'

import FormClass from '@components/Forms/FormClass';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'

const page = ({ params }) => {
    const router = useRouter();
    const [clz, setClz] = useState({
        _id: '',
        name: '',
        town: '',
    });

    useEffect(() => {
        const getClass = async () => {
            try {
                const response = await fetch(`/api/class/${params.id}`);
                const data = await response.json();
                setClz(data);
            } catch (error) {
                console.error(error);
            }
        }
        if (params.id) getClass();
    }, []);

    const updateClass = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/class/update/${clz._id}`, {
                method: 'PATCH',
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
            {<FormClass
                clz={clz}
                setClz={setClz}
                submission={updateClass}
            />}
        </div>
    )
}

export default page