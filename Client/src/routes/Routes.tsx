import {RouterProvider} from "react-router-dom";
import {workerRouter} from "./shared/admin/adminRoute";
import {adminRouter} from "./shared/worker/workerRoute";

export const Routes = () => {
    return (
        <RouterProvider router={true ? workerRouter : adminRouter}/>
    )
}