import React from 'react'
import makeStyles from '@mui/styles/makeStyles'
import { Box } from '@mui/material'

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex',
    color: theme.palette.text.primary,
    backgroundColor: theme.palette.background.paper,
  },
  content: {
    flexGrow: 1,
    height: '100vh',
    overflow: 'auto',
  },
}))

export const Unauthenticated = ({ children }: any) => {
  const classes = useStyles()

  return (
    <Box className={classes.root}>
      <main className={classes.content}>{children}</main>
    </Box>
  )
}
