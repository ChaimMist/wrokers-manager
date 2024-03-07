import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../../pages/home/homePage";
import {LoginPage} from "../../pages/login/loginPage";
import {SignUp} from "../../pages/signup/signup";
import {ProfilePage} from "../../pages/profile/profilePage";
import {WorkersPage} from "../../pages/workers/workersPage";
import {AdminPage} from "../../pages/admin/adminPage";
import {PermissionsPage} from "../../pages/permissions/permissions";


export const adminRouter = createBrowserRouter([
    {path: '/home', element: <HomePage/>},
    {path: '/login', element: <LoginPage/>},
    {path: '/signup', element: <SignUp/>},
    {path: '/profile', element: <ProfilePage/>},
    {path: '/workers', element: <WorkersPage/>},
    {path: '/admin', element: <AdminPage/>},
    {path: '/permissions', element: <PermissionsPage/>},
    {path: '/', element: <HomePage/>},
]);