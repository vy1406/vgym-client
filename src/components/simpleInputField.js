import React from "react";
import { TextField} from "@mui/material";

export default function SimpleInputField({lable,defaultValue}) {
   
    return (
        <TextField variant={veriant} label={lable} defaultValue={defaultValue}/>
    );

}