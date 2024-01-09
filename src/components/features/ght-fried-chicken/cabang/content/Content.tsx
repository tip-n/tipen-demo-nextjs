'use client'
import { useState } from "react"

import { Box, Card, CardActionArea, Container, Fade, Grid, Stack } from "@mui/material"

import { ResponsiveStack } from "@shared/ght-fried-chicken/stack/responsive"

import { useIsMobileView } from "@hooks/device"

import { cabang } from "@static/ght-fried-chicken/cabang"


export const CabangContent = () => {
    const isMobile = useIsMobileView()
    const [selectedMap, setSelectedMap] = useState(cabang[0].place_id)
    const mapSrc = `https://www.google.com/maps/embed/v1/place?q=place_id:${selectedMap}&key=AIzaSyA7in5O8WCtH183J6NAFWMlB9yt2xYBH2I`

    const onClick = (placeID: string) => {
        setSelectedMap(placeID)
    }
    return (
        <Fade in>
            <ResponsiveStack paddingTop={20} paddingBottom={10} spacing={isMobile ? 1 : 4}>
                <Container style={{
                    marginLeft: "auto",
                    marginRight: "auto"
                }}>
                    <iframe
                        width="100%"
                        height="400"
                        style={{
                            border: 0,
                            borderRadius: '15px'
                        }}
                        loading="lazy"
                        allowFullScreen
                        src={mapSrc}>
                    </iframe>  
                </Container>
                <Grid
                    container
                    columnSpacing={isMobile ? 0 : 4}
                    rowSpacing={isMobile ? 2 : 0}
                    paddingX={isMobile ? 0 : 20}
                >
                    {cabang.map(({name, address, place_id}) => (
                        <Grid item xs={12} lg={4} key={name}>
                            <Card
                                style={{
                                    height: "100%",
                                    borderRadius: "15px",
                                    // padding: 40
                                }}
                            >
                                <CardActionArea
                                    sx={{
                                        height: "100%"
                                    }}
                                    onClick={() => onClick(place_id)}
                                >
                                    <Stack padding={4}>
                                        <Box fontSize={isMobile ? 18 : 22} fontWeight={600}>{name}</Box>
                                        <Box fontSize={isMobile ? 14 : 18}>{address}</Box>
                                    </Stack>
                                </CardActionArea>
                            </Card>
                        </Grid>
                    ))}
                </Grid>
            </ResponsiveStack>
        </Fade>
    )
}