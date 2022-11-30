import { Image } from "@mui/icons-material";
import { Container, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img from '../assets/counts.png'


const Search = () => {
  return (
    <Box sx={{ backgroundImage: `url(${img})`,
    backgroundPostion: "center",
    backgroundSize: "cover",height:{xs:'auto',sm:'300px',md:'340px',lg:'395px'},display:"flex",justifyContent:"center",alignItems:'center',mt:'80px',}}>
    <Container maxWidth="lg" sx={{width:{xs:'100%',sm:'90%',md:'90%',lg:'90%',xl:'100%'}}}>
      <Box
        sx={{  display: "flex", justifyContent: "space-between",flexDirection:{xs:'column',sm:'row',lg:'row'} ,gap:{xs:4,lg:0},margin:{xs:'30px 0',sm:"0",md:'0',lg:"0"}}}
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
            <Box >
<Typography sx={{fontSize:"60px",fontWeight:'bold',color:"#fff", fontFamily:'Helvetica'}}>$130M+</Typography>
  </Box>
          <Typography
            sx={{ fontSize: {xs:'18px',lg:'22px'}, mt: "10px", textAlign: "center",opacity:'0.8',color:"#fff", fontFamily:'Helvetica' }}
          >
           Cryptocurrency exchanged
            
          
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
            <Box >
            <Typography sx={{fontSize:"60px",fontWeight:'bold',color:"#fff", fontFamily:'Helvetica'}}>38</Typography>
         
            </Box>
          <Typography
            sx={{ fontSize: {xs:'18px',lg:'22px'}, mt: "10px", textAlign: "center",opacity:'0.8',color:"#fff", fontFamily:'Helvetica' }}
          >
            
            Countries supported
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
            <Box >

            <Typography sx={{fontSize:"60px",fontWeight:'bold',color:"#fff", fontFamily:'Helvetica'}}>2M+</Typography>
  </Box>
          <Typography
            sx={{ fontSize: {xs:'18px',lg:'22px'}, mt: "10px", textAlign: "center",opacity:'0.8',color:"#fff", fontFamily:'Helvetica' }}
          >
            
            Customers served
          </Typography>
        </Box>
      </Box>
    </Container>
    </Box>
  );
};

export default Search;
