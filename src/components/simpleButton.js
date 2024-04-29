import React from "react";
import { Button} from "@mui/material";

export default function SimpleButton({handleOnClick}) {
   
    return (
        <Button variant="contained" color="success" onClick={handleOnClick}>
            LOL ME
        </Button>
    );

}
