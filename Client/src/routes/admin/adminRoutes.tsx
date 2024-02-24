import {createBrowserRouter, RouterProvider} from "react-router-dom";
import {HomePage} from "../../pages/home/homePage";
import {ProfilePage} from "../../pages/profile/profilePage";
import {AdminPage} from "../../pages/admin/adminPage";
import {LoginPage} from "../../pages/login/loginPage";
export const AdminRoutes = () => {

    const router = createBrowserRouter([
        {path: '/', element: <HomePage/>},
        {path: 'login', element: <LoginPage/>},
        {path: 'home', element: <HomePage/>},
        {path: 'profile', element: <ProfilePage/>},
        {path: 'admin', element: <AdminPage/>}
    ]);

    return (
        <RouterProvider router={router}/>
    )
}