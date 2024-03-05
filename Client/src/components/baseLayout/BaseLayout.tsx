import React, {useContext} from 'react';
import {NavBar} from "./shared/NavBar/NavBar";
import {Footer} from "./shared/Footer/footer";
import Box from "@mui/material/Box";
import {BaseLayoutProps, Page} from "./types";
import {UserContext} from "../../contexts/userContext/userContext";
import {UserContextTypes} from "../../types/userContextTypes";
import {Theme, useTheme} from "@mui/material";



export const BaseLayout = ({children}: BaseLayoutProps) => {
    const {user} = useContext(UserContext) as UserContextTypes;
    const theme:Theme = useTheme();
    const userPages: Page[] = [
        {title: 'Home', link: '/home'},
        {title: 'Profile', link: '/profile'},
        {title: 'Workers', link: '/workers'}]

    const adminPages: Page[] = [
        {title: 'Admin', link: '/admin'},
        {title: 'Permissions', link: '/permissions'}]

    const nonUserPages: Page[] = [
        {title: 'Login', link: '/login'},
        {title: 'Sign Up', link: '/signup'}]


    const pages:Page[] = user ? user.admin ? userPages.concat(adminPages) : userPages : nonUserPages;

    return (
        <Box sx={{display: 'flex', flexDirection: 'column', minHeight: '100vh', justifyContent: 'space-between', backgroundColor: theme.palette.background.default}}>
            <Box>
                <NavBar pages={pages}/>
                {children}
            </Box>
            <Footer/>
        </Box>
    )
}