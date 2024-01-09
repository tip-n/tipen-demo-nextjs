import { Theme } from "@mui/material";

export const desktopView = (theme: Theme) => theme.breakpoints.up("xl")
export const mobileView = (theme: Theme) => theme.breakpoints.down("xl")