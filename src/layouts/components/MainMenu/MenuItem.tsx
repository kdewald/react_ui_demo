import React, { ElementType, memo } from 'react'

import IconButton from '@mui/material/IconButton'
import DeleteIcon from '@mui/icons-material/Delete'
import Badge from '@mui/material/Badge'

import Link from '../Link'
import clsx from 'clsx'
import makeStyles from '@mui/styles/makeStyles'
import { Tooltip } from '@mui/material'
import { useIntl } from 'react-intl'

type IProps = {
  Icon?: ElementType
  active?: boolean
  notificationCounter?: number
  to?: string
  exact?: boolean
  onClick?(event: React.MouseEvent<HTMLButtonElement>): void
  i18nNamespace?: string
}

const useStyles = makeStyles((theme: any) => {
  return {
    root: {
      display: 'flex',
      justifyContent: 'center',
      height: 46,
      width: 56,
    },
    button: {
      width: 36,
      height: 36,
      '&:hover': {
        //backgroundColor: theme.palette.common.white,
        '& .MuiSvgIcon-root': {
          // color: theme.palette.primary.main,
        },
      },
    },
    buttonActive: {
      borderRadius: '50%',
      // backgroundColor: theme.palette.common.white,
    },
    icon: {
      color: theme.palette.primary.main,
    },
    iconActive: {
      // color: theme.palette.primary.main,
    },
  }
})

function MenuItem({
  active,
  notificationCounter = 0,
  Icon = DeleteIcon,
  to,
  exact,
  onClick,
  i18nNamespace,
}: IProps) {
  const classes = useStyles()
  const { formatMessage: i18n } = useIntl()

  if (onClick) {
    return (
      <Tooltip title={i18nNamespace ? i18n({ id: i18nNamespace }) : ''} placement="right">
        <div className={classes.root}>
          <IconButton
            className={clsx({
              [classes.button]: true,
              [classes.buttonActive]: active,
            })}
            size="medium"
            onClick={onClick}
          >
            <Badge badgeContent={notificationCounter} color="secondary">
              <Icon
                classes={{
                  root: clsx({
                    [classes.icon]: true,
                    [classes.iconActive]: active,
                  }),
                }}
              />
            </Badge>
          </IconButton>
        </div>
      </Tooltip>
    )
  }

  return (
    <Link to={to} exact={exact} className={classes.root}>
      <Tooltip title={i18nNamespace ? i18n({ id: i18nNamespace }) : ''} placement="right">
        <IconButton
          className={clsx({
            [classes.button]: true,
            [classes.buttonActive]: active,
          })}
          size="medium"
        >
          <Badge badgeContent={notificationCounter} color="secondary">
            <Icon
              classes={{
                root: clsx({
                  [classes.icon]: true,
                  [classes.iconActive]: active,
                }),
              }}
            />
          </Badge>
        </IconButton>
      </Tooltip>
    </Link>
  )
}

export default memo(MenuItem)
