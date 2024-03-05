import {Context, createContext, FC, ReactNode, useState} from "react";
import {ThemeContextTypes} from "../../types/themeContextTypes";
import {lightTheme} from "../../themes/themes";


export const ThemeContext: Context<ThemeContextTypes> = createContext<ThemeContextTypes>({theme: lightTheme, setTheme: () => null});

export const ThemeStateProvider: FC<{children: ReactNode}> = ({children}) => {
    const [theme, setTheme] = useState(lightTheme)
    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {children}
        </ThemeContext.Provider>
    )
}