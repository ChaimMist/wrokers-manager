import {MouseEvent, useContext, useState} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {
    AppBar,
    Avatar,
    Box,
    Button,
    Container,
    IconButton,
    MenuItem,
    Toolbar,
    Tooltip,
    Typography
} from "@mui/material";
import {Page} from "../../types";
import './NavBar.css'
import MenuIcon from '@mui/icons-material/Menu';
import {ThemeContext} from "../../../../contexts/themeContext/themeContext";
import {darkTheme, lightTheme} from "../../../../themes/themes";
import {CustomMenu} from "../../../menu/CustomMenu";
import {UserContext} from "../../../../contexts/userContext/userContext";
import {UserContextTypes} from "../../../../types/userContextTypes";
import {NavBarProps} from "./types";

export const NavBar = ({pages}: NavBarProps) => {
    const navigation: NavigateFunction = useNavigate();
    const {setTheme} = useContext(ThemeContext);
    const {user, setUser} = useContext(UserContext) as UserContextTypes;
    const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
    const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);
    const [anchorElTheme, setAnchorElTheme] = useState<null | HTMLElement>(null);

    const handleNavigation = (link: string) => (): void => {
        navigation(link);
    };
    const handleLogOut = () => (): void => {
        setUser(null);
        navigation('/login');
    }
    const handleOpenNavMenu = (event: MouseEvent<HTMLElement>): void => {
        setAnchorElNav(event.currentTarget as HTMLElement);
    };
    const handleOpenUserMenu = (event: MouseEvent<HTMLElement>): void => {
        setAnchorElUser(event.currentTarget as HTMLElement);
    };
    const handleOpenThemeMenu = (event: MouseEvent<HTMLElement>): void => {
        setAnchorElTheme(event.currentTarget as HTMLElement);
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
                                color="inherit"
                                onClick={handleOpenNavMenu}
                            >
                                <MenuIcon/>
                            </IconButton>
                            <CustomMenu anchorEl={anchorElNav} setAnchorEl={setAnchorElNav}
                                        sx={{display: {xs: 'block', md: 'none'}}}>
                                {pages.map((page: Page) => (
                                    <MenuItem key={page.title} onClick={handleNavigation(page.link)}>
                                        <Typography textAlign="center">{page.title}</Typography>
                                    </MenuItem>
                                ))}
                            </CustomMenu>
                        </Box>
                        <Typography variant={"h4"} align={'center'} fontFamily={"fantasy"}>
                            Julius
                        </Typography>
                        <Box sx={{flexGrow: 1, display: {xs: 'none', md: 'flex'}}}>
                            {pages.map((page: Page) => (
                                <Button
                                    key={page.title}
                                    onClick={handleNavigation(page.link)}
                                    sx={{
                                        my: 2,
                                        color: 'white',
                                        display: 'block',
                                        fontFamily: 'sans-serif',
                                        fontSize: '1.2rem'
                                    }}
                                >
                                    {page.title}
                                </Button>
                            ))}
                        </Box>
                    </Box>
                    <Box className={'d-flex flex-row'}>
                        <Tooltip title="Open settings">
                            <IconButton size={'large'} sx={{p: 0}} onClick={handleOpenUserMenu}>
                                <Avatar src={user?.image} alt={'avatar'}/>
                            </IconButton>
                        </Tooltip>
                        <CustomMenu anchorEl={anchorElUser} setAnchorEl={setAnchorElUser}>
                            <MenuItem onClick={handleOpenThemeMenu}>Change Theme</MenuItem>
                            <MenuItem onClick={handleLogOut()}>Logout</MenuItem>
                            <CustomMenu anchorEl={anchorElTheme} setAnchorEl={setAnchorElTheme}>
                                <MenuItem onClick={() => setTheme(darkTheme)}>Dark Mode </MenuItem>
                                <MenuItem onClick={() => setTheme(lightTheme)}>Light Mode </MenuItem>
                            </CustomMenu>
                        </CustomMenu>
                    </Box>
                </Toolbar>
            </Container>
        </AppBar>
    );
}
