import React, {useContext} from 'react';
import './App.css';
import {Routes} from "./routes/Routes";
import {ThemeProvider} from "@mui/material";
import { ThemeContext } from './contexts/themeContext/themeContext';

function App() {
    const {theme} = useContext(ThemeContext);
    return (
        <ThemeProvider theme={theme}>
            <Routes/>
        </ThemeProvider>
    );
}

export default App;
