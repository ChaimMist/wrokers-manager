import {NavigateFunction, useNavigate} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../contexts/userContext/userContext";
import {UserContextTypes} from "../types/userContextTypes";
import {useMutation} from "react-query";
import {Credentials} from "../types/credentials";
import {signIn} from "../api/userService/userServiceApi";
import {User} from "../types/user";
import {snackBarError, snackBarSuccess} from "../utils/snackBar/snackBars";
import {AxiosError} from "axios";
import Cookies from "js-cookie";

export const useSignIn = () => {
    const navigate: NavigateFunction = useNavigate();
    const {dispatch} = useContext(UserContext) as UserContextTypes;
    return useMutation((credentials: Credentials) => signIn(credentials), {
        onSuccess: (res: User): void => {
            if (!res.token) return;
            snackBarSuccess('Login successful');
            dispatch({type: 'UPDATE_USER', payload: res});
            Cookies.set('token', res.token);
            navigate('/home');
        },
        onError: (error: AxiosError) => snackBarError(error?.response?.data as string)
    });
}