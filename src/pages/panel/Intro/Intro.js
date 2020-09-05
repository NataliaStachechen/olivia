import React from 'react'
import { Carousel, CarouselContent, CarouselActions } from 'components/Carousel'
import { Box, Image, Text, Button } from '@chakra-ui/core'

import lightImage from 'assets/light_carousel.svg'
import womanImage from 'assets/woman_carousel.svg'
import rocketImage from 'assets/rocket_carousel.svg'

import { useHistory } from 'react-router-dom'

const Intro = () => {
  const history = useHistory()

  const handleRoute = url => history.push(url)

  return (
    <Carousel>
      <CarouselContent>
        <Box display="flex" flex={1} flexDirection="column" alignItems="center" height="100vh" bg="background">
          <Box marginTop="110px">
            <Image src={lightImage} width="194px" />
          </Box>

          <Box marginTop="50px" display="flex" flex={1} flexDirection="column" alignItems="center">
            <Text color="secondary" textAlign="center">
              Seja muito bem vinda! Estamos
            </Text>

            <Text color="secondary" textAlign="center">
              aqui para ajudar você a começar
            </Text>
            <Text color="secondary" textAlign="center">
              seu negócio.
            </Text>
          </Box>
        </Box>
        <Box display="flex" flex={1} flexDirection="column" alignItems="center" height="100vh" bg="background">
          <Box marginTop="110px">
            <Image src={womanImage} width="194px" />
          </Box>

          <Box marginTop="50px" display="flex" flex={1} flexDirection="column" alignItems="center">
            <Text color="secondary" textAlign="center">
              Isso porque nós, e outras
            </Text>

            <Text color="secondary" textAlign="center">
              mulheres acreditamos no seu
            </Text>
            <Text color="secondary" textAlign="center">
              potencial.
            </Text>
          </Box>
        </Box>
        <Box display="flex" flex={1} flexDirection="column" alignItems="center" height="100vh" bg="background">
          <Box marginTop="110px">
            <Image src={rocketImage} width="194px" />
          </Box>

          <Box marginTop="50px" display="flex" marginBottom="30px" flexDirection="column" alignItems="center">
            <Text color="secondary" textAlign="center">
              Aqui você vai encontrar mentorias{' '}
            </Text>

            <Text color="secondary" textAlign="center">
              de pessoas que já estão na área,
            </Text>

            <Text color="secondary" textAlign="center">
              workshops, eventos e muita troca
            </Text>

            <Text color="secondary" textAlign="center">
              de experiência!
            </Text>
          </Box>

          <Button
            width="200px"
            bg="primary"
            color="secondary"
            borderRadius="20px"
            isFullWidth
            onClick={() => handleRoute('/panel/home')}
          >
            Começar
          </Button>
        </Box>
      </CarouselContent>

      <CarouselActions />
    </Carousel>
  )
}

export default Intro
