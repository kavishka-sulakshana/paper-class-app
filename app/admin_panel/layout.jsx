import '@styles/global.css';
import Navbar from '@components/Navbar';

export const metadata = {
  title: "Layout",
  description: "Layout description",
}

const RootLayout = ({ children }) => {
  return (
    <main className='app'>
      <Navbar />
      {children}
    </main>
  )
}

export default RootLayout;