import React, { memo, useCallback } from 'react'
import { useIntl } from 'react-intl'
import makeStyles from '@mui/styles/makeStyles'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import { useLocation, useHistory } from 'react-router-dom'
import { Tooltip } from '@mui/material'

import { getSubMenu } from '../../pages/structure'

const useStyles = makeStyles(theme => ({
  divider: {
    width: '100%',
  },
  title: {
    fontWeight: 900,
    fontSize: 24,
    lineHeight: 29,
  },
  listItemText: {
    fontSize: 15,
  },
  listItemIcon: {
    color: '#ac76a8',
  },
}))

function SubDrawer({ title, menuId }: { title: string; menuId: string }) {
  const classes = useStyles()
  const { pathname } = useLocation()
  const history = useHistory()
  const { formatMessage: i18n } = useIntl()

  const handleMenuClick = useCallback(
    (path: string) => {
      history.push(path)
    },
    [history],
  )

  return (
    <React.Fragment>
      <List sx={{ paddingTop: 5 }}>
        {getSubMenu(menuId, 'SubMenu')?.map((menuItem: any) => {
          return (
            <ListItem
              button
              key={menuItem.key}
              onClick={() => handleMenuClick(`${menuItem.to}`)}
              selected={pathname.includes(`${menuItem.path}`)}
            >
              <Tooltip title={i18n({ id: menuItem.i18nNamespace })} placement="right">
                <ListItemIcon
                  classes={{
                    root: classes.listItemIcon,
                  }}
                >
                  <menuItem.Icon />
                </ListItemIcon>
              </Tooltip>
              <ListItemText
                classes={{
                  primary: classes.listItemText,
                }}
                primary={i18n({ id: menuItem.i18nNamespace })}
              />
            </ListItem>
          )
        })}
      </List>
    </React.Fragment>
  )
}

export default memo(SubDrawer)
