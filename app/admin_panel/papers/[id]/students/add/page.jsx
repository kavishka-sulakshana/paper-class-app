'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AddStudent from '@components/Forms/AddStudent.jsx'
import ChooseStudent from '@components/tables/ChooseStudent.jsx'

const page = ({ params }) => {
    const router = useRouter();

    const [student, setStudent] = useState({
        paper_id: params.id,
        student_id: ''
    });

    const [data, setData] = useState([]);

    const addStudentToPaper = async (e) => {
        e.preventDefault();
        if (student.student_id !== '') {
            try {
                const response = await fetch('/api/papers/addStudent', {
                    method: 'POST',
                    body: JSON.stringify(student),
                })

                if (response.ok) {
                    router.push(`/admin_panel/papers/${params.id}`);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    const changer = async (e) => {
        setData([]);
        setStudent({ ...student, student_id: '' });
        try {
            const response = await fetch(`/api/student/find/barcode`, {
                method: 'POST',
                body: JSON.stringify({ barcode: e.target.value })
            });
            if (response.ok) {
                const data = await response.json();
                setData(data);
            }
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className='m-5 rounded-md  flex flex-col'>
            <div className='bg-slate-50 py-4 px-3 flex justify-between'>
                <h1 className='text-xl lg:text-2xl text-left font-bold text-blue-900'>
                    A D D - S T U D E N T - T O - P A P E R
                </h1>

            </div>
            <AddStudent
                submission={addStudentToPaper}
                changer={changer}
            />
            <ChooseStudent
                data={data}
                student={student}
                setStudent={setStudent}
            />
        </div>
    )
}

export default page