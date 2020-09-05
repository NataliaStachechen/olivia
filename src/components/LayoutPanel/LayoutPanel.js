import React, { useCallback } from 'react'
import { Box } from '@chakra-ui/core'

import home from 'assets/home.svg'
import homeColorido from 'assets/home_colorido.svg'

import networking from 'assets/networking.svg'
import networkingColorido from 'assets/networking_colorido.svg'

import investidores from 'assets/investidores.svg'
import investidoresColorido from 'assets/investidores_colorido.svg'

import perfil from 'assets/perfil.svg'
import perfilColorido from 'assets/perfil_colorido.svg'
import { ImageButton } from 'components/ImageButton'
import { matchPath } from 'react-router-dom'
import { useLocation, useHistory } from 'react-router-dom/cjs/react-router-dom.min'

export const LayoutPanel = ({ children }) => {
  const location = useLocation()
  const history = useHistory()

  const isSelected = useCallback(
    url => {
      return !!matchPath(location.pathname, `/panel/${url}`)
    },
    [location]
  )

  const handleRouter = url => history.push(url)

  return (
    <Box display="flex" flex={1} flexDirection="column" alignItems="center" bg="background">
      <Box width="335px" my={2}>
        {children}
      </Box>

      <Box
        display="flex"
        justifyContent="space-between"
        width="335px"
        position="fixed"
        bottom="0"
        height="60px"
        padding="10px"
        bg="#404040"
        borderRadius="8px"
      >
        <ImageButton
          image={home}
          imageSelected={homeColorido}
          title="Home"
          selected={isSelected('home')}
          handleClick={() => handleRouter('home')}
        />
        <ImageButton
          image={networking}
          imageSelected={networkingColorido}
          title="Networking"
          selected={isSelected('networking')}
          handleClick={() => handleRouter('networking')}
        />
        <ImageButton
          image={investidores}
          imageSelected={investidoresColorido}
          title="Investidores"
          selected={isSelected('investidor')}
          handleClick={() => handleRouter('investidor')}
        />
        <ImageButton
          image={perfil}
          imageSelected={perfilColorido}
          title="Perfil"
          selected={isSelected('profile')}
          handleClick={() => handleRouter('profile')}
        />
      </Box>
    </Box>
  )
}
