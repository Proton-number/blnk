import React from "react";
import { AppBar, Toolbar, Typography, Stack } from "@mui/material";
import { motion } from "framer-motion";

function Nav() {
  return (
    <AppBar
      id="desktopNav"
      sx={{
        backgroundColor: "black",
      }}
      elevation={0}
    >
      <Toolbar>
        <Typography variant="h4" sx={{ flexGrow: { sm: 1.7, lg: 0.4 } }}>
          Blnk
        </Typography>
        <Stack
          direction="row"
          spacing={8}
          sx={{ flexGrow: { sm: 3, lg: 0.4 } }}
        >
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            component={motion.p}
            whileHover={{ textDecoration: "underline", y: -2 }}
          >
            Home
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            component={motion.p}
            whileHover={{ textDecoration: "underline", y: -2 }}
          >
            About
          </Typography>
          <Typography
            variant="body2"
            sx={{ fontWeight: "bold", cursor: "pointer" }}
            component={motion.p}
            whileHover={{ textDecoration: "underline", y: -2 }}
          >
            Contact
          </Typography>
        </Stack>
        <Typography
          variant="body2"
          sx={{ fontWeight: "bold", cursor: "pointer" }}
          component={motion.p}
          whileHover={{ textDecoration: "underline", y: -2 }}
        >
          Catalog
        </Typography>
      </Toolbar>
    </AppBar>
  );
}

export default Nav;
