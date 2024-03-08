import {Paper} from "@mui/material";
import {UserCardProps} from "../../types/UserCardProps";
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import {useState} from "react";
import './userCard.css'
import '../shared/global.css'
import {ModalEditComponent} from "../editModal/editModal";

export const UserCard = (props: UserCardProps) => {
    const [open, setOpen] = useState(false);
    return (
        <Paper className={'d-flex flex-column text-center align-items-center p-4 rounded-2 shadow-hover'}
               sx={{
                   width: {xs: '280px', sm: '250px', md: '300px'},
                   minHeight: '300px'
               }}>
            <Box className={'p-2 text-center'} sx={{
                width: {
                    xs: '120px',
                    sm: '170px',
                    md: '220px'
                }, height: {
                    xs: '120px',
                    sm: '170px',
                    md: '220px'
                }
            }}>
                <img className={'mx-auto circle image'}
                     src={props.user.image ?? 'https://www.w3schools.com/howto/img_avatar.png'} alt={'profile image'}/>
            </Box>
            <Typography variant={'h5'}>{props.user.firstName} {props.user.lastName}</Typography>
            <Typography variant={'subtitle1'}>{props.user.job}</Typography>
            <Typography variant={'subtitle2'}>{props.user.address}</Typography>
            <Box className={'flex-row gap-2'} sx={{display: props.editable ? 'flex' : 'none'}}>
                <Button onClick={() => setOpen(true)} variant={'contained'} color={"primary"}>Edit</Button>
                <Button variant={'outlined'} color={"error"}>Delete</Button>
            </Box>
            <ModalEditComponent open={open} setOpen={setOpen} user={props.user}/>

        </Paper>
    )
}