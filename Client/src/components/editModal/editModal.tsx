import * as React from "react";
import {EditModalProps} from "./types";
import {Backdrop, CircularProgress, Fade, Modal} from "@mui/material";
import Container from "@mui/material/Container";
import Typography from "@mui/material/Typography";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import {User} from "../../types/user";
import {useUpdateUser} from "../../hooks/useUpdateUser";
import {UseMutationResult} from "react-query";
import {AxiosError} from "axios";


export const ModalEditComponent = (props: EditModalProps) => {

    const {isLoading, mutate}: UseMutationResult<any, AxiosError, User> = useUpdateUser();
    const handleUpdateUser = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        const formData: FormData = new FormData(event.currentTarget);
        const user: User = {
            firstName: formData.get('firstName') as string,
            lastName: formData.get('lastName') as string,
            email: formData.get('email') as string,
            password: formData.get('password') as string,
            job: formData.get('Job Title') as string,
            address: formData.get('Address') as string,
            phone: formData.get('Phone Number') as string,
            image: formData.get('Image Url') as string,
        };
        mutate(user)
        props.setOpen(false);

    }

    return (
        <Modal
            open={props.open}
            onClose={() => props.setOpen(false)}
            closeAfterTransition
            slots={{backdrop: Backdrop}}
            slotProps={{
                backdrop: {
                    timeout: 500,
                },
            }}
        >
            <Fade in={props.open}>
                <Container className={'modal'} sx={{
                    width: {xs: '90vw', sm: '70vw', md: '50vw', lg: ' 35vw'}, maxHeight: '70vh', overflowX: 'auto'
                }}>
                    <Typography id="transition-modal-title" variant="h5" component="h2">
                        {props.user.firstName} {props.user.lastName}
                    </Typography>
                    <hr></hr>
                    {isLoading ? <CircularProgress/> :
                        <Box aria-autocomplete={'none'} component="form" onSubmit={handleUpdateUser} sx={{mt: 3, p: 1}}>
                            <Grid container spacing={2}>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        defaultValue={props.user.firstName}
                                        name="firstName"
                                        required
                                        fullWidth
                                        id="firstName"
                                        label="First Name"
                                        autoFocus
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        defaultValue={props.user.lastName}
                                        required
                                        fullWidth
                                        id="lastName"
                                        label="Last Name"
                                        name="lastName"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        defaultValue={props.user.job}
                                        required
                                        fullWidth
                                        id="Job Title"
                                        label="Job Title"
                                        name="Job Title"
                                    />
                                </Grid>

                                <Grid item xs={12}>
                                    <TextField
                                        defaultValue={props.user.email}
                                        required
                                        fullWidth
                                        id="email"
                                        label="Email Address"
                                        name="email"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        defaultValue={props.user.password}
                                        required
                                        fullWidth
                                        name="password"
                                        label="Password"
                                        type="text"
                                        id="password"
                                    />
                                </Grid>
                                <Grid item xs={12}>
                                    <TextField
                                        defaultValue={props.user.image}
                                        required
                                        fullWidth
                                        name="Image Url"
                                        label="Image Url"
                                        type="Image Url"
                                        id="Image Url"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        defaultValue={props.user.address}
                                        required
                                        fullWidth
                                        id="Address"
                                        label="Address"
                                        name="Address"
                                    />
                                </Grid>
                                <Grid item xs={12} sm={6}>
                                    <TextField
                                        defaultValue={props.user.phone}
                                        required
                                        fullWidth
                                        id="Phone Number"
                                        label="Phone Number"
                                        name="Phone Number"
                                    />
                                </Grid>
                            </Grid>
                            <Button
                                type="submit"
                                fullWidth
                                variant="contained"
                                color={'warning'}
                                sx={{mt: 3, mb: 2}}
                            >
                                Update
                            </Button>
                        </Box>
                    }
                </Container>
            </Fade>
        </Modal>
    )
}
