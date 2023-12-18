'use client'
import Image from "next/image";

import { Box, Stack } from "@mui/material"
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";

import { bangers } from "@app/ght-fried-chicken/fonts"

import { bestSeller } from "@static/ght-fried-chicken/bestseller";

import styles from "@app/page.module.css"

export const BestSeller = () => {
    const responsive = {
        superLargeDesktop: {
          // the naming can be any, depends on you.
          breakpoint: { max: 4000, min: 3000 },
          items: 5
        },
        desktop: {
          breakpoint: { max: 3000, min: 1024 },
          items: 5
        },
        tablet: {
          breakpoint: { max: 1024, min: 464 },
          items: 2
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
                        Menu yang bisa bikin kamu
                    </Box>
                    <Box fontSize={48} className={bangers.className}>
                        Gak habis thinking !
                    </Box>
                </Stack>
                <Box px={18}>
                    <Carousel
                        containerClass={styles.carouselcontainer}
                        responsive={responsive}
                        draggable
                        infinite
                        swipeable
                        showDots
                    >
                        {bestSeller.map(({name, src, attribution}) => (
                            <Stack
                                key={name}
                                height={"100%"}
                                style={{
                                    pointerEvents: "none",
                                    userSelect: "none",
                                }}
                            >
                                <Image 
                                    style={{
                                        marginLeft: "auto",
                                        marginRight: "auto",
                                        objectFit: "cover",
                                    }}
                                    alt=""
                                    src={src}
                                    width={200}
                                    height={200}
                                />
                                <Box textAlign={"center"}>
                                    {name}
                                </Box>
                                <Box fontSize={12} textAlign={"center"}>
                                    {attribution}
                                </Box>
                            </Stack>
                        ))}
                    </Carousel>
                </Box>
            </Stack>
        </Box>
    )
}