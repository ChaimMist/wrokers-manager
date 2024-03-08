import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../../pages/home/homePage";
import {LoginPage} from "../../pages/login/loginPage";
import {SignUp} from "../../pages/signup/signup";
import {ProfilePage} from "../../pages/profile/profilePage";
import {WorkersPage} from "../../pages/workers/workersPage";
import {PermissionsPage} from "../../pages/permissions/permissions";
import UsersProvider from "../../contexts/usersContext/usersContext";


export const adminRouter = createBrowserRouter([
    {path: '/login', element: <LoginPage/>},
    {path: '/signup', element: <SignUp/>},
    {path: '/profile', element: <ProfilePage/>},
    {path: '/workers', element: <UsersProvider>
                                    <WorkersPage/>
                                </UsersProvider>
    },
    {path: '/permissions', element: <PermissionsPage/>},
    {path: '/', element: <HomePage/>},
]);