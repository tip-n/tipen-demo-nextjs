'use client'
import Link from "next/link"
import { Box, Container, Stack } from "@mui/material"

import CallRoundedIcon from '@mui/icons-material/CallRounded';
import AlternateEmailRoundedIcon from '@mui/icons-material/AlternateEmailRounded';
import LocationOnRoundedIcon from '@mui/icons-material/LocationOnRounded';

import { useIsMobileView } from "@hooks/device";

export const Footer = () => {
    const isMobile = useIsMobileView()
    return (
        <Stack>
        <Box bgcolor={"ghtFriedChickenGray.main"} color={"white"}>
            <Container disableGutters>
                <Stack
                    direction={isMobile ? "column": "row"}
                    px={isMobile ? 5 : ""}
                    py={8}
                    spacing={isMobile ? 5 : 10}
                    justifyContent={"center"}
                >
                    <Box>
                        <Stack my={"auto !important"} spacing={1}>
                            <Box fontSize={24} fontWeight={600}>
                                Tersedia di
                            </Box>
                            <Stack spacing={0.5} fontSize={isMobile ? 14 : 16}>
                                <Box>Gopud</Box>
                                <Box>Greb</Box>
                                <Box>Sopepud</Box>
                                <Box>Ube eats</Box>
                            </Stack>
                        </Stack>
                    </Box>
                    <Box>
                        <Stack
                            spacing={1}
                            my={"auto !important"}
                            fontSize={isMobile ? 14 : 16}
                        >
                            <Box fontSize={24} fontWeight={600}>Hubungi Kami</Box>
                            <Stack
                                direction={"row"}
                                spacing={1}
                                alignItems={"center"}
                            >
                                <AlternateEmailRoundedIcon/>
                                <Box>gakhabithinking-FC@email.com</Box>
                            </Stack>
                            <Stack
                                direction={"row"}
                                spacing={1}
                                alignItems={"center"}
                            >
                                <CallRoundedIcon/>
                                <Stack spacing={0.5}>
                                    <Box>+62811111111</Box>
                                    <Box>+62822222222(Sales)</Box>
                                    <Box>+62833333333(Customer Service)</Box>
                                </Stack>
                            </Stack>
                            <Stack
                                direction={"row"}
                                spacing={1}
                                alignItems={"center"}
                            >
                                <LocationOnRoundedIcon/>
                                <Stack>
                                    <Box>Outlet Utama : Jl. Alamat Dummy no.1</Box>
                                    <Stack direction={"row"} spacing={0.5}>
                                        <Box>Cabang :</Box>
                                        <Link href="/ght-fried-chicken/cabang">
                                            Klik disini
                                        </Link>
                                    </Stack>
                                </Stack>
                            </Stack>                      
                        </Stack>
                    </Box>
                    <Box justifyContent={"end"}>
                    <iframe
                        width="100%"
                        height="250"
                        style={{
                            border: 0,
                            borderRadius: '15px'
                        }}
                        loading="lazy"
                        allowFullScreen
                        src="https://www.google.com/maps/embed/v1/place?q=place_id:ChIJAQAAAOHFaS4R_OqyTgPgYBQ&key=AIzaSyA7in5O8WCtH183J6NAFWMlB9yt2xYBH2I">
                    </iframe>  
                    </Box>
                </Stack>
            </Container>
        </Box>
        <Stack
            direction={"row"}
            p={1}
            fontSize={14}
            fontWeight={500}
            textAlign={"center"}
            justifyContent={"center"}
            spacing={0.5}
            my={"auto"}
            alignItems={"center"}
            height={"5dvh"} 
        >
            <Box>2023, Created By</Box>
            <Link
                href={process.env.NEXT_PUBLIC_URL || ""}
                target="_blank"
            >
                Steffen Edlin
            </Link>
        </Stack>
        </Stack>
    )
}