import React from "react";
import { Button, Snackbar, Alert } from "@mui/material";
import { INIT_SNACKBAR, useGlobalContext } from "../context/globalContext";

export default function SimpleSnackbar() {
  const { snackbarData, setSnackbarData } = useGlobalContext();

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    snackbarData.onClose();
    setSnackbarData(INIT_SNACKBAR);
  };

  if (!snackbarData?.isOpen) {
    return null;
  }

  return (
    <div>
      <Snackbar
        open={snackbarData.isOpen}
        autoHideDuration={3000}
        onClose={handleClose}
      >
        <Alert
          onClose={handleClose}
          severity={snackbarData.type}
          variant="filled"
          sx={{ width: "100%" }}
        >
          {snackbarData.body}
        </Alert>
      </Snackbar>
    </div>
  );
}
