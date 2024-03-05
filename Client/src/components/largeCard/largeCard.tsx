import {Box, Card, CardMedia, Paper} from "@mui/material";
import profileImage from '../../assets/profileImage.png'
import {UserContext} from "../../contexts/userContext/userContext";
import {useContext} from "react";
import {UserContextTypes} from "../../types/userContextTypes";
import Typography from "@mui/material/Typography";

export const LargeCard = () => {
    const {user} = useContext(UserContext) as UserContextTypes;
    return (
        <Paper variant={'elevation'} sx={{padding: '8px'}} >
            <Box sx={{ display:'flex',  flexDirection: {xs:'column', sm:'row'}}} >
                <Box flex={'column'} sx={{width: '200px', height: '200px'}}>
                        <CardMedia sx={{width: 'auto', height:'auto', borderRadius: '10px'}}  image={profileImage} component={'image'}/>
                        <Typography variant={'h6'}>{user?.firstName + ' ' + user?.lastName}</Typography>
                </Box>
                <Box>
                    <Box flex={'column'}>
                        <h3>John Doe</h3>
                        <p>Software Engineer</p>
                        <p>University of California, Berkeley</p>
                        <p>San Francisco, CA</p>
                    </Box>
                </Box>
            </Box>
        </Paper>
    )

}