import React from 'react'

import { Route, Switch, Redirect } from 'react-router-dom'

import LoginPage from '../pages/Login'

function Public() {
  return (
    <Switch>
      <Route path="/login">
        <LoginPage />
      </Route>
      <Route path="*">
        <Redirect to={'/login'} />
      </Route>
    </Switch>
  )
}

export default Public
