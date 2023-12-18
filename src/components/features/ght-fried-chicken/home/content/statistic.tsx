import { Box, Container, Grid, Stack } from "@mui/material"

import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import CheckRoundedIcon from '@mui/icons-material/CheckRounded';

export const Statistic = () => {
    return (
        <Box bgcolor={"ghtFriedChickenGray.main"}>
            <Container disableGutters>
                <Stack p={18} spacing={6} my={"auto"} alignItems={"center"}>
                    <Box textAlign={"center"} fontSize={48}>
                        Mengapa harus bermitra dengan kami ?
                    </Box>
                    <Grid container rowSpacing={2} columnSpacing={2}>
                        <Grid item xs={6} md={3}>
                            <Stack textAlign={"center"}>
                                <Box fontSize={24}>
                                    2000+
                                </Box>
                                <Box>
                                    Pesanan setiap hari
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Stack textAlign={"center"}>
                                <Box fontSize={24}>
                                    Kami bantu
                                </Box>
                                <Box>
                                    Carikan tempat
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Stack textAlign={"center"}>
                                <CloseRoundedIcon color="error" fontSize={"large"} sx={{mx: "auto"}}/>
                                <Box>
                                    Tidak ada bagi hasil
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Stack textAlign={"center"}>
                                <CheckRoundedIcon color="success" fontSize={"large"} sx={{mx: "auto"}}/>
                                <Box>
                                    Free royalty
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Stack textAlign={"center"}>
                                <Box fontSize={24}>
                                    Free
                                </Box>
                                <Box>
                                    Foto Katalog
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Stack textAlign={"center"}>
                                <Box fontSize={24}>
                                    Kami bantu
                                </Box>
                                <Box>
                                    Pelatihan karyawan
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Stack textAlign={"center"}>
                                <Box fontSize={24}>
                                    Support
                                </Box>
                                <Box>
                                    Dari management
                                </Box>
                            </Stack>
                        </Grid>
                        <Grid item xs={6} md={3}>
                            <Stack textAlign={"center"}>
                                <Box fontSize={24}>
                                    Bonus
                                </Box>
                                <Box>
                                    Untuk outlet terbaik
                                </Box>
                            </Stack>
                        </Grid>
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
}