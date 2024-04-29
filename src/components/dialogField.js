import React from "react";
import { Button,Dialog,DialogTitle,DialogActions,DialogContent} from "@mui/material";

export default function DialogField({handleOnClick,handleOnClose,handleOnContinue,isOpen,text,title}) {
  
   
    return (
        <div>
        <Button variant="contained" color="info" onClick={handleOnClick}>
          Open Dialog
        </Button>
        <Dialog open={isOpen} onClose={handleOnClose}>
          <DialogTitle>{title}</DialogTitle>
          <DialogContent>
            <p>{text}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleOnClose}>Close</Button>
            <Button onClick={handleOnContinue}>Continue</Button>
          </DialogActions>
        </Dialog>
      </div>

    );

}