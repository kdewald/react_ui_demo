import React, { memo, useCallback } from 'react'

import makeStyles from '@mui/styles/makeStyles'
import { Typography } from '@mui/material'
import IconButton from '@mui/material/IconButton'
import ArrowBackIcon from '@mui/icons-material/ArrowBack'
import { useHistory } from 'react-router-dom'
import clsx from 'clsx'

const useStyles = makeStyles((theme: any) => ({
  root: {
    display: 'flex',
    height: 56,
    // paddingLeft: theme.spacing(3),
    // paddingRight: theme.spacing(1),
    alignItems: 'center',
  },
  withBackground: {
    // backgroundColor: theme.palette.common.white,
    // borderBottom: 'solid 1px',
    // borderLeft: "solid 1px",
    // borderColor: theme.palette.divider,
  },
  headline: {
    flex: '1',
  },
  avatar: {
    // marginRight: theme.spacing(2),
  },
}))

type TProps = {
  headline: string
  goBackButtonLink: string
  actions?: any
  withBackground?: boolean
}

function TopBar({ headline, goBackButtonLink, actions, withBackground = true }: TProps) {
  const classes = useStyles()
  const history = useHistory()

  const handleGoBack = useCallback(() => {
    history.push(goBackButtonLink)
  }, [goBackButtonLink, history])

  return (
    <div className={clsx(classes.root, withBackground ? classes.withBackground : {})}>
      {goBackButtonLink && (
        <IconButton onClick={handleGoBack} size="large">
          <ArrowBackIcon />
        </IconButton>
      )}
      <Typography variant="h6" className={classes.headline}>
        {headline}
      </Typography>
      {actions}
    </div>
  )
}

export default memo(TopBar)
