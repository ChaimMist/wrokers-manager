import * as React from 'react';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import {UseMutationResult} from "react-query";
import {AxiosError} from "axios";
import {Credentials} from "../../types/credentials";
import {CircularProgress} from "@mui/material";
import {Link as RouterLink} from "react-router-dom";
import {useSignIn} from "../../hooks/useSignIn";


export const LoginPage = () => {

    const {mutate, isLoading}: UseMutationResult<any, AxiosError, Credentials> = useSignIn();
    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData: FormData = new FormData(event.currentTarget);
        const credentials: Credentials = {
            email: formData.get('email') as string,
            password: formData.get('password') as string
        }
        mutate(credentials);
    };

    return (
        <Container component={"main"} maxWidth={"xs"} sx={{padding: '64px'}}>
            <Box sx={{
                display: 'flex',
                flexDirection: 'column',
                alignItems: 'center',
            }}
            >
                {isLoading ? <CircularProgress color={'primary'}/> :
                    <Avatar sx={{m: 1, bgcolor: 'secondary.main'}}>
                        <LockOutlinedIcon/>
                    </Avatar>}
                <Typography component={"h1"} variant={"h5"}>
                    Log in
                </Typography>
                <Box component={"form"} onSubmit={handleSubmit} sx={{mt: 1}}>
                    <TextField
                        margin={"normal"}
                        required
                        fullWidth
                        id={"email"}
                        label={"Email Address"}
                        name={"email"}
                        autoComplete={"email"}
                        autoFocus
                    />
                    <TextField
                        margin={"normal"}
                        required
                        fullWidth
                        name={"password"}
                        label={"Password"}
                        type={"password"}
                        id={"password"}
                        autoComplete={"current-password"}
                    />
                    <FormControlLabel
                        control={<Checkbox value={"remember"} color={"primary"}/>}
                        label={"Remember me"}
                    />
                    <Button
                        type={"submit"}
                        fullWidth
                        variant={"contained"}
                        sx={{mt: 3, mb: 2}}
                    >
                        Sign In
                    </Button>
                    <Grid container>
                        <Grid item xs>
                            <Link variant={"body2"}>
                                Forgot password?
                            </Link>
                        </Grid>
                        <Grid item>
                            <Link variant={"body2"} component={RouterLink} to={'/signup'}>
                                {"Don't have an account? Sign Up"}
                            </Link>
                        </Grid>
                    </Grid>
                </Box>
            </Box>
        </Container>

    );
}