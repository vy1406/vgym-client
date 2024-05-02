import { Box, Button } from "@mui/material";
import React from "react";
import UsernameInput from "../../components/usernameInput";
import PasswordInput from "../../components/passwordInput";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routerConfig";
function Login() {
  const navigate = useNavigate();

  const handleOnLoginClick = () => {
    
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
        <UsernameInput/>    
        <PasswordInput/>
        <Button variant="text" onClick={handleOnLoginClick}>
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
