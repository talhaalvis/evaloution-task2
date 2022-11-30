import { Typography, Box } from "@mui/material";
import { Container } from "@mui/system";
import React from "react";
const Pic = () => {
  return (
    <Box sx={{ mt: { xs: "60px", lg: "100px" } }}>
      <Container maxWidth='xl' sx={{width:{xs:'100%',sm:'90%',md:'90%',lg:'90%',xl:'100%'}}}>
        <Typography
          sx={{
            fontSize: { xs: "31px", lg: "54px" },
            fontWeight: "bold",
            color: "#11434a",
            textAlign: "center",
            marginBottom: { xs: "20px" },
            fontFamily: "Helvetica",
            lineHeight: 1.74,
          }}
        >
          Get easy access through apps
        </Typography>
        <Box>
          <Typography
            sx={{
              fontSize: "22px",
              opacity: "0.8",
              textAlign: "center",
              color: "#000",
              fontFamily: "Helvetica",
              lineHeight: 1.27,
              letterSpacing: " 0.66px",
            }}
          >
            Our main priority to provide easy access for our users with enhanced
            security.
          </Typography>
        </Box>
      </Container>
    </Box>
  );
};

export default Pic;
