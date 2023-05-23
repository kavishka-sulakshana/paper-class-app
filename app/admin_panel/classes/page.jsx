'use client'

import ClassesList from "@components/tables/classesList.jsx"
import { useEffect, useState } from "react";

const Classes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/class');
        const data = await response.json();
        setData(data);
      }
      catch (error) {
        console.error(error);
      }
    }
    fetchData();
  }, []);

  return (
    <div className='m-5 rounded-md  flex flex-col'>
      <div className='bg-slate-50 py-4 px-3 flex justify-between'>
        <h1 className='text-xl lg:text-2xl text-left font-bold text-blue-900'>
          C L A S S E S
        </h1>

      </div>

      <div className='py-4 px-3'>
        <ClassesList data={data} />
      </div>
    </div>
  )
}

export default Classes