import '@styles/global.css';

export const metadata = {
  title: "Layout",
  description: "Layout description",
}

const RootLayout = ({ children }) => {
  return (
    <html lang='en'>
      <body className='overflow-y-hidden'>
        <main className='app'>
          {children}
        </main>
      </body>
    </html>
  )
}

export default RootLayout;