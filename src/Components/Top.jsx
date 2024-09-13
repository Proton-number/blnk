import { Box, Stack, Typography, Button } from "@mui/material";
import React from "react";

function Top() {
  return (
      <Box
        sx={{
          height: "100vh",
          backgroundSize: { xs: "cover", sm: "cover" },
          backgroundPosition: { xs: "center", sm: "top" },
        }}
        className="top-background"
      >
        <Stack
          direction="row"
          sx={{
            alignItems: "center",
            position: "relative",
            justifyContent: "space-around",
            top: {
              xs: 600,
            },
          }}
        >
          <Typography
            sx={{
              color: "white",
              width: "58%",
              fontSize: { xs: "20px", sm: "50px", lg: "60px" },
            }}
            variant="h2"
          >
            Wear Your Story — Unapologetically You.
          </Typography>
          <Button
            disableElevation
            sx={{
              backgroundColor: "transparent",
              textTransform: "none",
              border: "2px solid white",
              width: "fit-content",
              color: "white",
              fontWeight: "bold",
              "&:hover": {
                borderColor: "black",
                color: "black",
              },
            }}
          >
            Discover now
          </Button>
        </Stack>
      </Box>
  );
}

export default Top;
