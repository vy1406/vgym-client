import React from "react";
import { TextField } from "@mui/material";
import { RESOURCE } from "../resource";

function PasswordInput({handleOnChange,value}) {
  return (
    <>
      <label htmlFor="password">{RESOURCE.PASSWORD}</label>
      <TextField
        variant="outlined"
        type="password"
        label="Password"
        id="password"
        onChange={handleOnChange}
        value={value}
        name="password"
      ></TextField>
    </>
  );
}

export default PasswordInput;
