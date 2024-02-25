import React, {ReactNode, useMemo} from 'react';
import {NavBar} from "./shared/NavBar/NavBar";
import {Page} from "./shared/NavBar/types";
import {Footer} from "./shared/Footer/footer";
import Box from "@mui/material/Box";


interface BaseLayoutProps {
    children: ReactNode,
    admin?: boolean
}

export const BaseLayout = ({children, admin = false}: BaseLayoutProps) => {

    const pages: Page[] = [
        {title: 'Home', link: '/home'},
        {title: 'Profile', link: '/profile'},
        admin ? {title: 'Admin', link: '/admin'} : {title: 'Shifts', link: '/shifts'}]


    return (
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'space-between'}}>
            <Box>
                <NavBar pages={pages}/>
                {children}
            </Box>
            <Footer/>
        </Box>
    )
}