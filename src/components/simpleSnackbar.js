import React from "react";
import { Button,Snackbar,Alert} from "@mui/material";
import { useState } from "react";


export default function SimpleSnackbar(props) {
   
    const [open, setOpen] = useState(false);

    const handleClick = () => {
      setOpen(true);
    };
  
    const handleClose = (event, reason) => {
      if (reason === 'clickaway') {
        return;
      }
  
      setOpen(false);
    };
  
   
  
    return (
      <div>
        <Button variant="contained" onClick={handleClick}>Open Snackbar</Button>
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert
            onClose={handleClose}
            severity={props.type}
            variant="filled"
            sx={{ width: '100%' }}
            >
            {props.text}
          </Alert>
         
          
        </Snackbar>
      </div>
    );

}