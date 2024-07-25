import { Navbar } from '@/components/Navbar';
import '@/styles/global.css';

export const metadata = {
    title: "Promptly",
    description: "Discover and Share AI Prompts",
    icons: [{ rel: "icon", url: "/assets/images/logo.png" }],
}
function RootLayout( {children}) {
  return (
    <html lang="en">
      <body>
        <div className='main'>
              <div className='gradient'/>
              <main className='app'>
                <Navbar/>
                  {children}
              </main>
          </div>
      </body>
    </html>
  )
}

export default RootLayout;