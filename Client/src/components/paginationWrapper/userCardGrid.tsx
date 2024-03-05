import {UserCardGridProps} from "./types";
import * as React from "react";
import {UserCard} from "../userCard/userCard";
import Grid from "@mui/material/Grid";
import {User} from "../../types/user";

export const UserCardGrid = (props: UserCardGridProps) => {
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
            {childrenToRender.map((user: User, index:number) => {
                return (
                    <Grid item key={index}>
                        <UserCard user={user}/>
                    </Grid>
                )
            })
            }
        </Grid>
    )
}