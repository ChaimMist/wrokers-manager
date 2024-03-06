import {BaseLayout} from "../../components/baseLayout/BaseLayout";
import Box from "@mui/material/Box";
import {useContext} from "react";
import {UserContext} from "../../contexts/userContext/userContext";
import {UserContextTypes} from "../../types/userContextTypes";

export const HomePage = () => {
    const {user} = useContext(UserContext) as UserContextTypes;
    return (
            <BaseLayout>
                <Box>
                    <h1>Home Page</h1>
                    <h2>Welcome, {user?.firstName}</h2>
                </Box>
            </BaseLayout>
    )
}