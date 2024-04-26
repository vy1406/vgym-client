import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routerConfig';
function Dummy(){
    
    return <>
    <ul>
        <li>
            <Link to={ROUTES.BASE}>Home</Link>
        </li>
        <li>
            <Link to={ROUTES.DASHBOARD}>Dashboard</Link>
        </li>
        <li>
            <Link to={ROUTES.LOGIN}>Login</Link>
        </li>
        <li>
            <Link to={ROUTES.NOTES}>Notes</Link>
        </li>
        <li>
            <Link to={ROUTES.PROFILE}>Profile</Link>
        </li>
        <li>
            <Link to={ROUTES.SIGN_UP}>Sign up</Link>
        </li>
        <li>
            <Link to={ROUTES.TODO}>Todo</Link>
        </li>
        <li>
            <Link to={ROUTES.WORKOUTS}>Workouts</Link>
        </li>
    </ul>
        
        
    </>
}

export default Dummy;