import React from 'react'

import Private from './Private'
import { Switch, Route } from 'react-router-dom'

const Router = () => {

    return (
      <Switch>
        <Route path="/">
          <Private  />
        </Route>
      </Switch>
    )

}

export default Router
