import React from "react";
import { TextField} from "@mui/material";

export default function InputField(props) {
   
    return (
        <TextField variant="outlined" onChange={props.handleOnChange}></TextField>
    );

}