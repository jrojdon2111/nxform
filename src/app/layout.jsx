import './globals.css'
import { Ubuntu } from 'next/font/google'
import { Toaster } from 'react-hot-toast';

const font = Ubuntu({ weight: "400", subsets: ['latin'] })

export const metadata = {
  title: 'Mi Formulario',
  description: 'Aplicación para formulario',
}
function RootLayout({ children }) {

  return (
    <html lang="es">
      <body className={`${font.className} bg-cyan-50`}>
        {children}

        <Toaster
          position="top-right"
          reverseOrder={false}
          toastOptions={{
            success: {
              style: {
                background: 'rgba(0, 255, 0, 0.1)',
              },
            },
            error: {
              style: {
                background: 'rgba(255, 0, 0, 0.1)',
              },
            },
          }} />
      </body>
    </html>
  )
}


export default RootLayout;