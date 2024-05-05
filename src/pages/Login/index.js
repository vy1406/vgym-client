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
function Login() {
  const navigate = useNavigate();
  const { setSnackbarData } = useGlobalContext();
  const [user, setUser] = useState(new User());
  const httpService = new HttpService(API_ENDPOINTS.LOGIN);
  console.log(httpService.apiurl);

  const handleOnLoginClick = (user) => {
    console.log(httpService.apiurl);
    httpService
      .post(user)
      .then((response) => {
        if (response.data.errorCode === 0) {
          navigate(ROUTES.DASHBOARD);
        } else {
          console.log(response.data);
          console.log(response.data.errorMessage);
          showSnackbar(response.data.errorMessage);
        }
      })
      .catch((error) => console.log(error));
  };

  const showSnackbar = (message) => {
    setSnackbarData({
      isOpen: true,
      type: SNACKBAR_TYPES.ERROR,
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
  const handleOnSignUpClick = () => {
    navigate(ROUTES.SIGN_UP);
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
        <Button variant="text" onClick={() => handleOnLoginClick(user)}>
          Login
        </Button>
        <Button variant="text" onClick={handleOnSignUpClick}>
          Sign Up
        </Button>
      </Box>
    </>
  );
}

export default Login;
