import { Stack } from "@mui/material"

import { Header } from "@features/ght-fried-chicken/home/content/header"
import { Statistic } from "@features/ght-fried-chicken/home/content/statistic"
import { BestSeller } from "@features/ght-fried-chicken/home/content/bestseller"
import { Testimony } from "@features/ght-fried-chicken/home/content/testimony"

export const HomeContent = () => {
    return (
        <Stack>
            <Header/>
            <BestSeller/>
            <Statistic/>
            <Testimony/>
        </Stack>
    )
}