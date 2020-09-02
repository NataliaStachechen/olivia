import React from 'react';
import { Text, Button, Box, Image } from "@chakra-ui/core";

import logo from '../../assets/logo.svg'
import google_facebook from '../../assets/google_facebook.svg'

import {useHistory} from 'react-router-dom'

function Home() {

  const history = useHistory()

  const handleRoute = (url) => history.push(url)

  return (
    <Box display="flex" flex={1} flexDirection="column" justifyContent="center" alignItems="center" height="100vh" bg="background">

      <Image src={logo} alt="Logo Olivia App" width="140px" />

      <Box  width="100%" maxWidth="300px" my={3} mt={5} >
        
        <Button 
          bg="background" 
          color="primary" 
          borderRadius="20px" 
          border="2px" 
          borderColor="primary" 
          variant="outline" 
          isFullWidth
          onClick={() => handleRoute('/login')}
        >
            Login
        </Button>

      </Box>

      <Box  width="100%" maxWidth="300px" my={3}>

        <Button 
          bg="primary" 
          color="secondary" 
          borderRadius="20px" 
          isFullWidth
          onClick={() => handleRoute('/register')}
        >
          Criar conta
        </Button>

      </Box>

      <Box mb={4}>

        <Text fontSize="md" color="secondary">ou acesse utilizando</Text>

      </Box>

      <Image src={google_facebook} alt="Facebook e Google" width="150px" />

    </Box>
  );
  
}

export default Home;
