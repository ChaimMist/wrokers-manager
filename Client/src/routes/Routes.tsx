import {RouterProvider} from "react-router-dom";
import {useContext} from "react";
import {UserContext} from "../contexts/userContext/userContext";
import {UserContextTypes} from "../types/userContextTypes";
import {nonUserRoute} from "./shared/nonUserRoute";
import {adminRouter} from "./shared/adminRoute";
import {workerRouter} from "./shared/workerRoute";

export const Routes = () => {
    const {user} = useContext(UserContext) as UserContextTypes;
    return (
        <RouterProvider router={user?.admin ? adminRouter : user ? workerRouter : nonUserRoute}/>
    )
}