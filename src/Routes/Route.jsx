import {
    createBrowserRouter,
  } from "react-router-dom";
import Main from "../Layout/Main";
import Home from "../Pages/Home/Home/Home";
import Login from "../Pages/Login/Login";
import Registration from "../Pages/Registration/Registration";
import Dashboard from "../Layout/Dashboard";
import AllUser from "../Pages/Dashboard/AllUser";
import AllClasses from "../Pages/Dashboard/AllClasses";
import AddClasses from "../Pages/Dashboard/AddClasses";
import MyClasses from "../Pages/Dashboard/MyClasses";
import MySelectedClasses from "../Pages/Dashboard/MySelectedClasses";
import MyEnrolledClasses from "../Pages/Dashboard/MyEnrolledClasses";
import AdminRoute from "./AdminRoute";
import InstructorRoute from "./InstructorRoute";

export const router = createBrowserRouter([
    {
      path: "/",
      element:<Main></Main>,
      children:[
        {
            path:'/',
            element: <Home></Home>
        },
        {
            path:'/login',
            element: <Login></Login>
        },
        {
            path:'/register',
            element: <Registration></Registration>
        },
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'allUser',
          element:<AdminRoute><AllUser></AllUser></AdminRoute>
        },
        {
          path:'allClasses',
          element:<AdminRoute><AllClasses></AllClasses></AdminRoute>
        },
        {
          path:'addClasses',
          element:<AddClasses></AddClasses>
        },
        {
          path:'myClasses',
          element:<InstructorRoute><MyClasses></MyClasses></InstructorRoute>
        },
        {
          path:'mySelectedClasses',
          element:<InstructorRoute><MySelectedClasses></MySelectedClasses></InstructorRoute>
        },
        {
          path:'myEnrolledClasses',
          element:<MyEnrolledClasses></MyEnrolledClasses>
        },
      ]
    }
  ]);