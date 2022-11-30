import { ReactNode, memo } from 'react'
import { Box } from '@mui/material'

import MainMenu from './MainMenu'
import SubSideBar from './SubSideBar'

type MainSideBarProps = {
  subDrawer: ReactNode
}

function MainSideBar(props: MainSideBarProps) {
  const { subDrawer } = props

  return (
    <Box
      sx={{
        display: 'flex',
        flexDirection: 'row',
      }}
    >
      <MainMenu />
      <SubSideBar subDrawer={subDrawer} defaultIsCollapsed={true} />
    </Box>
  )
}

export default memo(MainSideBar)
