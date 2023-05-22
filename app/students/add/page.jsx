'use client'

import Form1 from '@components/Form1.jsx'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = () => {
    const router = useRouter();

    const [student, setStudent] = useState({
        name: '',
        barcode: '',
        email: '',
        telegram_username: '',
        school: '',
        year: '',
    });

    const addStudent = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch('/api/student/new', {
                method: 'POST',
                body: JSON.stringify(student),
            })

            if (response.ok) {
                router.push('/students');
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div>
            <Form1
                student={student}
                setStudent={setStudent}
                submission={addStudent}
            />
        </div>
    )
}

export default page