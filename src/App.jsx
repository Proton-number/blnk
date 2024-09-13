import React from "react";
import "./App.css";
import Nav from "./Components/Nav";
import MobileNav from "./Components/MobileNav";
import Top from "./Components/Top";
import { ThemeProvider, createTheme, Box } from "@mui/material";
import Words from "./Components/Words";
import Featured from "./Components/Featured";
import Choose from "./Components/Choose";
import Footer from "./Components/Footer";
import LoadingComponent from "./Components/LoadingComponent";
import { motion } from "framer-motion";
motion;

function App() {
  const theme = createTheme({
    typography: {
      fontFamily: `"Bricolage Grotesque", sans-serif`,
    },
  });

  return (
    <ThemeProvider theme={theme}>
      {/* <LoadingComponent /> */}
      <Box
        // component={motion.div}
        // initial={{ opacity: 0, display: "none" }}
        // animate={{ opacity: 1, display: "block" }}
        // transition={{
        //   duration: 1,
        //   delay: 3.6,
        //   ease: [0, 0.71, 0.2, 1.01],
        // }}
        sx={{
          cursor: `url("data:image/svg+xml;charset=utf-8,<svg xmlns='http://www.w3.org/2000/svg' width='24' height='26' fill='none' viewBox='0 0 24 26'><path fill-rule='evenodd' clip-rule='evenodd' d='M1.69 2.69a2.357 2.357 0 0 1 2.495-.54L21.47 8.632a2.357 2.357 0 0 1-.255 4.494l-7.271 1.818-1.818 7.27a2.357 2.357 0 0 1-4.494.256L1.15 5.185a2.357 2.357 0 0 1 .54-2.495Z' fill='%23fff'/><path fill-rule='evenodd' clip-rule='evenodd' d='M3.633 3.622A.786.786 0 0 0 2.62 4.633L9.103 21.92a.786.786 0 0 0 1.498-.086l2.047-8.185 8.185-2.046a.785.785 0 0 0 .086-1.498L3.633 3.622Z' fill='%23010101'/></svg>") 0 0, auto`,
        }}
      >
        <Nav />
        <MobileNav />
        <Top />
        <Words />
        <Featured />
        <Choose />
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;
