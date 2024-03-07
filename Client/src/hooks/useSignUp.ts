import {useMutation} from "react-query";
import {User} from "../types/user";
import {signUp} from "../api/userService/userServiceApi";
import {snackBarError, snackBarSuccess} from "../utils/snackBar/snackBars";
import {AxiosError} from "axios";
import {NavigateFunction, useNavigate} from "react-router-dom";



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



