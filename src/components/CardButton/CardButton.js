import React from 'react'
import { Box, Image } from '@chakra-ui/core'

export const CardButton = ({ title, image, ...props }) => {
  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      color="white"
      borderRadius="12px"
      width="160px"
      height="95px"
      padding="12px"
      mb="10px"
      {...props}
    >
      <Box display="flex" justifyContent="flex-end">
        <Image src={image} width="20px" />
      </Box>

      <Box display="flex" justifyContent="flex-start">
        {title}
      </Box>
    </Box>
  )
}
