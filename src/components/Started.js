import { AddBoxRounded } from '@mui/icons-material'
import { Typography ,Box,Container} from '@mui/material'
import React from 'react'

const Pic = () => {
  return (
    <Box sx={{mt:'70px'}}>
      <Container maxWidth='xl' sx={{width:{xs:'100%',sm:'90%',md:'90%',lg:'90%',xl:'100%'}}}>
  <Typography sx={{fontSize:{xs:"31px",lg:'54px'},fontWeight:"bold",color: '#11434a',textAlign:'center',marginBottom:{xs:'20px'}, fontFamily:'Helvetica'}}>
  How to get started?
      </Typography>
      <Box>
        <Typography sx={{fontSize:'22px',opacity:'0.8',textAlign:'center', color: '#000', fontFamily:'Helvetica'}}>
        Propersix supports a variety and easy system to open your account in few moments.
        </Typography>
      </Box>
      </Container>
        
    </Box>
  )
}

export default Pic