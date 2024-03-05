import {BaseLayout} from "../../components/baseLayout/BaseLayout";
import {User} from "../../types/user";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {Box, Theme, useTheme} from "@mui/material";
import {UserCardGrid} from "../../components/paginationWrapper/userCardGrid";
import { CustomIcon } from "../../components/customIcon/customIcon";
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowLeft from '@mui/icons-material/ArrowLeft';

export const WorkersPage = () => {
    const [users, setUsers] = React.useState<User[]>([]);
    const [search, setSearch] = React.useState<string>('');
    const [page, setPage] = React.useState<number>(0);
    const theme:Theme = useTheme()

    const dummyUser: User[] = [
        {
            _id: '1',
            firstName: 'Chaim',
            lastName: 'Mistriel',
            email: 'chaimschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '2',
            firstName: 'Dovid',
            lastName: 'Mistriel',
            email: 'dovidschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '3',
            firstName: 'Dovid1',
            lastName: 'Mistriel1',
            email: 'dovidschool1@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '4',
            firstName: 'Dovid2',
            lastName: 'Mistriel2',
            email: 'dovidschool2@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '5',
            firstName: 'Dovid3',
            lastName: 'Mistriel3',
            email: 'dovidschool3@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '6',
            firstName: 'Dovid4',
            lastName: 'Mistriel4',
            email: 'dovidschool4@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '1',
            firstName: 'Chaim',
            lastName: 'Mistriel',
            email: 'chaimschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '2',
            firstName: 'Dovid',
            lastName: 'Mistriel',
            email: 'dovidschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '3',
            firstName: 'Dovid1',
            lastName: 'Mistriel1',
            email: 'dovidschool1@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '4',
            firstName: 'Dovid2',
            lastName: 'Mistriel2',
            email: 'dovidschool2@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '5',
            firstName: 'Dovid3',
            lastName: 'Mistriel3',
            email: 'dovidschool3@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '6',
            firstName: 'Dovid4',
            lastName: 'Mistriel4',
            email: 'dovidschool4@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '1',
            firstName: 'Chaim',
            lastName: 'Mistriel',
            email: 'chaimschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '2',
            firstName: 'Dovid',
            lastName: 'Mistriel',
            email: 'dovidschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '3',
            firstName: 'Dovid1',
            lastName: 'Mistriel1',
            email: 'dovidschool1@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '4',
            firstName: 'Dovid2',
            lastName: 'Mistriel2',
            email: 'dovidschool2@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '5',
            firstName: 'Dovid3',
            lastName: 'Mistriel3',
            email: 'dovidschool3@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '6',
            firstName: 'Dovid4',
            lastName: 'Mistriel4',
            email: 'dovidschool4@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '1',
            firstName: 'Chaim',
            lastName: 'Mistriel',
            email: 'chaimschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '2',
            firstName: 'Dovid',
            lastName: 'Mistriel',
            email: 'dovidschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '3',
            firstName: 'Dovid1',
            lastName: 'Mistriel1',
            email: 'dovidschool1@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '4',
            firstName: 'Dovid2',
            lastName: 'Mistriel2',
            email: 'dovidschool2@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '5',
            firstName: 'Dovid3',
            lastName: 'Mistriel3',
            email: 'dovidschool3@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '6',
            firstName: 'Dovid4',
            lastName: 'Mistriel4',
            email: 'dovidschool4@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '1',
            firstName: 'Chaim',
            lastName: 'Mistriel',
            email: 'chaimschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '2',
            firstName: 'Dovid',
            lastName: 'Mistriel',
            email: 'dovidschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '3',
            firstName: 'Dovid1',
            lastName: 'Mistriel1',
            email: 'dovidschool1@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '4',
            firstName: 'Dovid2',
            lastName: 'Mistriel2',
            email: 'dovidschool2@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '5',
            firstName: 'Dovid3',
            lastName: 'Mistriel3',
            email: 'dovidschool3@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '6',
            firstName: 'Dovid4',
            lastName: 'Mistriel4',
            email: 'dovidschool4@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '1',
            firstName: 'Chaim',
            lastName: 'Mistriel',
            email: 'chaimschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '2',
            firstName: 'Dovid',
            lastName: 'Mistriel',
            email: 'dovidschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '3',
            firstName: 'Dovid1',
            lastName: 'Mistriel1',
            email: 'dovidschool1@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '4',
            firstName: 'Dovid2',
            lastName: 'Mistriel2',
            email: 'dovidschool2@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '5',
            firstName: 'Dovid3',
            lastName: 'Mistriel3',
            email: 'dovidschool3@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '6',
            firstName: 'Dovid4',
            lastName: 'Mistriel4',
            email: 'dovidschool4@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '1',
            firstName: 'Chaim',
            lastName: 'Mistriel',
            email: 'chaimschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '2',
            firstName: 'Dovid',
            lastName: 'Mistriel',
            email: 'dovidschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '3',
            firstName: 'Dovid1',
            lastName: 'Mistriel1',
            email: 'dovidschool1@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '4',
            firstName: 'Dovid2',
            lastName: 'Mistriel2',
            email: 'dovidschool2@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '5',
            firstName: 'Dovid3',
            lastName: 'Mistriel3',
            email: 'dovidschool3@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '6',
            firstName: 'Dovid4',
            lastName: 'Mistriel4',
            email: 'dovidschool4@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '1',
            firstName: 'Chaim',
            lastName: 'Mistriel',
            email: 'chaimschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '2',
            firstName: 'Dovid',
            lastName: 'Mistriel',
            email: 'dovidschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '3',
            firstName: 'Dovid1',
            lastName: 'Mistriel1',
            email: 'dovidschool1@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '4',
            firstName: 'Dovid2',
            lastName: 'Mistriel2',
            email: 'dovidschool2@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '5',
            firstName: 'Dovid3',
            lastName: 'Mistriel3',
            email: 'dovidschool3@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '6',
            firstName: 'Dovid4',
            lastName: 'Mistriel4',
            email: 'dovidschool4@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '1',
            firstName: 'Chaim',
            lastName: 'Mistriel',
            email: 'chaimschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '2',
            firstName: 'Dovid',
            lastName: 'Mistriel',
            email: 'dovidschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '3',
            firstName: 'Dovid1',
            lastName: 'Mistriel1',
            email: 'dovidschool1@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '4',
            firstName: 'Dovid2',
            lastName: 'Mistriel2',
            email: 'dovidschool2@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '5',
            firstName: 'Dovid3',
            lastName: 'Mistriel3',
            email: 'dovidschool3@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '6',
            firstName: 'Dovid4',
            lastName: 'Mistriel4',
            email: 'dovidschool4@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '1',
            firstName: 'Chaim',
            lastName: 'Mistriel',
            email: 'chaimschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '2',
            firstName: 'Dovid',
            lastName: 'Mistriel',
            email: 'dovidschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '3',
            firstName: 'Dovid1',
            lastName: 'Mistriel1',
            email: 'dovidschool1@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '4',
            firstName: 'Dovid2',
            lastName: 'Mistriel2',
            email: 'dovidschool2@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '5',
            firstName: 'Dovid3',
            lastName: 'Mistriel3',
            email: 'dovidschool3@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '6',
            firstName: 'Dovid4',
            lastName: 'Mistriel4',
            email: 'dovidschool4@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '1',
            firstName: 'Chaim',
            lastName: 'Mistriel',
            email: 'chaimschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '2',
            firstName: 'Dovid',
            lastName: 'Mistriel',
            email: 'dovidschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '3',
            firstName: 'Dovid1',
            lastName: 'Mistriel1',
            email: 'dovidschool1@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '4',
            firstName: 'Dovid2',
            lastName: 'Mistriel2',
            email: 'dovidschool2@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '5',
            firstName: 'Dovid3',
            lastName: 'Mistriel3',
            email: 'dovidschool3@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '6',
            firstName: 'Dovid4',
            lastName: 'Mistriel4',
            email: 'dovidschool4@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '1',
            firstName: 'Chaim',
            lastName: 'Mistriel',
            email: 'chaimschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '2',
            firstName: 'Dovid',
            lastName: 'Mistriel',
            email: 'dovidschool@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '3',
            firstName: 'Dovid1',
            lastName: 'Mistriel1',
            email: 'dovidschool1@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '4',
            firstName: 'Dovid2',
            lastName: 'Mistriel2',
            email: 'dovidschool2@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '5',
            firstName: 'Dovid3',
            lastName: 'Mistriel3',
            email: 'dovidschool3@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        },
        {
            _id: '6',
            firstName: 'Dovid4',
            lastName: 'Mistriel4',
            email: 'dovidschool4@gmail.com',
            password: 'password',
            image: 'https://www.w3schools.com/howto/img_avatar.png'
        }
    ]

    React.useEffect(() => {
        setUsers(dummyUser.filter((user) => (user.firstName+' '+user.lastName).toLowerCase().includes(search.toLowerCase())))
    }, [search]);

    return (<BaseLayout>
        <Container maxWidth={"xl"} disableGutters={false} sx={{textAlign: 'center', padding: 3}}>
            <Box className={'d-flex gap-2 flex-row align-items-center justify-content-center border-radius-bottom'}
                 component={'section'}
                 width={'100%'} boxShadow={'0px 3px 3px 0px #958d8d78'} padding={1}
            >
                <CustomIcon fill={true} color={theme.palette.primary.main} size={33} onClick={() => setPage(page-1)}> <ArrowLeft/> </CustomIcon>
                <TextField
                    onChange={(e) => setSearch(e.target.value)}
                    margin={"dense"}
                    label={"Search Name"}
                    name={"Name"}
                    autoComplete={"Name"}
                    autoFocus
                />
                <CustomIcon fill={true} color={theme.palette.primary.main} size={33} onClick={() => setPage(page+1)}> <ArrowRight/> </CustomIcon>
            </Box>
            <UserCardGrid users={users} page={page} pageSize={25} pagination={true}/>
        </Container>
    </BaseLayout>)
}