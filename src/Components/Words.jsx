import { Box, Typography, useMediaQuery } from "@mui/material";
import { motion } from "framer-motion";
import React from "react";

function Words() {
  return (
    <Box
      component={motion.div}
      initial={{ scale: 0.7 }}
      whileInView={{ scale: 1 }}
      transition={{
        duration: 1.2,
        delay: 0.2,
        ease: [0, 0.71, 0.2, 1.01],
      }}
      sx={{
        padding: { xs: "20px", lg: "50px" },
      }}
    >
      <Typography
        variant="h3"
        sx={{
          width: { xs: "70%", lg: "100%" },
          fontSize: { xs: "70px", sm: "100px", lg: "150px" },
        }}
      >
        <span style={{ opacity: "50%" }}>Celebrate your unique style</span> and
        express it with confidence.
      </Typography>
    </Box>
  );
}

export default Words;
