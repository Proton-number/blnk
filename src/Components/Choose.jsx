import { Box, Stack, Typography, Button, useMediaQuery } from "@mui/material";
import React from "react";
import { ParallaxLayer } from "@react-spring/parallax";
import { motion } from "framer-motion";

function Choose() {
  return (
    <Box>
      <Stack
        component={motion.div}
        initial={{ opacity: 0, y: 80 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        direction={{ xs: "column", sm: "row" }}
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
          padding: "30px",
        }}
        spacing={{ xs: 4, sm: 0 }}
      >
        <Typography
          variant="h3"
          sx={{
            width: { sm: "50%", lg: "40%" },
            fontSize: { xs: "50px", sm: "50px", lg: "60px" },
          }}
        >
          <span style={{ opacity: "50%" }}>Blnk</span> Puts You Ahead.
        </Typography>

        <Stack spacing={3} sx={{ width: { sm: "40%", lg: "30%" } }}>
          <Typography variant="subtitle2" sx={{ textAlign: "justify" }}>
            Wearing Blnk is more than just fashion—it's a bold declaration of
            individuality. At Blnk, we believe in celebrating what makes you
            unique, empowering you to embrace your true self with confidence and
            style.
          </Typography>
          <Button
            variant="contained"
            disableElevation
            sx={{
              textTransform: "none",
              padding: "8px ",
              height: "45px",
              width: "150px",
              backgroundColor: "hsl(356, 44%, 58%)",
              "&:hover": {
                backgroundColor: "transparent",
                border: " 2px solid hsl(356, 44%, 58%)",
                color: "hsl(356, 44%, 58%)",
              },
            }}
          >
            Shop All
          </Button>
        </Stack>
      </Stack>
      <Box
        className="choose-bg"
        component="div"
        sx={{
          backgroundSize: { xs: "cover", sm: "cover" },
          backgroundPosition: { xs: "center", sm: "top" },
          height: { xs: "364px", sm: "400px", md: "800px" },
        }}
      />
    </Box>
  );
}

export default Choose;
