import { Box, Button } from "@mui/material";
import React, { useState } from "react";
import UsernameInput from "../../components/usernameInput";
import PasswordInput from "../../components/passwordInput";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routerConfig";
import HttpService from "../../services/httpService";
import { API_ENDPOINTS } from "../../apiEndpoints";
import User from "../../models/user";
import { SNACKBAR_TYPES, useGlobalContext } from "../../context/globalContext";
import { RESOURCE } from "../../resource";
function Signup() {
  const navigate = useNavigate();
  const { setSnackbarData } = useGlobalContext();
  const [user, setUser] = useState(new User());
  const httpService = new HttpService(API_ENDPOINTS.SIGN_UP);
    
  const handleOnSignupClick = (user) => {
    httpService
      .post(user)
      .then((response) => {
        if (response.data.errorCode === 0) {
          navigate(ROUTES.DASHBOARD);
          showSnackbar(response.data.errorMessage,SNACKBAR_TYPES.SUCCESS);
        } else {
          showSnackbar(response.data.errorMessage,SNACKBAR_TYPES.ERROR);
        }
      })
      .catch((error) => console.log(error));
  };

  const showSnackbar = (message,type) => {
    setSnackbarData({
      isOpen: true,
      type: type,
      body: message,
      onClose: () => {
        console.log("onClose was invoked");
      },
    });
  };

  const handleOnChnage = (e) => {
    let updated = { ...user };
    updated[e.target.name] = e.target.value;
    setUser(updated);
  };
  const handleOnCancelClick = () => {
    navigate(ROUTES.BASE);
  };

  return (
    <>
      <Box
        component="form"
        sx={{
          display: "flex",
          flexDirection: "column",
          gap: 2,
          "& .MuiTextField-root": { width: "25ch" },
        }}
      >
        <h1>Login</h1>
        <UsernameInput handleOnChange={handleOnChnage} value={user.username} />
        <PasswordInput handleOnChange={handleOnChnage} value={user.password} />
        <Button variant="text" onClick={() => handleOnSignupClick(user)}>
          {RESOURCE.SIGN_UP}
        </Button>
        <Button variant="text" onClick={handleOnCancelClick}>
          {RESOURCE.CANCEL}
        </Button>
      </Box>
    </>
  );
}

export default Signup;