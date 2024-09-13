import React from "react";
import { Box, Typography, Stack, IconButton } from "@mui/material";
import FacebookIcon from "@mui/icons-material/Facebook";
import XIcon from "@mui/icons-material/X";
import InstagramIcon from "@mui/icons-material/Instagram";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

function Footer() {
  return (
    <Stack
      sx={{
        color: "white",
        backgroundColor: "black",
        padding: "30px",
      }}
      spacing={4}
    >
      <Typography variant="h3">Blnk</Typography>
      <Stack spacing={2} direction="row">
        <Box
          sx={{
            backgroundColor: "grey",
            width: "fit-content",
            borderRadius: "50%",
          }}
        >
          <IconButton sx={{ color: "white" }}>
            <FacebookIcon />
          </IconButton>
        </Box>
        <Box
          sx={{
            backgroundColor: "grey",
            width: "fit-content",
            borderRadius: "50%",
          }}
        >
          <IconButton sx={{ color: "white" }}>
            <XIcon />
          </IconButton>
        </Box>{" "}
        <Box
          sx={{
            backgroundColor: "grey",
            width: "fit-content",
            borderRadius: "50%",
          }}
        >
          <IconButton sx={{ color: "white" }}>
            <InstagramIcon />
          </IconButton>
        </Box>{" "}
        <Box
          sx={{
            backgroundColor: "grey",
            width: "fit-content",
            borderRadius: "50%",
          }}
        >
          <IconButton sx={{ color: "white" }}>
            <WhatsAppIcon />
          </IconButton>
        </Box>
      </Stack>
      <Stack spacing={3}>
        <Box sx={{ border: "1px solid grey" }} />
        <Stack
          direction="row"
          sx={{ alignItems: "center", justifyContent: "space-between" }}
        >
          <Typography variant="subtitle2">Blnk</Typography>
          <Typography variant="subtitle2">
            © 2024 All Rights Reserved.
          </Typography>
        </Stack>
      </Stack>
    </Stack>
  );
}

export default Footer;
