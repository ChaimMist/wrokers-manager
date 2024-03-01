import {Theme, Toolbar} from "@mui/material";
import React from "react";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import {Copyright} from "@mui/icons-material";


export const Footer = () => {
    return (
        <Toolbar sx={{
                height: '100px',
                color: 'white',
                backgroundColor: (theme: Theme) :string =>
                    theme.palette.mode === 'light'
                        ? theme.palette.primary.main
                        : theme.palette.grey[800],
            }}>
            <Container maxWidth="sm">
                <Typography variant="body1">
                    Efficiency through Unity: Building Tomorrows Success Together
                </Typography>
                <Copyright />
            </Container>
        </Toolbar>
    )
}