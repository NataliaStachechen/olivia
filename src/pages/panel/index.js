import React, { lazy, Suspense } from 'react'

import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom'

import { Loading } from 'components/Loading'

const Timeline = lazy(() => import('./Timeline'))
const Intro = lazy(() => import('./Intro'))
const Networking = lazy(() => import('./Networking'))
const Investidor = lazy(() => import('./Investidor'))
const Profile = lazy(() => import('./Profile'))

function Panel() {
  return (
    <BrowserRouter>
      <Suspense fallback={<Loading isFull />}>
        <Switch>
          <Route path="/panel/home" component={Timeline} />
          <Route path="/panel/intro" component={Intro} />
          <Route path="/panel/networking" component={Networking} />
          <Route path="/panel/investidor" component={Investidor} />
          <Route path="/panel/profile" component={Profile} />
          <Redirect to="/panel/home" />
        </Switch>
      </Suspense>
    </BrowserRouter>
  )
}

export default Panel
