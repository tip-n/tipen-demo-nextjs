'use client'
import Link from "next/link";
import Image from "next/image";

import { Box, Stack } from "@mui/material"

import { ResponsiveStack } from "@shared/ght-fried-chicken/stack/responsive";

import { kemitraan } from "@static/ght-fried-chicken/kemitraan";

import { bangers } from "@app/ght-fried-chicken/fonts";

import { useIsMobileView } from "@hooks/device";

export const Price = () => {
    const isMobile = useIsMobileView()

    return (
        <Box bgcolor={"ghtFriedChickenRed.main"} color={"white"}>
            <ResponsiveStack spacing={5} pt={20} pb={10}>
                {kemitraan.map(({
                    name,
                    src,
                    price,
                    description,
                    attribution,
                    attributionurl,
                    benefit
                }) => (
                    <Stack
                        direction={isMobile ? "column" : "row"}
                        spacing={isMobile ? 2 : 4}
                        key={name}
                    >
                        <Stack spacing={1}>
                            <Box
                                position="relative"
                                width={isMobile ? "100%" : "400px"}
                                height={isMobile ? "300px" : "400px"}
                            >
                                <Image
                                    alt={""}
                                    src={src}
                                    fill
                                    style={{
                                        borderRadius: "15px",
                                        objectFit: "cover",
                                        marginLeft: isMobile ? "auto" : "",
                                        marginRight: isMobile ? "auto" : "",
                                    }}
                                />
                            </Box>
                            <Box fontSize={isMobile ? 12 : 14} textAlign={"center"}>
                                <Link href={attributionurl} target="_blank">
                                    {attribution}
                                </Link>
                            </Box>
                        </Stack>
                        <Stack my={"auto"} spacing={0.5}>
                            <Box
                                className={bangers.className}
                                fontSize={isMobile ? 36 : 48}
                                textAlign={isMobile ? "center": "start"}
                            >
                                {name}
                            </Box>
                            <Box
                                fontSize={isMobile ? 16 : 24}
                                textAlign={isMobile ? "center" : "start"}
                            >
                                {new Intl.NumberFormat(
                                    "id-ID",
                                    {style: "currency", currency: "IDR"}
                                ).format(price)}
                            </Box>
                            <Box fontSize={isMobile ? 14 : 20} fontStyle={"italic"}>
                                {description}
                            </Box>
                            <Stack fontSize={isMobile ? 14 : 18} spacing={0.5}>
                                <Box>Keuntungan : </Box>
                                {benefit.map((value) => (
                                    <Box key={value}>
                                        - {value}
                                    </Box>
                                ))}
                            </Stack>
                        </Stack>
                    </Stack>
                ))}
            </ResponsiveStack>
        </Box>
    )
}