import {useMutation} from "react-query";
import {User} from "../types/user";
import {updateUser} from "../api/userService/userServiceApi";
import {snackBarError, snackBarSuccess} from "../utils/snackBar/snackBars";
import {AxiosError} from "axios";



export const useUpdateUser = () => {
    return useMutation((user: User) => updateUser(user), {
        onSuccess: (): void => {
            snackBarSuccess('User updated successfully');
        },
        onError: (error: AxiosError) => snackBarError(error?.response?.data as string)
    });
}