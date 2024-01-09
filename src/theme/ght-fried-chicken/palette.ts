import { PaletteOptions } from "@mui/material";
import { grey, red } from "@mui/material/colors";

export const themePalette: PaletteOptions = {
    ghtFriedChickenRed: {
        main: red[700],
        contrastText: 'white'
    },
    ghtFriedChickenGray: {
        main: '#262626',
        contrastText: 'white'
    },
    ghtFriedChickenYellow: {
        main: '#fdd835',
        contrastText: '#212121'
    },
    navbarSelected: {
        main: "white",
        contrastText: "white"
    },
    navbarUnselected: {
        main: grey[400],
        contrastText: grey[300]
    },
}