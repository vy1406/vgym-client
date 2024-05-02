import React from "react";
import { TextField} from "@mui/material";

export default function SimpleInputField({handleOnChange}) {
   
    return (
        <TextField variant="outlined" onChange={handleOnChange}></TextField>
    );

}