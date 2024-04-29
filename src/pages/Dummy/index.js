import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routerConfig';
import InputField from '../../components/inputField';
import { useState } from 'react';
import DialogField from '../../components/dialogField';
import Snackbar from '../../components/simpleSnackbar';
import SimpleButton from '../../components/simpleButton';

export const SNACKBAR_TYPES = {
    SUCCESS: "success",
    ERROR: "error",
    INFO: "info",
    WARNING: "warning"
}
function Dummy(){
    const [isOpen, setIsOpen] = useState(false);
    const dialogTitle = "Dummy Title";
    const dialogText = "Dummy Text";
    const snackbarText = "Snackbar Dummy";

    const handleInputFieldOnChange = (e) => {
        console.log(e.target.value);
    }

    const handleSimpleButtonOnClick = () => {
        alert("LOL!!!");
    };

    const handleDialogOnClickOpen = () => {
        setIsOpen(true);
    }

    const handleDialogOnClickClose = () => {
        setIsOpen(false);
    };

    const handleDialogOnClickContinue = ()=> {
        setIsOpen(false);
        console.log("Continue was pressed!");
    }
    
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

    <SimpleButton handleOnClick={handleSimpleButtonOnClick}/>
    <br/>
    <InputField handleOnChange={handleInputFieldOnChange}/>
    <br/>
    <DialogField
     handleOnClick={handleDialogOnClickOpen} 
     handleOnClose={handleDialogOnClickClose}
     handleOnContinue={handleDialogOnClickContinue}
     isOpen={isOpen}
     title={dialogTitle}
     text={dialogText}
     />
     <br/>
     <Snackbar type={SNACKBAR_TYPES.ERROR} text={snackbarText}/>
        
        
    </>
}

export default Dummy;