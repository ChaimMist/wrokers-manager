import Box from "@mui/material/Box";
import {Paper} from "@mui/material";
import '../shared/global.css'
import Typography from "@mui/material/Typography";
import Button from "@mui/material/Button";
import {UserCardProps} from "../../types/UserCardProps";

export const UserCard = (props: UserCardProps) => {
    return (
        <Paper className={'d-flex flex-column text-center align-items-center p-4 rounded-2'}
               sx={{
                   width: {xs: '400px', sm: '250px', md: '300px'},
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
                <img className={'mx-auto circle image'} src={props.user.image ?? 'https://www.w3schools.com/howto/img_avatar.png'} alt={'profile image'}/>
            </Box>
            <Typography variant={'h5'}>{props.user.firstName} {props.user.lastName}</Typography>
            <Typography variant={'subtitle1'}>Full Stack Developer</Typography>
            <Typography variant={'subtitle2'}>Bay Area, San Francisco, CA</Typography>
            <Box className={'d-flex flex-row gap-2'}>
                <Button variant={'contained'} color={"primary"}>Edit</Button>
                <Button variant={'outlined'} color={"error"}>Delete</Button>
            </Box>
        </Paper>
    )
}