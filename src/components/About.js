import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import React from "react";
import img from "../assets/counts.png";
import about from "../assets/about.png";
const imageSection = {
  width: { xs: "100%",sm:'62%',md:'100%', lg: "50%" },
  backgroundColor: "none",
  marginTop: { xs: "-33px", md: "-115px", lg: "-67px" },
};
const About = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        height: { xs: "auto", md: "360px", lg: "390px", xl: "509px" },
        mt: { xs: "60px", md: "140px", lg: "120px" },
      }}
    >
      <Container maxWidth="xl" sx={{width:{xs:'100%',sm:'90%',md:'90%',lg:'90%',xl:'100%'}}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            flexDirection: { xs: "column", md: "row", lg: "row" },
          }}
        >
          <Box
            sx={{
              width: { xs: "100%", lg: "50%" },
              marginRight: "60px",
              marginLeft: "40px",
              paddingBottom:'30px'
             
            }}
          >
            <Typography
              sx={{
                fontSize: { xs: "30px", sm: "45px", lg: "41px" },
                fontWeight: "bold",
                color: "#fff",
              }}
            >
              About us
            </Typography>
            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "20px", md:"18px" , lg: "20px" },
                fontWeight: "normal",
                color: "#fff",
                opacity: 0.8,
              }}
            >
              The ProperSix exchange is a crypto trading platform where users
              can trade at a much faster transaction speed. ProperSix exchange
              is secured by advanced architectural solutions such as inclusion
              of hot and cold wallet with the encryption and limited access of
              the database.
            </Typography>

            <Typography
              sx={{
                fontSize: { xs: "14px", sm: "20px", md:"18px",lg: "20px" },
                fontWeight: "normal",
                color: "#fff",
                opacity: 0.8,
                mt: "20px",
              }}
            >
              Our IP verification and 2fa verification for withdrawal will
              ensure maximum security at the exchange.
            </Typography>
          </Box>
          <Box sx={imageSection}>
            <img src={about} width="100%"  alt=""/>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default About;
