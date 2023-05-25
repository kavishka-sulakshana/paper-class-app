'use client'

import FormPaper from '@components/Forms/FormPaper.jsx';
import { useRouter } from 'next/navigation';
import { useState, useEffect } from 'react'

const page = ({ params }) => {
    const router = useRouter();
    const [paper, setPaper] = useState({
        _id: '',
        name: '',
        town: '',
    });

    useEffect(() => {
        const getpaper = async () => {
            try {
                const response = await fetch(`/api/papers/${params.paper}`);
                const data = await response.json();
                setPaper(data);
            } catch (error) {
                console.error(error);
            }
        }
        if (params.paper) getpaper();
    }, []);

    const updatePaper = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/papers/update/${paper._id}`, {
                method: 'PATCH',
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
        <div>
            {<FormPaper
                paper={paper}
                setPaper={setPaper}
                submission={updatePaper}
            />}
        </div>
    )
}

export default page