import { Box } from '@mui/material'
import { ThemeProvider } from '@mui/material/styles';

import { Footer } from '@shared/ght-fried-chicken/footer/Footer'
import { Navbar } from '@shared/ght-fried-chicken/navbar/Navbar'
import { ThemeWrapper } from '@shared/ght-fried-chicken/wrapper/Theme';
import { Wrapper } from '@shared/ght-fried-chicken/wrapper/Wrapper';

import { openSans } from '@app/ght-fried-chicken/fonts'

import '@app/globals.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {

  return (
    <html lang="en">
      <body className={openSans.className}>
        <Wrapper>
          <Navbar/>
          <main>
              <Box minHeight={"95dvh"}>
                {children}

              </Box>
            <Footer/>
          </main>
        </Wrapper>
      </body>
    </html>
  )
}
