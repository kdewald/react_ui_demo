import React from 'react'

import makeStyles from '@mui/styles/makeStyles'
import { ENVIRONMENT } from 'src/providers/appConfig'

const useStyles = makeStyles({
  root: {
    opacity: 0.2,
    zIndex: 9999999,
    cursor: 'default',
    pointerEvents: 'none',
    userSelect: 'none',
    display: 'flex',
    height: '100%',
    width: '100%',
    position: 'fixed',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: '-5%',
    marginLeft: '4%',
    transform: 'rotate(-20deg)',
    fontSize: 120,
    letterSpacing: 100,
  },
})

const Environment = () => {
  const classes = useStyles()
  switch (ENVIRONMENT) {
    case 'local':
      return <div className={classes.root}>Local</div>
    case 'staging':
      return <div className={classes.root}>Staging</div>
    default:
      return null
  }
}

export default Environment
