'use client'

import { Box, Grid, Stack } from "@mui/material"
import { sushiMenu } from "@static/sushi-restaurant/menu/sushi"
import { MenuCard } from "@features/ght-fried-chicken/menu/card"
import Image from "next/image"

export const SushiMenu = () => {
    return (
            <Grid container columnGap={3}>
                {sushiMenu.map(({
                    name,
                    description,
                    isBestSeller,
                    price
                }) => (
                    <Grid item xs={4}>
                        {name}
                        {/* <MenuCard
                            name={name}
                            description={description}
                            isBestSeller={isBestSeller}
                            price={price}
                        /> */}
                    </Grid>
                ))}
            </Grid>

    )
}