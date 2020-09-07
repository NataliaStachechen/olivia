import React from 'react'
import { InputGroup, InputLeftElement, Input, Box, Icon, Text, Image } from '@chakra-ui/core'

import { CardInfo } from 'components/CardInfo'
import { CardButton } from 'components/CardButton'
import { LayoutPanel } from 'components/LayoutPanel'

import alanaAvatar from 'assets/alana_avatar.png'
import lideranca from 'assets/liderança.svg'
import collaboration from 'assets/collaboration.svg'
import manage from 'assets/manage.svg'
import megaphone from 'assets/megaphone.svg'
import unchecked from 'assets/unchecked.svg'
import checked from 'assets/checked.svg'

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

      <Text color="#fff" mb={5} fontSize="xl">Olá, Maria!</Text>
      <Box display="flex" flex={1} justifyContent="space-between" flexWrap="wrap">
        <CardButton title="Liderança" image={lideranca} bg="#FF5668" />
        <CardButton title="Gestão" image={manage} bg="#41D5E2" />
        <CardButton title="Cursos" image={megaphone} bg="#4D53E0" />
        <CardButton title="Mentorias e Palestras" image={collaboration} bg="#FF8E36" />
      </Box>

      <Text color="#fff" fontSize="xl" mt={5} mb={5}>Tasks</Text>
      <Box display="flex" alignItems="center" my="20px" color="white" bg="#404040" borderRadius="12px" padding="12px">
        <Image src={unchecked} width="20px" />
        <Text ml={5}>Definir o objetivo</Text>
      </Box>
      <Box display="flex" alignItems="center" mb={50} my="20px" color="white" bg="#404040" borderRadius="12px" padding="12px">
        <Image src={unchecked} width="20px" />
        <Text ml={5}>Avalie seu mercado</Text>
      </Box>
      <Box display="flex" alignItems="center" mb={50} my="20px" color="white" bg="#404040" borderRadius="12px" padding="12px">
        <Image src={unchecked} width="20px" />
        <Text ml={5}>Conheça seu público</Text>
      </Box>
      <Box display="flex" alignItems="center" mb={50} my="20px" color="white" bg="#404040" borderRadius="12px" padding="12px">
        <Image src={unchecked} width="20px" />
        <Text ml={5}>Produza conteúdo</Text>
      </Box>
      <Box display="flex" alignItems="center" mb={100} my="20px" color="white" bg="#404040" borderRadius="12px" padding="12px">
        <Image src={unchecked} width="20px" />
        <Text ml={5}>Investindo em bons produtos e serviços</Text>
      </Box>
      <Box display="flex" alignItems="center" mb={100} my="20px" color="white" bg="#404040" borderRadius="12px" padding="12px">
        <Image src={checked} width="20px" />
        <Text ml={5}>Acessar o menu Liderança</Text>
      </Box>
      <Box display="flex" alignItems="center" mb={100} my="20px" color="white" bg="#404040" borderRadius="12px" padding="12px">
        <Image src={checked} width="20px" />
        <Text ml={5}>Acessar o menu Gestão</Text>
      </Box>

    </LayoutPanel>
  )
}

export default Timeline
