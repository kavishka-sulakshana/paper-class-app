'use client'

import TownsList from "@components/tables/TownsList.jsx"
import { useEffect, useState } from "react";

const Classes = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('/api/towns');
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
          T O W N S
        </h1>

      </div>

      <div className='py-4 px-3'>
        <TownsList data={data} />
      </div>
    </div>
  )
}

export default Classes