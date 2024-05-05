import React from "react";
import { Button} from "@mui/material";

export default function SimpleButton({color,handleOnClick,buttonValue}) {
   
    return (
        <Button variant={veriant} color={color} onClick={handleOnClick}>
            {buttonValue}
        </Button>
    );

}
