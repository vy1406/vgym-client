import Dummy from "./pages/dummy"
import Dashboard from "./pages/dashboard"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Notes from "./pages/notes"
import Profile from "./pages/profile"
import Todo from "./pages/todo"
import Workouts from "./pages/workouts"
import NotFound from './pages/notFound';
import { ROUTES } from './Routes';
import { createBrowserRouter } from "react-router-dom"
import React from 'react';

export const myRouter = createBrowserRouter([
    {
        path: ROUTES.Base,
        element: <Dummy/>,
        errorElement: <NotFound/>
    },
    {
        path: ROUTES.Dashboard,
        element: <Dashboard/>
    },
    {
        path: ROUTES.Login,
        element: <Login/>
    },
    {
        path: ROUTES.Signup,
        element: <Signup/>
    },
    {
        path: ROUTES.Notes,
        element: <Notes/>
    },
    {
        path: ROUTES.Profile,
        element: <Profile/>
    },
    {
        path: ROUTES.Todo,
        element: <Todo/>
    },
    {
        path: ROUTES.Workouts,
        element: <Workouts/>
    }
  ]);