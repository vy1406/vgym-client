import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../Routes';
function Dummy(){
    
    return <>
    <ul>
        <li>
            <Link to={ROUTES.Base}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.Dashboard}>Dashboard</Link>
        </li>
        <li>
            <Link to={ROUTES.Login}>Login</Link>
        </li>
        <li>
            <Link to={ROUTES.Notes}>Notes</Link>
        </li>
        <li>
            <Link to={ROUTES.Profile}>Profile</Link>
        </li>
        <li>
            <Link to={ROUTES.Signup}>Sign up</Link>
        </li>
        <li>
            <Link to={ROUTES.Todo}>Todo</Link>
        </li>
        <li>
            <Link to={ROUTES.Workouts}>Workouts</Link>
        </li>
    </ul>
        
        
    </>
}

export default Dummy;