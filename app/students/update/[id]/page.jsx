'use client'

import Form1 from '@components/Form1.jsx'
import { useRouter } from 'next/navigation';
import React, { useEffect } from 'react'

const page = ({ params }) => {
    const router = useRouter();
    const [student, setStudent] = React.useState({
        _id: '',
        name: '',
        barcode: '',
        email: '',
        phone: '',
        telegram_username: '',
        school: '',
        year: '',
    });

    useEffect(() => {
        const getStudent = async () => {
            try {
                const response = await fetch(`/api/student/${params.id}`);
                const data = await response.json();
                setStudent(data);
            } catch (error) {
                console.error(error);
            }
        }
        if (params.id) getStudent();
    }, []);

    const updateStudent = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch(`/api/student/update/${student._id}`, {
                method: 'PATCH',
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
            {<Form1
                student={student}
                setStudent={setStudent}
                submission={updateStudent}
            />}
        </div>
    )
}

export default page