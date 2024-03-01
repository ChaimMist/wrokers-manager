import {useMutation} from "react-query";
import {User} from "../types/user";
import {signIn, signUp} from "../api/userService/userServiceApi";
import {snackBarError, snackBarSuccess} from "../utils/snackBar/snackBars";
import {AxiosError} from "axios";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {Credentials} from "../types/credentials";


export const useSignUp = () => {
    const navigate:NavigateFunction = useNavigate();
    return useMutation((user: User) => signUp(user), {
        onSuccess: (): void => {
            snackBarSuccess('User created successfully');
            navigate('/login');
        },
        onError: (error: AxiosError) => snackBarError(error?.response?.data as string)
    });
}

export const useSignIn = () => {
    const navigate:NavigateFunction = useNavigate();
    return useMutation((credentials: Credentials) => signIn(credentials), {
        onSuccess: (): void => {
            snackBarSuccess('Login successful');
            navigate('/home');
        },
        onError: (error: AxiosError) => snackBarError(error?.response?.data as string)
    });
}