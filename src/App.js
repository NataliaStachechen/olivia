import React, { lazy, Suspense } from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { theme } from '@chakra-ui/core'
import { ThemeProvider, CSSReset } from '@chakra-ui/core'

import { Loading } from './components/Loading'
import { GlobalSyle } from 'components/GlobalStyle'

const Home = lazy(() => import('./pages/Home'))
const Login = lazy(() => import('./pages/Login'))
const Register = lazy(() => import('./pages/Register'))
const Panel = lazy(() => import('./pages/panel'))

const customTheme = {
  ...theme,
  colors: {
    ...theme.colors,
    background: '#262626',
    primary: '#8705BE',
    secondary: '#CECECE'
  }
}

function App() {
  return (
    <ThemeProvider theme={customTheme}>
      <CSSReset />
      <GlobalSyle />

      <BrowserRouter>
        <Suspense fallback={<Loading isFull />}>
          <Switch>
            <Route path="/" exact component={Home} />
            <Route path="/login" component={Login} />
            <Route path="/register" component={Register} />
            <Route path="/panel" component={Panel} />
            <Redirect to="/" />
          </Switch>
        </Suspense>
      </BrowserRouter>
    </ThemeProvider>
  )
}

export default App
