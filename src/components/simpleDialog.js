import React from "react";
import { Button,Dialog,DialogTitle,DialogActions,DialogContent} from "@mui/material";
import { INIT_DIALOG, useGlobalContext } from "../context/globalContext";

export default function SimpleDialog({}) {
  const {dialogData,setDialogData} = useGlobalContext();

  const handleOnClose = () => {
    dialogData.onClose();
    setDialogData(INIT_DIALOG);
  };

  const handleOnContinue = () => {
    dialogData.onContinue();
    setDialogData(INIT_DIALOG);
  };

  if (!dialogData?.isOpen) {
    return null;
  }
   
    return (
        <div>
        
        <Dialog open={dialogData.isOpen} onClose={handleOnClose}>
          <DialogTitle>{dialogData.title}</DialogTitle>
          <DialogContent>
            <p>{dialogData.body}</p>
          </DialogContent>
          <DialogActions>
            <Button onClick={handleOnClose}>Close</Button>
            <Button onClick={handleOnContinue}>Continue</Button>
          </DialogActions>
        </Dialog>
      </div>

    );

}