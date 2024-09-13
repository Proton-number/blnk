import React, { useState } from "react";
import {
  Box,
  Typography,
  Toolbar,
  IconButton,
  Drawer,
  Stack,
  AppBar,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";
import { motion } from "framer-motion";

function MobileNav() {
  const [isDrawerOpen, setisDrawerOpen] = useState(false);
  return (
    <>
      <AppBar id="mobileNav" sx={{ backgroundColor: "black" }}>
        <Toolbar>
          <Typography variant="h4" sx={{ flexGrow: 1 }}>
            Blnk
          </Typography>
          <IconButton
            edge="start"
            aria-label="menu"
            onClick={() => setisDrawerOpen(true)}
          >
            <MenuIcon
              fontSize="large"
              sx={{
                color: "white",
              }}
            />
          </IconButton>
        </Toolbar>
      </AppBar>

      <Drawer
        anchor="right"
        open={isDrawerOpen}
        onClose={() => setisDrawerOpen(false)}
        PaperProps={{
          sx: {
            backgroundColor: "black",
            color: "white",
          },
        }}
      >
        <Stack spacing={8} sx={{ width: "300px" }}>
          <Toolbar>
            <IconButton
              edge="end"
              aria-label="close-icon"
              onClick={() => setisDrawerOpen(false)}
            >
              <CloseIcon
                fontSize="large"
                sx={{
                  color: "white",
                }}
              />
            </IconButton>
          </Toolbar>
          <Stack
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
            }}
            spacing={8}
          >
            <Typography
              sx={{
                cursor: "pointer",
              }}
              component={motion.p}
              whileHover={{ textDecoration: "underline", y: -2 }}
            >
              Home
            </Typography>
            <Typography
              sx={{ cursor: "pointer" }}
              component={motion.p}
              whileHover={{ textDecoration: "underline", y: -2 }}
            >
              About
            </Typography>
            <Typography
              sx={{ cursor: "pointer" }}
              component={motion.p}
              whileHover={{ textDecoration: "underline", y: -2 }}
            >
              Contact
            </Typography>
            <Typography
              sx={{ cursor: "pointer" }}
              component={motion.p}
              whileHover={{ textDecoration: "underline", y: -2 }}
            >
              Catalog
            </Typography>
          </Stack>
        </Stack>
      </Drawer>
    </>
  );
}

export default MobileNav;
