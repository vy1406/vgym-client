import React from "react";
import { TextField } from "@mui/material";
import { RESOURCE } from "../resource";

function PasswordInput() {
  return (
    <>
      <label htmlFor="password">{RESOURCE.PASSWORD}</label>
      <TextField
        variant="outlined"
        type="password"
        label="Password"
        id="password"
      ></TextField>
    </>
  );
}

export default PasswordInput;
