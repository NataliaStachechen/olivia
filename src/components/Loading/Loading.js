import React from 'react'

import { Box, CircularProgress } from "@chakra-ui/core";

export const Loading = ({isFull}) => {

  return (
    <Box 
      display="flex" 
      justifyContent="center" 
      alignItems="center" 
      width={isFull ? '100%': ''} 
      height={isFull ? '100vh': ''} 
      bg={isFull ? 'background': ''}
    >
      <CircularProgress isIndeterminate color="primary"></CircularProgress>
    </Box> 
  )
}