import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "../../pages/home/homePage";
import {ProfilePage} from "../../pages/profile/profilePage";
import {AdminPage} from "../../pages/admin/adminPage";
import {LoginPage} from "../../pages/login/loginPage";
import {SignUp} from "../../pages/signup/signup";
export const AdminRoutes = () => {

    const router = createBrowserRouter([
        {path: '/', element: <HomePage/>},
        {path: 'login', element: <LoginPage/>},
        {path: 'signup', element: <SignUp/>},
        {path: 'home', element: <HomePage/>},
        {path: 'profile', element: <ProfilePage/>},
        {path: 'admin', element: <AdminPage/>}
    ]);

    return (
        <RouterProvider router={router}/>
    )
}