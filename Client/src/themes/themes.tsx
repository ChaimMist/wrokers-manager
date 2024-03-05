import {createTheme, Theme} from "@mui/material";

export const darkTheme: Theme = createTheme({
    palette: {
        mode: 'dark',
        background: {
            default: '#39353d'
        }
    }
});

export const lightTheme: Theme = createTheme({
    palette: {
        mode: 'light',
        background: {
            default: '#f4f4f4'
        }
    }
});

