import { useCallback, memo, useMemo } from 'react'
import { Drawer } from '@mui/material'
import Brightness4Icon from '@mui/icons-material/Brightness4'
import { useLocation } from 'react-router-dom'
import makeStyles from '@mui/styles/makeStyles'

import MenuItem from './MenuItem'
import LogoIcon from './LogoIcon'
import { getMenu } from '../../../pages/structure'
import { useDarkMode } from '../../../providers/DarkModeProvider'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    width: 56,
  },
  spacer: {
    flex: 1,
  },
})

function MainMenu() {
  const classes = useStyles()
  const [colorScheme, setColorScheme] = useDarkMode()
  const { pathname } = useLocation()

const mainMenu = useMemo(() => getMenu('MainMenu'), [])
  const handleToggleTheme = useCallback(() => {
    if (colorScheme === 'light') {
      setColorScheme('dark')
    } else {
      setColorScheme('light')
    }
  }, [colorScheme, setColorScheme])

  return (
    <Drawer variant="permanent" className={classes.root}>
      <LogoIcon />
      {mainMenu
        .filter(({ Icon }: any) => !!Icon)
        .map((menuItem: any) => (
          <MenuItem
            key={menuItem.key}
            Icon={menuItem.Icon}
            to={`${menuItem.to}`}
            active={pathname.startsWith(`${menuItem.to}`)}
            i18nNamespace={menuItem.i18nNamespace}
          />
        ))}
      <div className={classes.spacer} />
      <MenuItem Icon={Brightness4Icon} onClick={handleToggleTheme} />
    </Drawer>
  )
}

export default memo(MainMenu)
