import React from 'react';
import { Link } from 'react-router-dom';
function Dummy(){
    
    return <>
    <ul>
        <li>
            <Link to="/">Home</Link>
        </li>
        <li>
            <Link to="/dashboard">Dashboard</Link>
        </li>
        <li>
            <Link to="/login">Login</Link>
        </li>
        <li>
            <Link to="/notes">Notes</Link>
        </li>
        <li>
            <Link to="/profile">Profile</Link>
        </li>
        <li>
            <Link to="/signup">Sign up</Link>
        </li>
        <li>
            <Link to="/todo">Todo</Link>
        </li>
        <li>
            <Link to="/workouts">Workouts</Link>
        </li>
    </ul>
        
        
    </>
}

export default Dummy;