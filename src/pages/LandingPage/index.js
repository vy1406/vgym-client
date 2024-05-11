import React, { useEffect } from "react";
import { Box, CssBaseline, Typography, createTheme } from "@mui/material";
import { ThemeProvider } from "@emotion/react";
import "./index.css";
import { useNavigate } from "react-router-dom";
import { ROUTES } from "../../routerConfig";

const theme = createTheme({
  typography: {
    fontFamily: "Roboto",
    fontSize: 14,
    fontWeightLight: 300,
    fontWeightRegular: 400,
    fontWeightMedium: 500,
    fontWeightBold: 700,
  },
});

function LandingPage() {
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      navigate(ROUTES.LOGIN,4000);
    }, 4000);
  },[]);

  return (
    <>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Box component="section" className="box" sx={{ padding: "20px" }}>
          <Typography
            variant="h1"
            fontWeight="fontWeightBold"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "turquoise",
            }}
          >
            Welcome To Vgym
          </Typography>
          <Typography
            variant="h4"
            fontWeight="fontWeightBold"
            sx={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              color: "thistle",
            }}
          >
            Where your fittnes jurney begins
          </Typography>
        </Box>
      </ThemeProvider>
    </>
  );
}

export default LandingPage;
