import {createBrowserRouter} from "react-router-dom";
import {LoginPage} from "../../pages/login/loginPage";
import {SignUp} from "../../pages/signup/signup";


export const nonUserRoute = createBrowserRouter([
    {path: 'login', element: <LoginPage/>},
    {path: 'signup', element: <SignUp/>},
    {path: '/*', element: <LoginPage/>},
]);