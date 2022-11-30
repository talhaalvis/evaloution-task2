import { AddBoxRounded } from '@mui/icons-material'
import { Typography ,Box, Container} from '@mui/material'
import React from 'react'

const Pic = () => {
  return (
    <Box sx={{mt:'60px'}}>
      <Container maxWidth='lg'>
  <Typography sx={{fontSize:{xs:"31px",lg:'54px'},fontWeight:"bold",color:'#11434a',textAlign:'center',marginBottom:{xs:'20px'}, fontFamily:'Helvetica'}}>
      Most trusted and secured platform
      </Typography>
      <Box>
        <Typography sx={{fontSize:'22px',opacity:'0.8',textAlign:'center', fontFamily:'Helvetica'}}>
        Here are a few reasons why you should choose Propersix
        </Typography>
      </Box>
      </Container>
        
    </Box>
  )
}

export default Pic