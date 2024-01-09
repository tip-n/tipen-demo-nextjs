import { Fade, Stack } from "@mui/material"

import { Header } from "@features/ght-fried-chicken/home/content/Header"
import { Statistic } from "@features/ght-fried-chicken/home/content/Statistic"
import { BestSeller } from "@features/ght-fried-chicken/home/content/Bestseller"
import { Testimony } from "@features/ght-fried-chicken/home/content/Testimony"

export const HomeContent = () => {
    return (
        <Fade in>
            <Stack>
                <Header/>
                <BestSeller/>
                <Statistic/>
                <Testimony/>
            </Stack>
        </Fade>
    )
}