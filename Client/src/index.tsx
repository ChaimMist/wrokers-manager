import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import {QueryClient, QueryClientProvider} from "react-query";
import {SnackbarProvider} from "notistack";
import CssBaseline from "@mui/material/CssBaseline";
import UserProvider from "./contexts/userContext/userContext";
import {ThemeStateProvider} from './contexts/themeContext/themeContext';

const root: ReactDOM.Root = ReactDOM.createRoot(
    document.getElementById('root') as HTMLElement
);
const queryClient: QueryClient = new QueryClient();
root.render(
    <UserProvider>
        <ThemeStateProvider>
            <QueryClientProvider client={queryClient}>
                <SnackbarProvider maxSnack={3}>
                    <CssBaseline/>
                    <App/>
                </SnackbarProvider>
            </QueryClientProvider>
        </ThemeStateProvider>
    </UserProvider>
);

