import Dummy from "./pages/Dummy"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/Signup"
import Notes from "./pages/Notes"
import Profile from "./pages/Profile"
import Todo from "./pages/Todo"
import Workouts from "./pages/Workouts"
import NotFound from './pages/NotFound';
import { createBrowserRouter } from "react-router-dom"
import React from 'react';
import LandingPage from "./pages/LandingPage"

export const ROUTES ={
    BASE: "/",
    LOGIN: "/login",
    PROFILE: "/profile",
    SIGN_UP: "/signup",
    DASHBOARD: "/dashboard",
    WORKOUTS: "/workouts",
    TODO: "/todo",
    NOTES: "/notes",  
}

export const myRouter = createBrowserRouter([
    {
        path: ROUTES.BASE,
        element: <LandingPage/>,
        errorElement: <NotFound/>
    },
    {
        path: ROUTES.DASHBOARD,
        element: <Dashboard/>
    },
    {
        path: ROUTES.LOGIN,
        element: <Login/>
    },
    {
        path: ROUTES.SIGN_UP,
        element: <Signup/>
    },
    {
        path: ROUTES.NOTES,
        element: <Notes/>
    },
    {
        path: ROUTES.PROFILE,
        element: <Profile/>
    },
    {
        path: ROUTES.TODO,
        element: <Todo/>
    },
    {
        path: ROUTES.WORKOUTS,
        element: <Workouts/>
    }
  ]);