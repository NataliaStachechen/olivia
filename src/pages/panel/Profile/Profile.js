import React from 'react'
import { Box, Image, Text } from '@chakra-ui/core'

import { LayoutPanel } from 'components/LayoutPanel'
import { DotButton } from 'components/DotButton'
import perfil from 'assets/perfil.jpg'
import badge_ativo from 'assets/badge_ativo.svg'
import badge from 'assets/badge.svg'

const Profile = () => {
  return (
    <LayoutPanel>
      <Box display="flex" bg="#404040" alignItems="center" borderRadius="12px">
        <Box mx={5} my={5}>
          <Image src={perfil} width="100px" height="100px" borderRadius="50%" />
        </Box>

        <Box>
          <Text fontSize="xl" color="white">Maria Laura</Text>
          <Box display="flex" mt={3} justifyContent="space-between" color="#BE23FF" borderColor="#BE23FF" borderWidth="1px" borderRadius="12px">
            <DotButton contained="true"></DotButton>
            <Text mr={2}>Iniciante</Text>
          </Box>
        </Box>
      </Box>

      <Box display="flex" flex={1} alignItems="center" justifyContent="space-between" mt={5} flexWrap="wrap">
        <Box mx={5} display="flex" flexDirection="column" alignItems="center">
          <Image src={badge_ativo} width="35px" />
          <Text color="#E6E6E6" fontSize="sm" mt={2}>Cadastrou-se</Text>
        </Box>

        <Box mx={5} display="flex" flexDirection="column" alignItems="center">
          <Image src={badge} width="35px" />
          <Text color="#E6E6E6" fontSize="sm" mt={2}>???</Text>
        </Box>

        <Box mx={5} display="flex" flexDirection="column" alignItems="center">
          <Image src={badge} width="35px" />
          <Text color="#E6E6E6" fontSize="sm" mt={2}>???</Text>
        </Box>

      </Box>
    </LayoutPanel>
  )
}

export default Profile
