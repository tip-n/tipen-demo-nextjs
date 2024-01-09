'use client'
import { Stack } from "@mui/material"
import { styled } from "@mui/material/styles"

import { desktopView } from "@lib/responsive"

export const ResponsiveStack = styled(Stack)(( {theme}) => ({
    [desktopView(theme)]: {
        paddingLeft: "100px",
        paddingRight: "100px",
    },
    paddingLeft: "30px",
    paddingRight: "30px",
}))