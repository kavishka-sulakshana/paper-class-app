import DashCard from '@components/DashCard.jsx';

const Home = () => {
  return (
    <div className="w-5/6 mx-auto pt-9 pb-4 px-3 flex flex-wrap bg-slate-50 justify-around">
        <DashCard name="Total Students" value="100" />
        <DashCard name="Classes" value="100" />
        <DashCard name="Instructors" value="20" />
    </div>
  )
}

export default Home