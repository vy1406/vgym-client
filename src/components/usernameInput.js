import React from "react";
import { TextField } from "@mui/material";

function UsernameInput({ handleOnChange,value }) {
  return (
    <>
      <label htmlFor="username">Username :</label>
      <TextField
        variant="outlined"
        type="text"
        label="Username"
        id="username"
        onChange={handleOnChange}
        value={value}
        name="username"
      ></TextField>
    </>
  );
}

export default UsernameInput;
