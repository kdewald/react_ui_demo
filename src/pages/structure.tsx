// Pages
import LogoutPage from './Logout'
import NotFoundPage from './NotFound'
import DashboardPage from './Dashboard'
import SearchPage from './Search'
import MyCollectionsPage from './MyCollections'
import Redirect from './Redirect'

// Icons
import DashboardIcon from '@mui/icons-material/Dashboard'
import ListIcon from '@mui/icons-material/List'
import SearchIcon from '@mui/icons-material/Search'

import { OverridableComponent } from '@mui/material/OverridableComponent'
import { SvgIconTypeMap } from '@mui/material'

export type TExternalPageProps = {}

export type TPageProps = {}

const menu: TMenuItem[] = [
  {
    key: 'dashboard',
    i18nNamespace: 'menu.dashboard',
    to: '/dashboard',
    path: '/dashboard',
    requiresAuth: true,
    menuSections: ['MainMenu'],
    Component: DashboardPage,
    Icon: DashboardIcon,
  },
  {
    key: 'search',
    i18nNamespace: 'menu.search',
    to: '/search',
    path: '/search',
    requiresAuth: true,
    menuSections: ['MainMenu'],
    Component: SearchPage,
    Icon: SearchIcon,
  },
  {
    key: 'myCollections',
    i18nNamespace: 'menu.myCollections',
    to: '/myCollections',
    path: '/myCollections',
    requiresAuth: true,
    menuSections: ['MainMenu'],
    Component: MyCollectionsPage,
    Icon: ListIcon,
  },
  {
    key: 'logout',
    path: '/logout',
    exact: true,
    requiresAuth: true,
    Component: LogoutPage,
  },
  {
    key: 'pageNotFound',
    path: '/',
    requiresAuth: true,
    Component: Redirect,
  },
  {
    key: 'notFoundPage',
    path: '*',
    requiresAuth: true,
    Component: NotFoundPage,
  },
]

export type TMenuItem = {
  key: string
  path: string
  to?: string
  i18nNamespace?: string
  exact?: boolean
  menuSections?: ('MainMenu' | 'SubMenu')[]
  subMenu?: TMenuItem[]
  requiresAuth: boolean
  Component: any
  Icon?: OverridableComponent<SvgIconTypeMap<{}, 'svg'>> & {
    muiName: string
  }
}
export const getPrivate = (): TMenuItem[] => {
  return menu.filter(({ requiresAuth }) => !!requiresAuth)
}

export const getMenu = (section: string): any => {
  function copy(o: {}) {
    return Object.assign({}, o)
  }

  return menu.map(copy).filter(function f(o: any) {
    let flag = false
    let subItemsFlag = false
    if (o.menuSections?.includes(section) || !section) {
      flag = true
    }
    if (o.items) {
      o.items = o.items.map(copy).filter(f)
      subItemsFlag = !!o.items.length
    }
    return flag || (o.items && subItemsFlag)
  })
}

export const getSubMenu = (menuKey?: string, section?: string) => {
  function copy(o: {}) {
    return Object.assign({}, o)
  }

  const chosenMenu = (menu.find(m => m.key === menuKey) || []) as any

  return chosenMenu?.subMenu?.filter(function f(o: any) {
    let flag = false
    let subItemsFlag = false
    if (o.menuSections?.includes(section) || !section) {
      flag = true
    }
    if (o.items) {
      o.items = o.items.map(copy).filter(f)
      subItemsFlag = !!o.items.length
    }
    return flag || (o.items && subItemsFlag)
  })
}

export default menu
