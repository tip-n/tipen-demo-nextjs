import { useMediaQuery, useTheme } from "@mui/material"

export const UseIsMobileView = () => {
    const theme = useTheme()
    return useMediaQuery(theme.breakpoints.down('lg'))
}