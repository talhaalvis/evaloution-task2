
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import icon6 from "../assets/Icon 6.png";
import icon5 from "../assets/Icon 5.png";
import icon4 from "../assets/Icon 4.png";
import Image from "material-ui-image"

const Search = () => {
  return (
    <Container maxWidth='lg' sx={{width:{xs:'100%',sm:'90%',md:'90%',lg:'90%',xl:'100%'}}}>
      <Box
        sx={{ mt: "100px", display: "flex", justifyContent: "space-between",flexDirection:{xs:'column',sm:'row',lg:'row'} ,gap:{xs:4,lg:0}}}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
            <Box>

            </Box>
            <Box sx={{ width: {xs:'100px',lg:'134px'} }}>

<Image src={icon4} ></Image>
  </Box>
          <Typography
            sx={{ fontSize: {xs:'18px',lg:'28px'}, mt: "30px", textAlign: "center",color:'#092326', fontFamily:'Helvetica',fontWeight:'bold', }}
          >
         Create an account
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
            <Box sx={{ width: {xs:'100px',lg:'134px'} }}>

          <Image src={icon5} ></Image>
            </Box>
          <Typography
            sx={{fontSize: {xs:'18px',lg:'28px'}, mt: "30px", textAlign: "center",color:'#092326', fontFamily:'Helvetica',fontWeight:'bold', }}
          >
           Link your bank account
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
            <Box>

            </Box>
            <Box sx={{ width: {xs:'100px',lg:'134px'} }}>

<Image src={icon6} ></Image>
  </Box>
          <Typography
            sx={{fontSize: {xs:'18px',lg:'28px'}, mt: "30px", textAlign: "center" ,color:'#092326', fontFamily:'Helvetica',fontWeight:'bold',}}
          >
            Start buying & selling
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Search;
