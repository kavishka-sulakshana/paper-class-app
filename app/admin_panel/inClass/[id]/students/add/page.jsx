'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import AddStudent from '@components/Forms/AddStudent.jsx'
import ChooseStudent from '@components/tables/ChooseStudent.jsx'

const page = ({ params }) => {
    const router = useRouter();

    const [student, setStudent] = useState({
        class_id: params.id,
        student_id: ''
    });

    const [data, setData] = useState([]);

    const addStudentToClass = async (e) => {
        e.preventDefault();
        if (student.student_id !== '') {
            try {
                const response = await fetch('/api/class/addStudent', {
                    method: 'POST',
                    body: JSON.stringify(student),
                })

                if (response.ok) {
                    router.push(`/admin_panel/inClass/${params.id}/students`);
                }
            } catch (error) {
                console.error(error);
            }
        }
    }

    const changer = async (e) => {
        // e.preventDefault();
        setData([]);
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
                    A D D - S T U D E N T - T O - C L A S S
                </h1>

            </div>
            <AddStudent
                submission={addStudentToClass}
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