import {User} from "./user";
import {Dispatch} from "react";


export interface UserContextTypes {
    user: User | null
    dispatch: Dispatch<UserActions>;
}

export type UserActions = {type: 'UPDATE_USER', payload: User | null}
