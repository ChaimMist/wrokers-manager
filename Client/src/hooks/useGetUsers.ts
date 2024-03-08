import {getUsers} from "../api/userService/userServiceApi";
import {useQuery} from "react-query";
import {useContext} from "react";
import {UsersContext} from "../contexts/usersContext/usersContext";
import {UsersContextTypes} from "../types/usersContextTypes";
import {User} from "../types/user";
import {UserContextTypes} from "../types/userContextTypes";
import {UserContext} from "../contexts/userContext/userContext";


export const useGetUsers = () => {
    const {dispatch} = useContext(UsersContext) as UsersContextTypes;
    return useQuery('getUsers', () => {return getUsers()}, {
        onSuccess: (data: User[]) => {
            dispatch({type: 'SET_USERS', payload: data})
        }
    })
}