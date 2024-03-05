import {BaseLayout} from "../../components/baseLayout/BaseLayout";
import Container from "@mui/material/Container";
import {useContext} from "react";
import {UserContext} from "../../contexts/userContext/userContext";
import {UserContextTypes} from "../../types/userContextTypes";
import {UserCard} from "../../components/userCard/userCard";
import './profilePage.css';


export const ProfilePage = () => {
    const {user} = useContext(UserContext) as UserContextTypes;
    if (!user) return (<div>loading...</div>)
    return (
        <BaseLayout>
            <Container component={'main'} sx={{padding: 4}}>
                <UserCard user={user}/>
            </Container>
        </BaseLayout>
    )
}