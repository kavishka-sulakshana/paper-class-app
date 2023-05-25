'use client'


const ChooseStudent = ({ data, student, setStudent }) => {
    return (
        <section className='flex flex-col m-3 sm:mx-auto lg:w-4/6'>
            <div className='flex text-center table-width font-semibold bg-gray-300 py-3 rounded-tl-lg rounded-tr-lg'>
                <div className='basis-1/6'>
                    Barcode
                </div>
                <div className='basis-1/6'>
                    Name
                </div>
                <div className='basis-2/6'>
                    School
                </div>
                <div className='basis-1/6'>
                    A/L
                </div>
            </div>
            {(data.length === 0) && (<div className='flex text-center table-width font-semibold py-3 rounded-tl-lg rounded-tr-lg justify-center'>
                No Data
            </div>)}
            {data.length !== 0 && data.map((st) => (
                <div className={student.student_id === st._id ? 'flex py-2 text-center bg-green-200' : 'flex py-2 text-center odd:bg-gray-50'} key={st._id} onClick={() => setStudent({ ...student, student_id: st._id })}>
                    <div className='basis-1/6'>
                        {st.barcode}
                    </div>
                    <div className='basis-1/6'>
                        {st.name}
                    </div>
                    <div className='basis-2/6'>
                        {st.school}
                    </div>
                    <div className='basis-1/6'>
                        {st.year}
                    </div>
                </div>
            ))}

        </section>
    )
}

export default ChooseStudent