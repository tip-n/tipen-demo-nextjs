'use client'
import { ReactNode } from 'react'
import { ThemeProvider } from '@mui/material/styles';
import { ghtFriedChickenTheme } from '@theme/ght-fried-chicken/theme';

interface ThemeWrapperProps {
    children: ReactNode
}

export const ThemeWrapper = ({children}: ThemeWrapperProps) => {
    return (
        <ThemeProvider theme={ghtFriedChickenTheme}>
            {children}
        </ThemeProvider>
    )
}