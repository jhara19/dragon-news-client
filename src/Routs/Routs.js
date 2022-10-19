import {createBrowserRouter} from "react-router-dom";
import Main from "../layouts/Main";
import ErrorPage from "../components/ErrorPage";
import Home from "../components/Home";
import Contact from "../components/Contact";
import About from "../components/About";
import Signup from "../components/Signup";
import Login from "../components/Login"

export const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        errorElement: <ErrorPage></ErrorPage>,
        children:[
            {
              path: '/',
              element: <Home></Home>
            },
            {
                path: '/home',
                element: <Home></Home>
            },
            {
              path: '/about',
              element: <About></About>
            },
            {
                path: '/contact',
                element: <Contact></Contact>
            },

            {
              path: '/signup',
              element: <Signup></Signup>
            },
            {
                path: '/login',
                element: <Login></Login>
            },
        ]
       
        
    }
]);