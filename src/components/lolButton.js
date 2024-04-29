import React from "react";
import { Button} from "@mui/material";

export default function LolButton(props) {
   
    return (
        <Button variant="contained" color="success" onClick={props.handleOnClick}>
            LOL ME
        </Button>
    );

}
