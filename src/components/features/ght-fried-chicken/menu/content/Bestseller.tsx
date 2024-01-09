'use client'
import Image from "next/image";

import { Box, Stack } from "@mui/material"

// import Swiper and modules styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { bangers } from "@app/ght-fried-chicken/fonts"

import { ResponsiveStack } from "@shared/ght-fried-chicken/stack/responsive";
import { ResponsiveBox } from "@shared/ght-fried-chicken/box/responsive";

import { bestSeller } from "@static/ght-fried-chicken/bestseller";

import { useIsMobileView } from '@hooks/device';

export const BestSeller = () => {
    const isMobile = useIsMobileView()
    return (
        <Box bgcolor={"white"} color={"ghtFriedChickenYellow.contrastText"}>
            <ResponsiveStack pt={22} pb={5} spacing={2}>
                <Stack spacing={0} textAlign={"center"}>
                    <Box fontSize={48} className={bangers.className}>
                        Best Seller
                    </Box>
                </Stack>
                <ResponsiveBox>
                    <swiper-container
                        navigation
                        pagination
                        slides-per-view={isMobile ? "1" : "5"}
                        loop
                    >
                        {bestSeller.map(({name, src, attribution}) => (
                            <swiper-slide key={name}>
                                <Stack
                                    key={name}
                                    paddingY={5}
                                    spacing={2}
                                    style={{
                                        pointerEvents: "none",
                                        userSelect: "none",
                                    }}
                                >
                                    <Image 
                                        style={{
                                            marginLeft: "auto",
                                            marginRight: "auto",
                                            objectFit: "contain",
                                        }}
                                        alt=""
                                        src={src}
                                        width={200}
                                        height={200}
                                    />
                                    <Stack>
                                        <Box
                                            fontSize={24}
                                            textAlign={"center"}
                                            className={bangers.className}
                                            >
                                            {name}
                                        </Box>
                                        <Box fontSize={14} textAlign={"center"}>
                                            {attribution}
                                        </Box>
                                    </Stack>
                                </Stack>
                            </swiper-slide>
                        ))}
                    </swiper-container>
                </ResponsiveBox>
            </ResponsiveStack>
        </Box>
    )
}