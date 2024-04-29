import React from "react";
import { Button,Dialog,DialogTitle,DialogActions,DialogContent} from "@mui/material";

export default function DialogField(props) {
  
   
    return (
        <div>
        <Button variant="contained" color="info" onClick={props.handleClick}>
          Open Dialog
        </Button>
        <Dialog open={props.open} onClose={props.handleClose}>
          <DialogTitle>{props.title}</DialogTitle>
          <DialogContent>
            <p>{props.text}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={props.handleClose}>Close</Button>
            <Button onClick={props.handleContinue}>Continue</Button>
          </DialogActions>
        </Dialog>
      </div>

    );

}