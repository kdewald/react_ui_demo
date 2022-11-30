import React, { ReactNode, useState } from 'react'

import { ListItemIcon, ListItem } from '@mui/material'

import MuiDrawer from '@mui/material/Drawer'
import { styled, Theme, CSSObject } from '@mui/material/styles'

// Icons
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew'
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos'

type Props = {
  subDrawer: ReactNode
  defaultIsCollapsed?: boolean
}

const drawerWidth = 240

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
  position: 'relative',
})

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(7)} + 1px)`,
  },
  position: 'relative',
})

const Drawer = styled(MuiDrawer, {
  shouldForwardProp: prop => prop !== 'open',
})(({ theme, open }) => ({
  width: drawerWidth,
  flexShrink: 0,
  whiteSpace: 'nowrap',
  boxSizing: 'border-box',
  ...(open && {
    ...openedMixin(theme),
    '& .MuiDrawer-paper': openedMixin(theme),
  }),
  ...(!open && {
    ...closedMixin(theme),
    '& .MuiDrawer-paper': closedMixin(theme),
  }),
}))

export default function SubSideBar(props: Props) {
  const { subDrawer, defaultIsCollapsed = false } = props
  const [barCollapsed, setBarCollapsed] = useState(defaultIsCollapsed)

  return (
    <React.Fragment>
      {subDrawer && (
        <Drawer variant="permanent" open={!barCollapsed}>
          {subDrawer}
          <ListItem
            style={{
              position: 'absolute',
              bottom: 0,
              height: '45px',
            }}
            button
            onClick={() => setBarCollapsed(!barCollapsed)}
          >
            <ListItemIcon>
              {barCollapsed ? (
                <ArrowForwardIosIcon color="primary" />
              ) : (
                <ArrowBackIosNewIcon color="primary" />
              )}
            </ListItemIcon>
          </ListItem>
        </Drawer>
      )}
    </React.Fragment>
  )
}
