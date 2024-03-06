import {useMutation, useQuery} from "react-query";
import {User} from "../types/user";
import {getUser, signIn, signUp} from "../api/userService/userServiceApi";
import {snackBarError, snackBarSuccess} from "../utils/snackBar/snackBars";
import {AxiosError} from "axios";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {Credentials} from "../types/credentials";
import {useContext} from "react";
import {UserContext} from "../contexts/userContext/userContext";
import {UserContextTypes} from "../types/userContextTypes";


export const useSignUp = () => {
    const navigate: NavigateFunction = useNavigate();
    return useMutation((user: User) => signUp(user), {
        onSuccess: (): void => {
            snackBarSuccess('User created successfully');
            navigate('/login');
        },
        onError: (error: AxiosError) => snackBarError(error?.response?.data as string)
    });
}

export const useGetUser = () => {
    const {dispatch} = useContext(UserContext) as UserContextTypes;
    return useQuery('getUser', () => {
        const token = sessionStorage.getItem('token') || localStorage.getItem('token');
        if (!token) return;
        return getUser(token);
    }, {
        enabled: !!sessionStorage.getItem('token') || !!localStorage.getItem('token'),
        onSuccess: (res: User): void => {
            if (!res.token) return;
            dispatch({type: 'UPDATE_USER', payload: res});
            sessionStorage.setItem('token', res.token);
        }
    });

}

export const useSignIn = () => {
    const navigate: NavigateFunction = useNavigate();
    const {dispatch} = useContext(UserContext) as UserContextTypes;
    return useMutation((credentials: Credentials) => signIn(credentials), {
        onSuccess: (res: User): void => {
            if (!res.token) return;
            snackBarSuccess('Login successful');
            dispatch({type: 'UPDATE_USER', payload: res});
            sessionStorage.setItem('token', res.token);
            navigate('/home');
        },
        onError: (error: AxiosError) => snackBarError(error?.response?.data as string)
    });
}