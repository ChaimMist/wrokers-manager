import {User} from "./user";
import {Dispatch} from "react";

export interface UsersContextTypes{
    users: User[] | null;
    dispatch: Dispatch<UsersActions>;
}

export type UsersActions =
    | {type: 'UPDATE_USER', payload: User}
    | {type: 'DELETE_USER', payload: User}
    | {type: 'ADD_USER', payload: User}
    | {type: 'SET_USERS', payload: User[]}