import React from 'react'

import { Route, Switch } from 'react-router-dom'
import { getPrivate } from '../pages/structure'

const privateRoutes = getPrivate()

function Private() {

  return (
    <Switch>
      {privateRoutes.reduce(
        (
          acc,
          {
            path,
            exact = false,
            Component,
            subMenu,
            key,
          },
        ) => {
          if (subMenu) {
            subMenu.forEach(({ path, Component, key }) => {
              if (Component) {
                acc.push(
                  <Route path={`${path}`} key={key}>
                    {() =>
                        <Component />
                    }
                  </Route>,
                )
              }
            })
          }
          if (Component) {
            acc.push(
              <Route path={`${path}`} exact={exact} key={key}>
                {() =>
                    <Component />
                  
                }
              </Route>,
            )
          }
          return acc
        },
        [] as any[],
      )}
    </Switch>
  )
}

export default Private
