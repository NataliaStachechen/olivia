import React from 'react'
import { LayoutPanel } from 'components/LayoutPanel'
import maya from 'assets/maya.svg'
import b2mamy from 'assets/b2mamy.svg'
import gavea from 'assets/gavea.svg'
import wewomen from 'assets/wewomen.svg'
import mia from 'assets/mia.svg'
import blackrocks from 'assets/blackrocks.svg'

import { Box, Image } from '@chakra-ui/core'

const Investidor = () => {
  return (
    <LayoutPanel>
      <Box display="flex" flex={1} justifyContent="space-between" flexWrap="wrap">
        <Image src={maya} />

        <Image src={b2mamy} />

        <Image src={gavea} />

        <Image src={wewomen} />

        <Image src={mia} />

        <Image src={blackrocks} />
      </Box>
    </LayoutPanel>
  )
}

export default Investidor
