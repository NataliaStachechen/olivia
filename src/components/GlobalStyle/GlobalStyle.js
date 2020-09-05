import React from 'react'

import { Global, css } from '@emotion/core'

export const GlobalSyle = () => {
  return (
    <Global
      styles={css`
        body {
          background-color: #262626 !important;
        }
      `}
    />
  )
}
