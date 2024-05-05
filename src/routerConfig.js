import Dummy from "./pages/Dummy"
import Dashboard from "./pages/Dashboard"
import Login from "./pages/Login"
import Signup from "./pages/signup"
import Notes from "./pages/notes"
import Profile from "./pages/profile"
import Todo from "./pages/todo"
import Workouts from "./pages/workouts"
import NotFound from './pages/notFound';
import { createBrowserRouter } from "react-router-dom"
import React from 'react';

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
        element: <Dummy/>,
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