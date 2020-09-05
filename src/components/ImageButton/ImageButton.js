import React from 'react'

import { PseudoBox, Image, Text, Box } from '@chakra-ui/core'

export const ImageButton = ({ title, selected, image, imageSelected, handleClick }) => {
  return (
    <PseudoBox as="button" _hover={{}} bg="transparent" onClick={() => handleClick()}>
      <Box display="flex" flexDirection="column">
        <Image src={selected ? imageSelected : image} />
        <Text color={selected ? 'primary' : 'secondary'}>{title}</Text>
      </Box>
    </PseudoBox>
  )
}
