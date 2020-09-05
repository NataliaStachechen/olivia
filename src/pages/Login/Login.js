import React from 'react';

import { Box, InputLeftElement, Icon, InputGroup, Input } from "@chakra-ui/core";

const Login = () => {

  return (
    <Box display="flex" flex={1} flexDirection="column" justifyContent="center" alignItems="center" height="100vh" bg="background">
      <InputGroup>
        <InputLeftElement children={<Icon name="email" color="primary" />} />
        <Input type="email" placeholder="Email" variant="flushed" borderColor="primary" />
      </InputGroup>
      <InputGroup>
        <InputLeftElement children={<Icon name="lock" color="primary" />} />
        <Input type="password" placeholder="Senha" variant="flushed" borderColor="primary" />
      </InputGroup>
    </Box>
  );

}

export default Login;
