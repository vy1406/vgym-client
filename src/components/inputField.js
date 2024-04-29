import React from "react";
import { TextField} from "@mui/material";

export default function InputField({handleOnChange}) {
   
    return (
        <TextField variant="outlined" onChange={handleOnChange}></TextField>
    );

}