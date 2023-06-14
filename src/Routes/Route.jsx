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
import Instructor from "../Pages/Home/Instructor";
import Classes from "../Pages/Home/Classes";
import ErrorPage from "../Pages/Shared/ErrorPage";
import Payment from "../Pages/Dashboard/Payment";
import CheckoutForm from "../Pages/Dashboard/CheckoutForm";
import PaymentHistory from "../Pages/Dashboard/PaymentHistory";
import Feedback from "../components/Feedback";

export const router = createBrowserRouter([
    {
      path: "/",
      errorElement:<ErrorPage></ErrorPage>,
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
        {
            path:'/instructor',
            element: <Instructor></Instructor>
        },
        {
            path:'/classes',
            element: <Classes></Classes>
        },
        
      ]
    },
    {
      path:'dashboard',
      element:<Dashboard></Dashboard>,
      children:[
        {
          path:'allUser',
          element:<AllUser></AllUser>
        },
        {
          path:'allClasses',
          element:<AllClasses></AllClasses>
        },
        {
          path:'addClasses',
          element:<AddClasses></AddClasses>
        },
        {
          path:'myClasses',
          element:<MyClasses></MyClasses>
        },
        {
          path:'mySelectedClasses',
          element:<MySelectedClasses></MySelectedClasses>,
          
        },
        {
          path:'paymentHistory',
          element:<PaymentHistory></PaymentHistory>,
          
        },
        {
          path:'payment/:id',
          element:<Payment></Payment>,
          loader:({params})=>fetch(`https://sam-photgrapy-server.vercel.app/payments/${params.id}`)
          
        },
        {
          path:'checkout',
          element:<CheckoutForm></CheckoutForm>
        },
        {
          path:'myEnrolledClasses',
          element:<MyEnrolledClasses></MyEnrolledClasses>
        },
        {
          path:'feedback/:id',
          element:<Feedback></Feedback>,
          loader:({params})=>fetch(`https://sam-photgrapy-server.vercel.app/feedback/${params.id}`),
        },
      ]
    }
  ]);