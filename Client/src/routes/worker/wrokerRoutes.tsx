import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "../../pages/home/homePage";
import {ShiftsPage} from "../../pages/shifts/shiftsPage";
import {ProfilePage} from "../../pages/profile/profilePage";
import {LoginPage} from "../../pages/login/loginPage";
import {SignUp} from "../../pages/signup/signup";

export const WorkerRoutes = () => {

    const router = createBrowserRouter([
        {path: '/', element: <HomePage/>},
        {path: 'login', element: <LoginPage/>},
        {path: 'signup', element: <SignUp/>},
        {path: 'home', element: <HomePage/>},
        {path: 'profile', element: <ProfilePage/>},
        {path: 'shifts', element: <ShiftsPage/>}
    ]);

    return (
        <RouterProvider router={router}/>
)
}