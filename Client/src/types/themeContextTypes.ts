import {Theme} from "@mui/material";


export interface ThemeContextTypes {
    theme: Theme,
    setTheme: (theme:Theme) => void
}