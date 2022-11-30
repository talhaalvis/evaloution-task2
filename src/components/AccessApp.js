
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import icon7 from "../assets/Icon7.png";
import icon8 from "../assets/Icon8.png";
import icon9 from "../assets/Icon9.png";
import Image from "material-ui-image"

const Search = () => {
  return (
    <Container maxWidth='lg'sx={{width:{xs:'100%',sm:'90%',md:'90%',lg:'90%',xl:'100%'}}}>
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

<Image src={icon7} ></Image>
  </Box>
          <Typography
            sx={{ fontSize: {xs:'18px',lg:'28px'}, mt: "30px", textAlign: "center",color:'#092326', fontFamily:'Helvetica',fontWeight:'bold' }}
          >
         Android App
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

          <Image src={icon8} ></Image>
            </Box>
          <Typography
            sx={{fontSize: {xs:'18px',lg:'28px'}, mt: "30px", textAlign: "center",color:'#092326', fontFamily:'Helvetica',fontWeight:'bold' }}
          >
         Web Application
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

<Image src={icon9} ></Image>
  </Box>
          <Typography
            sx={{fontSize: {xs:'18px',lg:'28px'}, mt: "30px", textAlign: "center" ,color:'#092326', fontFamily:'Helvetica',fontWeight:'bold'}}
          >
           IOS App
          </Typography>
        </Box>
      </Box>
    </Container>
  );
};

export default Search;
