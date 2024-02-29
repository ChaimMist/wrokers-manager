import {useQuery, UseQueryResult} from "react-query";
import {User} from "../types/user";
import {signUp} from "../api/userService/userServiceApi";


export const useSignUp = (user: User): UseQueryResult<any> => {
    return useQuery( 'signUp', () => signUp(user));
}