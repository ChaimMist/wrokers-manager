import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "@mui/material";
import {lightTheme} from "./themes/themes";

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);

root.render(
    <ThemeProvider theme={lightTheme}>
        <App />
    </ThemeProvider>
);

