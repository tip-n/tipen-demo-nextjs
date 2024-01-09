'use client'
import Image from "next/image";

import { Box, Stack } from "@mui/material"

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

import { bangers } from "@app/ght-fried-chicken/fonts"

import { ResponsiveStack } from "@shared/ght-fried-chicken/stack/responsive";
import { ResponsiveBox } from "@shared/ght-fried-chicken/box/responsive";

import { testimonies } from "@static/ght-fried-chicken/testimony";

import { useIsMobileView } from "@hooks/device";

export const Testimony = () => {
    const isMobile = useIsMobileView()
    return (
        <Box bgcolor={"white"} color={"ghtFriedChickenYellow.contrastText"}>
            <ResponsiveStack py={isMobile ? 10 : 18} spacing={isMobile ? 0 : 6}>
                <Stack spacing={0} textAlign={"center"}>
                    <Box
                        textAlign={"center"}
                        fontSize={isMobile ? 36 : 48}
                        className={bangers.className}
                    >
                        Kata mereka
                    </Box>
                </Stack>
                <ResponsiveBox display={"block"}>
                    <swiper-container
                        navigation
                        pagination
                        slides-per-view={"1"}
                        loop
                    >
                        {testimonies.map(({name, attribution, role, testimony, src}) => (
                            <swiper-slide key={name}>
                                <Stack
                                    key={name}
                                    textAlign={isMobile ? "center": "start"}
                                    direction={isMobile ? "column" : "row"}
                                    px={isMobile ? 7 : 40}
                                    py={5}
                                    height={"100%"}
                                    style={{
                                        pointerEvents: "none",
                                        userSelect: "none",
                                    }}
                                    spacing={2}
                                >
                                    <Image
                                        src={src}
                                        alt=""
                                        width={100}
                                        height={100}
                                        style={{
                                            objectFit: "cover",
                                            borderRadius: "15px",
                                            marginLeft: isMobile ? "auto": "",
                                            marginRight: isMobile ? "auto": "",
                                        }}
                                    />
                                    <Stack>
                                        <Box fontSize={isMobile ? 18: 24} fontWeight={500}>
                                            {name + " - " + attribution}
                                        </Box>
                                        <Box fontSize={isMobile ? 16 : 18}>
                                            {role}
                                        </Box>
                                        <Box fontSize={isMobile ? 14 : 16} fontStyle={"italic"}>
                                            {testimony}
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