import React, { createContext, useContext, useState } from "react";

const GlobalContext = createContext();

const TITLE_TEXT = "Dummy Title";
const BODY_TEXT = "Dummy Text";

export const SNACKBAR_TYPES = {
  SUCCESS: "success",
  ERROR: "error",
  INFO: "info",
  WARNING: "warning",
};

export const INIT_SNACKBAR = {
  isOpen: false,
  body: BODY_TEXT,
  type: SNACKBAR_TYPES.INFO,
  onClose: () => {},
};

export const INIT_DIALOG = {
    isOpen: false,
    title: TITLE_TEXT,
    body: BODY_TEXT,
    onClose: () => {},
    onContinue: () => {},
  }

const GlobalContextProvider = ({ children }) => {
  const [snackbarData, setSnackbarData] = useState(INIT_SNACKBAR);
  const [dialogData, setDialogData] = useState(INIT_DIALOG);

  return (
    <GlobalContext.Provider
      value={{ snackbarData, setSnackbarData, dialogData, setDialogData }}
    >
      {children}
    </GlobalContext.Provider>
  );
};

const useGlobalContext = () => {
  return useContext(GlobalContext);
};

export { GlobalContextProvider, useGlobalContext };
