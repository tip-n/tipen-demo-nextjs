'use client'

import { ReactNode, useState, useEffect } from 'react'

import { register } from 'swiper/element/bundle'

interface SwipperWrapperProps {
    children: ReactNode
}

export const SwiperWrapper = ({children}: SwipperWrapperProps) => {
    const [isSwiperInit, setSwiperInit] = useState(false)
    useEffect(() => {
        register()
        setSwiperInit(true)
    }, [])
    if (!isSwiperInit) {
        return <></>
    }
    return <>{children}</>
}