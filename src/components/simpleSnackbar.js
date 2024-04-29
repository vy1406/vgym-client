import React from "react";
import { Button,Snackbar,Alert} from "@mui/material";
import { useState } from "react";


export default function SimpleSnackbar({text,type}) {
   
    const [isOpen, setIsOpen] = useState(false);

    const handleClick = () => {
      setIsOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setIsOpen(false);
    };
  
   
  
    return (
      <div>
        <Button variant="contained" onClick={handleClick}>Open Snackbar</Button>
        <Snackbar open={isOpen} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={type}
            variant="filled"
            sx={{ width: '100%' }}
            >
            {text}
          </Alert>
         
          
        </Snackbar>
      </div>
    );

}