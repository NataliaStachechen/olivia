import React from 'react'
import { Box, Link, Image, Text } from '@chakra-ui/core'

import { LayoutPanel } from 'components/LayoutPanel'
import telegram from 'assets/telegram.svg'
import whatsapp from 'assets/whatsapp.svg'
import linkedin from 'assets/linkedin.svg'

const Networking = () => {
  return (
    <LayoutPanel>
      <Text fontSize="xl" color="#29A0DA">• Grupos no telegram</Text>
      <Box display="flex" justifyContent="space-between" alignItems="center" my="20px" color="white" bg="#404040" borderRadius="12px" padding="12px">
        <Link href="https://web.telegram.org/" isExternal>Empreendedoras iniciantes 2020</Link>
        <Image src={telegram} width="50px" />
      </Box>

      <Text fontSize="xl" color="#4AAE20">• Grupos no whatsapp</Text>
      <Box display="flex" justifyContent="space-between" alignItems="center" my="20px" color="white" bg="#404040" borderRadius="12px" padding="12px">
        <Link href="https://www.whatsapp.com/?lang=pt_br" isExternal>Empreendedoras iniciantes 2020</Link>
        <Image src={whatsapp} width="50px" />
      </Box>

      <Text fontSize="xl" color="#0077B5">• Grupos no linkedin</Text>
      <Box display="flex" justifyContent="space-between" alignItems="center" my="20px" color="white" bg="#404040" borderRadius="12px" padding="12px">
        <Link href="https://www.linkedin.com/" isExternal>Empreendedoras iniciantes 2020</Link>
        <Image src={linkedin} width="50px" />
      </Box>
    </LayoutPanel>
  )
}

export default Networking
