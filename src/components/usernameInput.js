import React from "react";
import { TextField } from "@mui/material";

function UsernameInput() {
  return (
    <>
      <label htmlFor="username">Username :</label>
      <TextField variant="outlined" type="text" label="Username" id="username"></TextField>
    </>
  );
}

export default UsernameInput;
