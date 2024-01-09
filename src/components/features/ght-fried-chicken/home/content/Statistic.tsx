'use client'
import { Box, Container, Grid, Stack } from "@mui/material"

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

import { ResponsiveStack } from "@shared/ght-fried-chicken/stack/responsive";

import { useIsMobileView } from "@hooks/device";

export const Statistic = () => {
    const isMobile = useIsMobileView()
    return (
        <Box bgcolor={"ghtFriedChickenGray.main"} color={"white"}>
            <Container disableGutters>
                <ResponsiveStack py={isMobile ? 10 : 18} spacing={isMobile ? 1 : 6} my={"auto"} alignItems={"center"}>
                    <Box
                        textAlign={"center"}
                        fontSize={isMobile ? 24 : 48}
                        // className={bangers.className}
                    >
                        Mengapa harus bermitra dengan kami ?
                    </Box>
                    <Grid container rowSpacing={isMobile ? 4 : 2} columnSpacing={2}>
                        <Grid item xs={12} md={3}>
                            <Stack textAlign={"center"}>
                                <Box fontSize={24}>
                                    2000+
                                </Box>
                                <Box fontSize={18}>
                                    Pesanan setiap hari
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Stack textAlign={"center"}>
                                <CloseRoundedIcon color="error" fontSize={"large"} sx={{mx: "auto"}}/>
                                <Box fontSize={18}>
                                    Tidak ada bagi hasil
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Stack textAlign={"center"}>
                                <CheckRoundedIcon color="success" fontSize={"large"} sx={{mx: "auto"}}/>
                                <Box fontSize={18}>
                                    Free royalty
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Stack textAlign={"center"}>
                                <Box fontSize={24}>
                                    Kami bantu
                                </Box>
                                <Box fontSize={18}>
                                    Pelatihan karyawan
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </ResponsiveStack>
            </Container>
        </Box>
    )
}