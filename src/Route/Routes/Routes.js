import React from 'react';
import { createBrowserRouter } from 'react-router-dom';
import Appointment from '../../Appointment/Appointment/Appointment';
import Dashboard from '../../Dashboard/Dashboard/Dashboard';
import Main from '../../Layout/Main';
import AboutUs from '../../Pages/About/AboutUs/AboutUs';
import ErrorPage from '../../Pages/ErrorPage/ErrorPage';
import Home from '../../Pages/Home/Home/Home';
import Login from '../../Pages/Home/Home/Login/Login';
import Signup from '../../Pages/Home/Home/Login/Signup';
import PrivateRoute from '../PrivateRoute/PrivateRoute';

const routes = createBrowserRouter([
    {
        path: '/',
        element: <Main></Main>,
        children: [
            {
                path: '/',
                element: <Home></Home>,
            },
            {
                path: '/about',
                element: <AboutUs></AboutUs>
            },
            {
                path: '/login',
                element: <Login></Login>,
            },
            {
                path: '/signup',
                element: <Signup></Signup>,
            },
            {
                path: '/appointment',
                element: <Appointment></Appointment>,
            }, 
            {
                path: '/dashboard',
                element: <PrivateRoute>  <Dashboard></Dashboard> </PrivateRoute>
            }
        ]
    },
    {
        path : '*',
        element : <ErrorPage></ErrorPage>
    }
])

export default routes;