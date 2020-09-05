import React from 'react'
import { InputGroup, InputLeftElement, Input, Box, Icon } from '@chakra-ui/core'

import { CardInfo } from 'components/CardInfo'
import { CardButton } from 'components/CardButton'
import { LayoutPanel } from 'components/LayoutPanel'

import alanaAvatar from 'assets/alana_avatar.png'
import lideranca from 'assets/liderança.svg'

const Timeline = () => {
  return (
    <LayoutPanel>
      <InputGroup isFullWidth>
        <InputLeftElement children={<Icon name="search" color="secondary" />} />
        <Input isFullWidth bg="#404040" borderRadius="20px" placeholder="Busque por startups, assuntos…" />
      </InputGroup>

      <Box my="20px">
        <CardInfo
          title="Motivação do dia"
          description="Você está fazendo o seu melhor, e isso vale alguma coisa, alguém lá fora aprecia você!"
          image={alanaAvatar}
          imageDescription="Alana Rios"
        />
      </Box>

      <Box display="flex" flex={1} justifyContent="space-between" flexWrap="wrap">
        <CardButton title="Liderança" image={lideranca} bg="#FF5668" />
        <CardButton title="Gestão" image={lideranca} bg="#41D5E2" />
        <CardButton title="Cursos" image={lideranca} bg="#4D53E0" />
        <CardButton title="Mentorias e Palestras" image={lideranca} bg="#FF8E36" />
      </Box>
    </LayoutPanel>
  )
}

export default Timeline
