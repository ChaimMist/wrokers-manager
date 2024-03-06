import {useContext, useEffect} from "react";
import {UserContext} from "../contexts/userContext/userContext";
import {UserContextTypes} from "../types/userContextTypes";
import {useGetUser} from "../hooks/useGetUser";
import {LoadingPage} from "../pages/loadingPage/loadingPage";
import {RouterProvider} from "react-router-dom";
import {adminRouter} from "./shared/adminRoute";
import {workerRouter} from "./shared/workerRoute";
import {nonUserRoute} from "./shared/nonUserRoute";
import Cookies from "js-cookie";


export const Routes = () => {
    const {user, dispatch} = useContext(UserContext) as UserContextTypes;
    const {data, error, isLoading, isError, refetch} = useGetUser();

    useEffect(() => {
        if (!user && Cookies.get('token')) {
            refetch();
        }
    })

    return isLoading ?
        <LoadingPage/> :
        <RouterProvider router={user?.admin ? adminRouter : user ? workerRouter : nonUserRoute}/>
}