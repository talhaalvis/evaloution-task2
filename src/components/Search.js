import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import icon from "../assets/Icon 1.png";
import icon2 from "../assets/Icon 2.png";
import icon3 from "../assets/Icon 3.png";
import Image from "material-ui-image";
const Search = () => {
  return (
    <Container
      maxWidth="lg"
      sx={{
        width: { xs: "100%", sm: "90%", md: "90%", lg: "90%", xl: "100%" },
      }}
    >
      <Box
        sx={{
          mt: { xs: "60px", lg: "100px" },
          display: "flex",
          justifyContent: "space-between",
          flexDirection: { xs: "column", sm: "row", lg: "row" },
          gap: { xs: 4, lg: 0 },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box></Box>
          <Box sx={{ width: { xs: "100px", lg: "134px" } }}>
            <Image src={icon}></Image>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "17px", sm: "15px", lg: "28px" },
              mt: "30px",
              textAlign: "center",
              fontFamily: "Helvetica",
              fontWeight: "bold",
              color: "#092326",
            }}
          >
            Customize your own
            <br />
            trading panel
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box sx={{ width: { xs: "100px", lg: "134px" } }}>
            <Image src={icon2}></Image>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "15px", lg: "28px" },
              mt: "30px",
              textAlign: "center",
              fontFamily: "Helvetica",
              fontWeight: "bold",
              color: "#092326",
            }}
          >
            Fully connected and secure <br />
            with Multi-2FA
          </Typography>
        </Box>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <Box></Box>
          <Box sx={{ width: { xs: "100px", lg: "134px" } }}>
            <Image src={icon3}></Image>
          </Box>
          <Typography
            sx={{
              fontSize: { xs: "18px", sm: "15px", lg: "28px" },
              mt: "30px",
              textAlign: "center",
              fontFamily: "Helvetica",
              fontWeight: "bold",
              color: "#092326",
            }}
          >
            Fully Secured With 6 Levels<br></br>
            Account Security
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Search;
