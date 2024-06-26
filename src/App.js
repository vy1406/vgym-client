import React from "react";
import { RouterProvider } from "react-router-dom";
import { myRouter } from "./routerConfig";
import SimpleSnackbar from "./components/simpleSnackbar";
import SimpleDialog from "./components/simpleDialog";

function App() {
  return (
    <>
      <RouterProvider router={myRouter} />
      <SimpleSnackbar />
      <SimpleDialog/>
    </>
  );
}

export default App;
