import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {ThemeProvider} from "@mui/material";
import {lightTheme} from "./themes/themes";
import {QueryClient, QueryClientProvider} from "react-query";
import {SnackbarProvider} from "notistack";

const root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const queryClient: QueryClient = new QueryClient();

root.render(
    <ThemeProvider theme={lightTheme}>
        <QueryClientProvider client={queryClient}>
            <SnackbarProvider maxSnack={3}>
                <App/>
            </SnackbarProvider>
        </QueryClientProvider>
    </ThemeProvider>
);

