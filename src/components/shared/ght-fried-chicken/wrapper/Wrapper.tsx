import { ReactNode } from 'react'
import { SwiperWrapper } from '@shared/ght-fried-chicken/wrapper/Swiper'
import { ThemeWrapper } from '@shared/ght-fried-chicken/wrapper/Theme'

interface WrapperProps {
    children: ReactNode
}
export const Wrapper = ({children}: WrapperProps) => {
    return (
        <ThemeWrapper>
            <SwiperWrapper>
                {children}
            </SwiperWrapper>
        </ThemeWrapper>
    )
}