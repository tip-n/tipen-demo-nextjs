'use client'
import Link from "next/link";
import Image from "next/image";

import { Box, Grid, Stack } from "@mui/material"

import { bangers } from "@app/ght-fried-chicken/fonts"

import { ResponsiveStack } from "@shared/ght-fried-chicken/stack/responsive";
import { ResponsiveBox } from "@shared/ght-fried-chicken/box/responsive";

import { menu } from "@static/ght-fried-chicken/menu";

export const Menu = () => {
    return (
        <Box bgcolor={"white"} color={"ghtFriedChickenYellow.contrastText"}>
            <ResponsiveStack py={10} spacing={2}>
                <Stack spacing={0} textAlign={"center"}>
                    <Box fontSize={48} className={bangers.className}>
                        Menu Kami
                    </Box>
                </Stack>
                <ResponsiveBox>
                    <Grid container spacing={4}>
                        {menu.map(({
                            name,
                            attribution,
                            attributionurl,
                            price,
                            src,
                        }) => (
                            <Grid item xs={12} lg={2.4} key={name}>
                                <Stack
                                    key={name}
                                    spacing={2}
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
                                        <Box
                                            fontSize={16}
                                            textAlign={"center"}
                                            fontWeight={500}
                                        >
                                            {new Intl.NumberFormat(
                                                "id-ID",
                                                {style: "currency", currency: "IDR"}
                                            ).format(price)}
                                        </Box>
                                        <Box fontSize={14} textAlign={"center"}>
                                            <Link href={attributionurl}>{attribution}</Link>
                                        </Box>
                                    </Stack>
                                </Stack>
                            </Grid>
                        ))}
                    </Grid>
                </ResponsiveBox>
            </ResponsiveStack>
        </Box>
    )
}