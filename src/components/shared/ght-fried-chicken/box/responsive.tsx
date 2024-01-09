'use client'
import { Box } from "@mui/material"
import { styled } from "@mui/material/styles"

import { desktopView } from "@lib/responsive"

export const ResponsiveBox = styled(Box) (( {theme}) => ({
    [desktopView(theme)]: {
        paddingLeft: "100px",
        paddingRight: "100px",
    },
    paddingLeft: "10px",
    paddingRight: "10px"
}))