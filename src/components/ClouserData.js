import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img2 from "../assets/image.png";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

const Header = () => {
  return (
    <Box
      sx={{
        position: "relative",
        height: { xs: "205px", sm: "292px", lg: "230px" },
        backgroundImage: `url(${img2})`,
        objectFit: "cover",
        backgroundPosition: "center",
        backgroundSize: { xs: "cover", sm: "auto", md: "cover", lg: "cover" },
        mt: { xs: "20px" },
        borderRadius: "8px",
        boxShadow: " 0 0 20px 0 rgba(0, 0, 0, 0.1)",
      }}
    >
      <Typography
        sx={{
          fontSize: { xs: "18px",sm:'27px', lg: "26px" },
          fontWeight: "bold",
          color: "#092326",
          mt: { lg: "20px" },
          // paddingLeft: "20px",
          paddingTop: { xs: "20px", sm: "20px", md: "20px", lg: "11px" },
          paddingLeft: { xs: "28px", sm: "34px", md: "50px", lg: "30px" },

          fontFamily: "Helvetica",
        }}
      >
        Buy, sell and trade digital
        <br />
        currency.
      </Typography>

      <Typography
        sx={{
          color: "#28a0b0",
          fontSize: "19px",
          fontWeight: "normal",
          position: "absolute",
          bottom: "23px",
          ml: { xs: "28px", sm: "34px", md: "50px", lg: "30px" },
          fontFamily: "Helvetica",
        }}
      >
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            gap: "5px",
          }}
        >
          {" "}
          Learn more{" "}
          <ArrowForwardIosIcon sx={{ width: "12px", color: "#28a0b0" }} />
        </Box>
      </Typography>
    </Box>
  );
};

export default Header;
