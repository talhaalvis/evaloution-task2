import { Typography } from "@mui/material";
import { Box, Container } from "@mui/system";
import Image from "mui-image";
import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <Box sx={{ mt: "60px" }}>
      <Container maxWidth="xl" sx={{width:{xs:'100%',sm:'90%',md:'90%',lg:'90%',xl:'100%'}}}>
        <Box
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}
        >
          <Box>
            <Image src={logo} sx={{ maxWidth: "200px" }}></Image>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: 1.8,
                fontWeight: "light",
                opacity: 0.8,
                fontFamily:'Helvetica'
              }}
            >
              LiboEX Ltd, Standard House, Level 3 Birkirkara Hill, St.
              <br /> Julians STJ 1149 Malta.
              <br />
              Licensed in Estonia for Exchange, KYC / AML
              <br /> FVR000989 and FRK000879
            </Typography>
          </Box>
          <Box sx={{display:{xs:'none',lg:'block'}}}>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: 2.55,
                fontWeight: "light",
                opacity: 0.8,
                fontFamily:'Helvetica'
              }}
            >
              Trading
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: 2.55,
                fontWeight: "light",
                opacity: 0.8,
                fontFamily:'Helvetica'
              }}
            >
              FAQ's
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: 2.55,
                fontWeight: "light",
                opacity: 0.8,
                fontFamily:'Helvetica'
              }}
            >
              Terms
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: 2.55,
                fontWeight: "light",
                opacity: 0.8,
                fontFamily:'Helvetica'
              }}
            >
              Privacy
            </Typography>
          </Box>
          <Box sx={{mb:"50px", display:{xs:'none',lg:'block'}}}>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: 2.55,
                fontWeight: "light",
                opacity: 0.8,
                fontFamily:'Helvetica'
              }}
            >
              Notifications
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: 2.55,
                fontWeight: "light",
                opacity: 0.8,
                fontFamily:'Helvetica'
              }}
            >
              Apply for Listing
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: 2.55,
                fontWeight: "light",
                opacity: 0.8,
                fontFamily:'Helvetica'
              }}
            >
              Fees
            </Typography>
            {/* <Typography>Privacy</Typography> */}
          </Box>
          <Box sx={{display:{xs:'none',lg:'block'}}}>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: 2.55,
                fontWeight: "light",
                opacity: 0.8,
                fontFamily:'Helvetica'
              }}
            >
              Help Support
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: 2.55,
                fontWeight: "light",
                opacity: 0.8,
                fontFamily:'Helvetica'
              }}
            >
              Downloads
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: 2.55,
                fontWeight: "light",
                opacity: 0.8,
                fontFamily:'Helvetica'
              }}
            >
              Contact Us
            </Typography>
            <Typography
              sx={{
                fontSize: "22px",
                lineHeight: 2.55,
                fontWeight: "light",
                opacity: 0.8,
                fontFamily:'Helvetica'
              }}
            >
              Submit Request
            </Typography>
          </Box>
        </Box>
      </Container>
    </Box>
  );
};

export default Footer;
