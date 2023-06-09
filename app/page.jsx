import DashCard from '@components/DashCard.jsx';
import Link from 'next/link';

const Home = () => {
  return (
    <div className="w-5/6 mx-auto pt-9 pb-4 px-3 flex flex-wrap bg-slate-50 justify-around">
      <Link href="/admin_panel/students" >Go to Admin Panel</Link>
    </div>
  )
}

export default Home