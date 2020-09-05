import React from 'react'
import { Box, Text, Image } from '@chakra-ui/core'

export const CardInfo = ({ title, description, image, imageDescription }) => {
  return (
    <>
      <Text color="secondary">{title}</Text>

      <Box display="flex" justifyContent="space-between" bg="#404040" borderRadius="12px" padding="12px">
        <Box display="flex" flex="2">
          <Text color="secondary" maxWidth="222px">
            {description}
          </Text>
        </Box>

        <Box display="flex" flexDirection="column" alignItems="center" flex="1">
          <Image src={image} width="50px" />

          <Text color="secondary" maxWidth="222px">
            {imageDescription}
          </Text>
        </Box>
      </Box>
    </>
  )
}
