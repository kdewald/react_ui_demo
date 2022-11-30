import React from 'react'
import Div100vh from 'react-div-100vh'
import MainMenu from './components/MainMenu'
import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  },
}))

function MainLayout({ children }: { children: any }) {
  const classes = useStyles()

  return (
    <Div100vh className={classes.root}>
      <MainMenu />
      {children}
    </Div100vh>
  )
}

export default MainLayout
