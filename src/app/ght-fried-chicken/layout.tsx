'use client'
import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';

import '@app/globals.css'

import { Footer } from '@shared/ght-fried-chicken/footer/Footer'
import { Navbar } from '@shared/ght-fried-chicken/navbar/Navbar'

import { openSans } from '@app/ght-fried-chicken/fonts'

import { ghtFriedChickenTheme } from '@theme/ght-fried-chicken/theme'

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <ThemeProvider theme={ghtFriedChickenTheme}>
          <Navbar/>
          <main >
            <Box >
              {children}
              <Footer/>
            </Box>
          </main>
        </ThemeProvider>
      </body>
    </html>
  )
}
