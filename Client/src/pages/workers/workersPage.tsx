import {BaseLayout} from "../../components/baseLayout/BaseLayout";
import {User} from "../../types/user";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import * as React from "react";
import {useContext, useState} from "react";
import {Box, CircularProgress, Theme, useTheme} from "@mui/material";
import {CustomIcon} from "../../components/customIcon/customIcon";
import ArrowRight from '@mui/icons-material/ArrowRight';
import ArrowLeft from '@mui/icons-material/ArrowLeft';
import {useGetUsers} from "../../hooks/useGetUsers";
import {UseQueryResult} from "react-query";
import {UserCardGrid} from "../../components/paginationWrapper/userCardGrid";
import {UsersContext} from "../../contexts/usersContext/usersContext";
import {UsersContextTypes} from "../../types/usersContextTypes";

export const WorkersPage = () => {
    const {isLoading}: UseQueryResult<User[], any> = useGetUsers();
    const {users} = useContext(UsersContext) as UsersContextTypes;
    const [search, setSearch] = React.useState<string>('');
    const [page, setPage] = React.useState<number>(0);
    const theme: Theme = useTheme();
    const pageSize = 28;
    const handleNextPage = (): void => {
        if (users)
            if (page + 1 >= Math.ceil(users.length / pageSize)) return;
        setPage(page + 1);
    }

    const filteredUsers = (): User[] => {
        if (!users) return [];
        if (search === '') return users;
        return users.filter((user: User) => {
            return user.firstName.toLowerCase().includes(search.toLowerCase()) || user.lastName.toLowerCase().includes(search.toLowerCase());
        });
    }

    const handlePrevPage = (): void => {
        if (page - 1 < 0) return;
        setPage(page - 1);
    }


    return (
        <BaseLayout>
            <Container maxWidth={"xl"} disableGutters={false} sx={{textAlign: 'center', padding: 3}}>
                {isLoading || !users ? <CircularProgress color={'primary'}/> :
                    <>
                        <Box
                            className={'d-flex gap-2 flex-row align-items-center justify-content-center border-radius-bottom'}
                            component={'section'}
                            width={'100%'} boxShadow={'0px 3px 3px 0px #958d8d78'} padding={1}
                        >
                            <CustomIcon fill={true} color={theme.palette.primary.main} size={33}
                                        onClick={() => handlePrevPage()}>
                                <ArrowLeft/> </CustomIcon>
                            <TextField
                                onChange={(e) => setSearch(e.target.value)}
                                margin={"dense"}
                                label={"Search Name"}
                                name={"Name"}
                                autoComplete={"Name"}
                                autoFocus
                            />
                            <CustomIcon fill={true} color={theme.palette.primary.main} size={33}
                                        onClick={() => handleNextPage()}>
                                <ArrowRight/> </CustomIcon>
                        </Box>
                        <UserCardGrid users={filteredUsers()} page={page} pageSize={pageSize} pagination={true}/>
                    </>}
            </Container>
        </BaseLayout>
    )
}