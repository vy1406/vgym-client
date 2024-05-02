import React from "react";
import { Link } from "react-router-dom";
import { ROUTES } from "../../routerConfig";
import SimpleInputField from "../../components/simpleInputField";
import SimpleDialog from "../../components/simpleDialog";
import SimpleButton from "../../components/simpleButton";
import { Button } from "@mui/material";
import { SNACKBAR_TYPES, useGlobalContext } from "../../context/globalContext";

function Dummy() {
  const {setSnackbarData } = useGlobalContext();
  const {setDialogData} = useGlobalContext();

  const handleInputFieldOnChange = (e) => {
    console.log(e.target.value);
  };

  const handleSimpleButtonOnClick = () => {
    alert("LOL!!!");
  };

  const handleDialogButtonOnClick = () => {
    setDialogData({
      isOpen: true,
      title: "My Dialog title",
      body: "My Dialog body text",
      onClose: () => {
        console.log("Close dialog was pressed!");
      },
      onContinue: () => {
        console.log("Continiue dialog was pressed!");
      },
    });
  };

 

  const handleSnackbarButtonOnClick = () => {
    setSnackbarData({
      isOpen: true,
      title: "My title text",
      type: SNACKBAR_TYPES.INFO,
      onClose: () => {
        console.log("Close was pressed!");
      },
      onOpen: () => {
        console.log("Open was pressed!");
      },
    });
  };

  return (
    <>
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

      <SimpleButton handleOnClick={handleSimpleButtonOnClick} />
      <br />
      <SimpleInputField handleOnChange={handleInputFieldOnChange} />
      <br />
      <SimpleDialog/>
      <br />
      <Button variant="contained" onClick={handleSnackbarButtonOnClick}>
        Open Snackbar
      </Button>
      <br />
      <Button variant="contained" onClick={handleDialogButtonOnClick}> 
        Open Dialog
      </Button>
    </>
  );
}

export default Dummy;
