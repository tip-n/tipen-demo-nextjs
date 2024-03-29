import { PaletteOptions } from '@mui/material';

declare module '@mui/material/styles' {
    interface PaletteOptions {
        ghtFriedChickenRed?: PaletteOptions['primary'];
        ghtFriedChickenGray?: PaletteOptions['primary'];
        ghtFriedChickenYellow?: PaletteOptions['primary'];
        navbarSelected?: PaletteOptions['primary'];
        navbarUnselected?: PaletteOptions['primary'];
    }
    interface Palette {
      ghtFriedChickenRed?: Palette['primary'];
      ghtFriedChickenGray?: Palette['primary'];
      ghtFriedChickenYellow?: Palette['primary'];
      navbarSelected?: Palette['primary'];
      navbarUnselected?: Palette['primary']
    }
}