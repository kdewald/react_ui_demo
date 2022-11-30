import React, { ReactChildren, ReactChild, ReactElement } from 'react'

import Div100vh from 'react-div-100vh'

import makeStyles from '@mui/styles/makeStyles'
import Environment from './components/MainMenu/Environment'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  },
}))

function MainWrapper({
  children,
}: {
  children: ReactChildren | ReactElement | (ReactChild | null)[] | null
}) {
  const classes = useStyles()

  return (
    <Div100vh className={classes.root}>

        <>
          <Environment />
          {children}
        </>
    </Div100vh>
  )
}

export default MainWrapper
