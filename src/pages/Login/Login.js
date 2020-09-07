import React from 'react';

import { Box, InputLeftElement, Icon, InputGroup, Input, Image, Link } from "@chakra-ui/core";

import logo from '../../assets/logo.svg'

const Login = () => {

  return (
    <Box display="flex" flex={1} flexDirection="column" justifyContent="center" alignItems="center" height="100vh" bg="background">

      <Image src={logo} alt="Logo Olivia App" width="140px" />

      <Box pt={5}>
        <InputGroup>
          <InputLeftElement children={<Icon name="email" color="primary" />} />
          <Input type="email" placeholder="Email" variant="flushed" color="white" borderColor="primary" />
        </InputGroup>
        <InputGroup>
          <InputLeftElement children={<Icon name="lock" color="primary" />} />
          <Input type="password" placeholder="Senha" variant="flushed" color="white" borderColor="primary" />
        </InputGroup>
      </Box>

      <Box color="white" display="flex" pt={5}>
        <Link href="#">Esqueceu a senha?</Link>
      </Box>
    </Box>
  );

}

export default Login;
