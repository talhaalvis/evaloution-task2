import { Box, Container, Typography } from '@mui/material'

import React from 'react'
import InstagramIcon from '@mui/icons-material/Instagram';
import PinterestIcon from '@mui/icons-material/Pinterest';
import TwitterIcon from '@mui/icons-material/Twitter';
import FacebookIcon from '@mui/icons-material/Facebook';

const FooterSecond = () => {
  return (
    <Container maxWidth='xl' sx={{width:{xs:'100%',sm:'90%',md:'90%',lg:'90%',xl:'100%'}}}>
    <Box sx={{display:'flex',justifyContent:'space-between',alignItems:'center',mt:'30px',paddingBottom:'25px'}}>

        <Box>
            

          <PinterestIcon sx= {{marginRight:'20px'}}/>
          <InstagramIcon sx= {{marginRight:'20px'}}/>
          <TwitterIcon sx= {{marginRight:'20px'}}/>
          <FacebookIcon sx= {{marginRight:'20px'}}/>
            
        </Box>
        <Box sx={{display:{xs:'none',sm:'none',md:'block',lg:"block"}}}>
            <Typography sx={{fontSize:'22px',fontWeight:'normal',lineHeight:1.64,color:'#092326',opacity:0.8}}>
          propersix.com (2020). All rights reserved. 
            </Typography>
        </Box>
    </Box>
    </Container>
  )
}

export default FooterSecond