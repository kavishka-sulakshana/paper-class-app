'use client'

import AddStudent from '@components/Forms/AddStudent.jsx'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

const page = ({ params }) => {
    const router = useRouter();

    const [student, setStudent] = useState({
        class_id: params.id,
        student_id: ''
    });

    const [barcode, setBarcode] = useState('');
    const [data, setData] = useState([]);

    const addStudentToClass = async (e, st) => {
        e.preventDefault();
        setStudent({ ...student, student_id: st });
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

    const changer = async (e) => {
        e.preventDefault();
        setData([]);
        try {
            const response = await fetch(`/api/student/find/barcode`, {
                method: 'POST',
                body: JSON.stringify({ barcode })
            });
            const data = await response.json();
            setData(data);
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
                barcode={barcode}
                setBarcode={setBarcode}
                data={data}
                submission={addStudentToClass}
                changer={changer}
            />
        </div>
    )
}

export default page