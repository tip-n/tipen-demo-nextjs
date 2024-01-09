import { Fade, Stack } from "@mui/material"

import { Price } from "@features/ght-fried-chicken/kemitraan/Price"
import { FAQ } from "@features/ght-fried-chicken/kemitraan/FAQ"

export const KemitraanContent = () => {
    return (
        <Fade in>
            <Stack>
                <Price/>
                <FAQ/>
            </Stack>
        </Fade>
    )
}