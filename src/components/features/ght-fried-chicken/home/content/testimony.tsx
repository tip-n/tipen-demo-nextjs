'use client'
import Image from "next/image";

import { Box, Stack } from "@mui/material"

import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";


import { testimonies } from "@static/ght-fried-chicken/testimony";

import styles from "@app/page.module.css"


export const Testimony = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 1
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 1
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 1
        },
        mobile: {
          breakpoint: { max: 464, min: 0 },
          items: 1
        }
    };
    return (
        <Box bgcolor={"white"} color={"ghtFriedChickenYellow.contrastText"}>
            <Stack p={18} spacing={6}>
                <Stack spacing={0} textAlign={"center"}>
                    <Box textAlign={"center"} fontSize={36}>
                        Kata mereka
                    </Box>
                </Stack>
                <Box px={40} display={"block"}>
                    <Carousel
                        containerClass={styles.carouselcontainer}
                        responsive={responsive}
                        draggable
                        infinite
                        swipeable
                        showDots
                    >
                        {testimonies.map(({name, attribution, role, testimony, src}) => (
                            <Stack
                                key={name}
                                direction={"row"}
                                px={20}
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
                                        borderRadius: "15px"
                                    }}
                                />
                                <Stack>
                                    <Box fontSize={20}>
                                        {name + " - " + attribution}
                                    </Box>
                                    <Box fontSize={16}>
                                        {role}
                                    </Box>
                                    <Box fontSize={14}>
                                        {testimony}
                                    </Box>
                                </Stack>
                            </Stack>
                        ))}
                    </Carousel>
                </Box>
            </Stack>
        </Box>
    )
}