import React from 'react';
import { Link } from 'react-router-dom';
import { ROUTES } from '../../routerConfig';
import LolButton from '../../components/lolButton';
import InputField from '../../components/inputField';
import DialogButton from '../../components/dialogField';
import { useState } from 'react';
import DialogField from '../../components/dialogField';
import Snackbar from '../../components/simpleSnackbar';
function Dummy(){
    const [open, setOpen] = useState(false);
    const dialogTitle = "Dummy Title";
    const dialogText = "Dummy Text";
    const snackbarButtonType = "error";
    const snackbarText = "Snackbar Dummy";

    const handleInputFieldChange = (e) => {
        console.log(e.target.value);
    }

    const handleLolButtonClick = () => {
        alert("LOL!!!");
    };

    

    const handleDialogClickOpen = () => {
        setOpen(true);
    }

    const handleDialogClickClose = () => {
        setOpen(false);
    };

    const handleDialogClickContinue = ()=> {
        setOpen(false);
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

    <LolButton handleOnClick={handleLolButtonClick}/>
    <br/>
    <InputField handleOnChange={handleInputFieldChange}/>
    <br/>
    <DialogField
     handleClick={handleDialogClickOpen} 
     handleClose={handleDialogClickClose}
     handleContinue={handleDialogClickContinue}
     open={open}
     title={dialogTitle}
     text={dialogText}
     />
     <br/>
     <Snackbar type={snackbarButtonType} text={snackbarText}/>
        
        
    </>
}

export default Dummy;