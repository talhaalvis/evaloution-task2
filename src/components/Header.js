import { Container, Divider, Typography } from "@mui/material";
import { Box } from "@mui/system";
import React from "react";
import img from "../assets/cover.png";
import Navbar from "../components/Navbar";
import img2 from "../assets/notification.png";
import Table from '../components/Table'
import Sta from "../components/Sta";
import Search from "../components/Search";
import Text from "../components/Text";
import Started from "../components/Started";
import Account from "../components/Account";
import About from "../components/About";
import Access from "../components/Access";
import AccessApp from "../components/AccessApp";
import Carousel from "../components/Carousel";
import Footer from "../components/Footer";
import FooterSecond from "./FooterSecond";


const Header = () => {
  return (
    <Box
      sx={{
        backgroundImage: `url(${img})`,
        backgroundPostion: "center",
        backgroundSize: "cover",
        height: "730px",
        objectFit: "cover",
        
      }}
    >
      <Navbar />
      <Container maxWidth='xl' sx={{width:{xs:'100%',sm:'90%',md:'90%',lg:'90%',xl:'100%'}}}>

      <Box
        sx={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: { lg:'45px' },
          mt: "80px",
          flexDirection: { xs: "column",sm:'column', md:'row' ,lg: "row" },
        
        }}
      >
        <Box sx={{width:{xs:'100%',sm:'80%', md:'56%', lg:'63%',xl:'69%',marginRight:'20px'}}}>
        <Typography
          sx={{
            fontSize: { xs: "20px", sm:'35px'  ,  md:'25px', lg: "42px",xl:'56px' },
            fontWeight: "bold",
            color: "#fff",
            lineHeight: 1.31,
            paddingLeft: {xs:'1rem',sm:'1rem',lg:'2rem'},
            fontFamily:'Helvetica'
          }}
        >
          The World's Leading <br></br>
          Cryptocurrency Exchange
        </Typography>
        </Box>
        <Box sx={{width:{xs:'100%', sm:'80%',md:'58%' ,lg:'38%'}}}
        ><Carousel />
          
        </Box>
      </Box>
      </Container>

      <Table/>
      <Sta />
      <Search/>
      <Text/>
      <Started/>
      <Account/>
      <About/>
      <Access/>
      <AccessApp/>
      <Divider sx={{mt:{xs:'40px',lg:'80px'}}} />
      <Footer/>
      <Divider sx={{mt:'40px'}}  />
      <FooterSecond/>
    </Box>
  );
};

export default Header;
