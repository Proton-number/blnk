import {
  Box,
  Stack,
  Typography,
  Button,
  Paper,
  IconButton,
} from "@mui/material";
import React, { useState } from "react";
import { ProductList } from "./ProductList";
import { motion } from "framer-motion";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

function Featured() {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the previous slide
  const goToPrevious = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevIndex) => prevIndex - 1);
    }
  };

  // Function to go to the next slide
  const goToNext = () => {
    if (currentIndex < ProductList.length - 1) {
      setCurrentIndex((prevIndex) => prevIndex + 1);
    }
  };

  return (
    <Stack
      spacing={{ xs: 3, sm: 6, lg: 3 }}
      sx={{
        padding: {
          xs: "20px",
          lg: "40px",
        },
        backgroundColor: "rgb(221, 220, 220)",
      }}
    >
      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Typography variant="h3">Featured</Typography>
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
          All Products
        </Button>
      </Stack>

      <Stack
        direction="row"
        sx={{
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <IconButton
          onClick={goToPrevious}
          sx={{ opacity: currentIndex > 0 ? "100%" : "0%" }}
        >
          <ArrowBackIcon />
        </IconButton>
        <IconButton onClick={goToNext}>
          <ArrowForwardIcon />
        </IconButton>
      </Stack>

      <Box
        sx={{
          overflow: "hidden", // Ensures the carousel does not exceed the container
          maxWidth: "100vw", // Keeps the carousel within the viewport width
        }}
      >
        <Stack
          direction="row"
          spacing={{ xs: 3, lg: 4 }}
          sx={{
            transform: {
              xs: `translateX(-${currentIndex * 30}%)`,
              sm: `translateX(-${currentIndex * 4}%)`,
            },
            transition: "transform 0.3s ease-in-out",
            width: {
              xs: `${ProductList.length * 35.3}%`,
              sm: `${ProductList.length * 111}%`,
              lg: `${ProductList.length * 45.3}%`,
            },
          }}
        >
          {ProductList.map((products) => (
            <Box key={products.id}>
              <Paper
                elevation={2}
                sx={{ width: "fit-content", cursor: "pointer" }}
              >
                <Stack>
                  <Box
                    sx={{
                      width: { xs: "300px", sm: "300px", lg: "350px" },
                      height: { xs: "400px", sm: "400px", lg: "450px" },
                      overflow: "hidden",
                    }}
                  >
                    <Box
                      component={motion.img}
                      transition={{ duration: 0.3 }}
                      whileHover={{ scale: 1.05 }}
                      src={products.img}
                      alt={products.name}
                      sx={{ width: "100%", height: "100%", objectFit: "cover" }}
                    />
                  </Box>
                  <Stack sx={{ padding: "20px" }}>
                    <Typography>Blnk</Typography>
                    <Stack
                      direction="row"
                      sx={{
                        alignItems: "center",
                        justifyContent: "space-between",
                      }}
                    >
                      <Typography>{products.name}</Typography>
                      <Typography>{products.price}</Typography>
                    </Stack>
                  </Stack>
                </Stack>
              </Paper>
            </Box>
          ))}
        </Stack>
      </Box>
    </Stack>
  );
}

export default Featured;
