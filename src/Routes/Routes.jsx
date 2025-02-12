import {
    createBrowserRouter,
    Navigate,
 
  } from "react-router-dom";
import HomeLayout from "../MainLayout/HomeLayout";
import CategoryNews from "../Pages/CategoryNews";
import AuthLayout from "../MainLayout/AuthLayout";
import Login from "../Pages/Login";
import Register from "../Pages/Register";
import NewsDetails from "../Pages/NewsDetails";
import PrivateRoute from "./PrivateRoute";
  const router = createBrowserRouter([
    {
      path: "/",
      element: <HomeLayout></HomeLayout>,
      children: [
        {
          path: "",
          element: <Navigate to = {'/category/01'}></Navigate>,
        },
        {
          path: '/category/:id',
          element:<CategoryNews></CategoryNews>,
          loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/category/${params.id}`),
        }
      ]
    },
    {
      path: '/auth',
      element:<AuthLayout></AuthLayout>,
      children:[
        {
          path: '/auth/login',
          element: <Login></Login>,
        },
        {
          path: '/auth/register',
          element:<Register></Register>,
        }
      ],
     
    },
    {
      path: '/news/:id',
      element:<PrivateRoute><NewsDetails></NewsDetails></PrivateRoute>,
      loader: ({params}) => fetch(`https://openapi.programming-hero.com/api/news/${params.id}`),
    },
    {
      path: '*',
      errorElement: <h2>status 404 | Page Not Found</h2>
    }
  ]);
  export default router;