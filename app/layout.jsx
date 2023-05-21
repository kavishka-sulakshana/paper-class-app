import '@styles/global.css';
import Navbar from '@components/Navbar';

export const metadata = {
  title: "Layout",
  description: "Layout description",
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className='overflow-y-hidden'>
        <div>
          <Navbar />
        </div>
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;