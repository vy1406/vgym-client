
import React from 'react';
import { RouterProvider,createBrowserRouter } from 'react-router-dom';
import Dummy from "./pages/dummy"
import Dashboard from "./pages/dashboard"
import Login from "./pages/login"
import Signup from "./pages/signup"
import Notes from "./pages/notes"
import Profile from "./pages/profile"
import Todo from "./pages/todo"
import Workouts from "./pages/workouts"
import NotFound from './pages/notFound';

const myRouter = createBrowserRouter([
    {
        path: '/',
        element: <Dummy/>,
        errorElement: <NotFound/>
    },
    {
        path: '/dashboard',
        element: <Dashboard/>
    },
    {
        path: '/login',
        element: <Login/>
    },
    {
        path: '/signup',
        element: <Signup/>
    },
    {
        path: '/notes',
        element: <Notes/>
    },
    {
        path: '/profile',
        element: <Profile/>
    },
    {
        path: '/todo',
        element: <Todo/>
    },
    {
        path: '/workouts',
        element: <Workouts/>
    }
  ]);
function App() {
    return <RouterProvider router={myRouter}/>
}

export default App;