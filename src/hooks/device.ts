import { useMediaQuery, useTheme } from "@mui/material"

export const useIsMobileView = () => {
    const theme = useTheme()
    return useMediaQuery(theme.breakpoints.down('lg'))
}