import {UserCardGridProps} from "./types";
import * as React from "react";
import {UserCard} from "../userCard/userCard";
import Grid from "@mui/material/Grid";
import {User} from "../../types/user";
import {useContext} from "react";
import {UserContext} from "../../contexts/userContext/userContext";
import {UserContextTypes} from "../../types/userContextTypes";

export const UserCardGrid = (props: UserCardGridProps) => {
    const {user} = useContext(UserContext) as UserContextTypes;
    let childrenToRender: User[] = props.users;
    if (props.pagination) {
        if (props.page == undefined || props.pageSize == undefined) {
            throw new Error('page and pageSize are required when pagination is true');
        }
        childrenToRender = props.users.slice((props.page) * props.pageSize, props.page * props.pageSize + props.pageSize)
    }
    return (
        <Grid container
              sx={{justifyContent: 'center', marginTop: '10px'}}
              rowSpacing={3}
              columnSpacing={2}>
            {childrenToRender.map((cardUser: User, index:number) => {
                return (
                    <Grid item key={index}>
                        <UserCard user={cardUser} editable={user?.admin}/>
                    </Grid>
                )
            })
            }
        </Grid>
    )
}