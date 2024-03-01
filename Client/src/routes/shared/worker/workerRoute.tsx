import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../../../pages/home/homePage";
import {LoginPage} from "../../../pages/login/loginPage";
import {SignUp} from "../../../pages/signup/signup";
import {ProfilePage} from "../../../pages/profile/profilePage";
import {AdminPage} from "../../../pages/admin/adminPage";


export const adminRouter = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: 'home', element: <HomePage/>},
    {path: 'login', element: <LoginPage/>},
    {path: 'signup', element: <SignUp/>},
    {path: 'profile', element: <ProfilePage/>},
    {path: 'admin', element: <AdminPage/>}
]);