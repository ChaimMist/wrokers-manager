import {useState} from "react";
import {useNavigate} from "react-router-dom";
import {ReactJSXElement} from "@emotion/react/types/jsx-namespace";
import {
    AppBar, Avatar, Box, Button, Container, IconButton, Menu, MenuItem, Toolbar, Tooltip, Typography
} from "@mui/material";

import {NavBarProps, Page} from "./types";
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import profileIcon from '../../../../assets/profileImage.png'


export const NavBar = ({pages}: NavBarProps) => {
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [themeCheckBox, setThemeCheckBox] = useState<boolean>(false);
    const navigation = useNavigate();

    const handleNavigation = (link: string) => (): void => {
        navigation(link);
    }

    const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorElNav(event.currentTarget as HTMLElement);
    };
    const handleOpenUserMenu = (event: React.MouseEvent<HTMLElement>): void => {
        setAnchorElUser(event.currentTarget as HTMLElement);
    };

    const handleChangeTheme = (event: React.ChangeEvent<HTMLInputElement>): void => {
        setThemeCheckBox(!themeCheckBox);
    };

    const getPages = (): ReactJSXElement[] => {
        return pages.map((page: Page) => (
            <Button
                key={page.title}
                onClick={handleNavigation(page.link)}
                sx={{my: 2, color: 'white', display: 'block', fontFamily: 'sans-serif', fontSize: '1.2rem'}}
            >
                {page.title}
            </Button>
        ))
    }


    return (
        <AppBar position={'sticky'}>
            <Container maxWidth={'xl'}>
                <Toolbar disableGutters className={"gap-1 justify-content-between"}>
                    <Box className={"d-flex flex-row gap-1 align-items-center "}>
                        <Box sx={{flexGrow: 1, display: {xs: 'flex', md: 'none'}}}>
                            <IconButton
                                size="large"
                                aria-label="account of current user"
                                aria-controls="menu-appbar"
                                aria-haspopup="true"
                                onClick={handleOpenNavMenu}
                                color="inherit"
                            >
                                <MenuIcon/>
                            </IconButton>
                            <Menu
                                id="menu-appbar"
                                anchorEl={anchorElNav}
                                anchorOrigin={{
                                    vertical: 'bottom',
                                    horizontal: 'left',
                                }}
                                keepMounted
                                transformOrigin={{
                                    vertical: 'top',
                                    horizontal: 'left',
                                }}
                                open={Boolean(anchorElNav)}
                                onClose={() => setAnchorElNav(null)}
                                sx={{
                                    display: {xs: 'block', md: 'none'},
                                }}
                            >
                                {pages.map((page) => (
                                    <MenuItem key={page.title} onClick={handleNavigation(page.link)}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </MenuItem>
                                ))}
                            </Menu>
                        </Box>
                        <Typography variant={"h4"} align={'center'} fontFamily={"fantasy"}>
                            Julius
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {getPages()}
                        </Box>
                    </Box>
                    <Box className={'d-flex flex-row' }>
                        {/*<Stack direction={"row"} spacing={0}>*/}
                        {/*    <SunIcon/>*/}
                        {/*    <Switch color={"secondary"} checked={themeCheckBox} onChange={handleChangeTheme}*/}
                        {/*            name="gilad"/>*/}
                        {/*    <MoonIcon/>*/}
                        {/*</Stack>*/}
                        <Tooltip title="Open settings">
                            <IconButton size={'large'} sx={{p: 0}}>
                                <Avatar alt={'awdaw'} src={profileIcon}/>
                            </IconButton>
                        </Tooltip>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    )
}
