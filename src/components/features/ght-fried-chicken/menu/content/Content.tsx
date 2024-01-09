import { Fade, Stack } from "@mui/material"

import { BestSeller } from "@features/ght-fried-chicken/menu/content/Bestseller"
import { Menu } from "@features/ght-fried-chicken/menu/content/Menu"

export const MenuContent = () => {
    return (
        <Fade in>
            <Stack>
                <BestSeller/>
                <Menu/>
            </Stack>
        </Fade>
    )
}