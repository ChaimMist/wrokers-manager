import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../../pages/home/homePage";
import {LoginPage} from "../../pages/login/loginPage";
import {SignUp} from "../../pages/signup/signup";
import {ProfilePage} from "../../pages/profile/profilePage";
import {WorkersPage} from "../../pages/workers/workersPage";



export const workerRouter = createBrowserRouter([
    {path: '/', element: <HomePage/>},
    {path: 'home', element: <HomePage/>},
    {path: 'login', element: <LoginPage/>},
    {path: 'signup', element: <SignUp/>},
    {path: 'profile', element: <ProfilePage/>},
    {path: 'workers', element: <WorkersPage/>},
]);