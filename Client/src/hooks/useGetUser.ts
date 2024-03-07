import {useContext} from "react";
import {UserContext} from "../contexts/userContext/userContext";
import {UserContextTypes} from "../types/userContextTypes";
import {useQuery} from "react-query";
import {getUser} from "../api/userService/userServiceApi";
import {User} from "../types/user";


export const useGetUser = () => {
    const {dispatch} = useContext(UserContext) as UserContextTypes;
    return useQuery('getUser', () => {
        return getUser();
    }, {
        enabled: false,
        onSuccess: (res: User): void => {
            dispatch({type: 'UPDATE_USER', payload: res});
        }
    });
}