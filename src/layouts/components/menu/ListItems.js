import React from 'react'
import ListItem from '@mui/material/ListItem'
import makeStyles from '@mui/styles/makeStyles'

import List from '@mui/material/List'
import ListItemText from '@mui/material/ListItemText'
import ListSubheader from '@mui/material/ListSubheader'
import ListItemIcon from '@mui/material/ListItemIcon'

import { getMenu } from './structure'
import Link from '../Link'

import { useIntl } from 'react-intl'

const useStyles = makeStyles(theme => ({
  list: {
    width: '100%',
  },
  link: {
    textDecoration: 'none',
    color: theme.palette.primary.contrastText,
  },
  active: {
    display: 'block',
    backgroundColor: theme.palette.action.selected,
  },
}))

export const MainListItems = ({ variant }) => {
  const classes = useStyles()

  const { formatMessage: i18n } = useIntl()

  return (
    <List className={classes.list}>
      {getMenu('MainMenu').map(menuItem => {
        return (
          <Link
            to={`${menuItem.path}`}
            key={menuItem.key}
            exact={!!menuItem.exact}
            activeClassName={classes.active}
            // className={classes.link}
          >
            <ListItem button>
              <ListItemIcon>
                <menuItem.Icon />
              </ListItemIcon>
              {variant !== 'compact' && (
                <ListItemText primary={i18n({ id: menuItem.i18nNamespace })} />
              )}
            </ListItem>
          </Link>
        )
      })}
    </List>
  )
}

export const SecondaryListItems = () => {
  const { formatMessage: i18n } = useIntl()

  return (
    <>
      <ListSubheader inset />
      {getMenu('SecondaryMenu').map(menuItem => {
        return (
          <Link to={menuItem.path} key={menuItem.key}>
            <ListItem button>
              <ListItemIcon>
                <menuItem.Icon />
              </ListItemIcon>
              <ListItemText primary={i18n({ id: menuItem.i18nNamespace })} />
            </ListItem>
          </Link>
        )
      })}
    </>
  )
}
