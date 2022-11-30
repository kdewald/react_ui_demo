import React from 'react'
import clsx from 'clsx'
import makeStyles from '@mui/styles/makeStyles'

import MainSideBar from './components/MainSideBar'
import { motion } from 'framer-motion'

import MainWrapper from './MainWrapper'
import TopBar from './components/TopBar'
import { useTheme } from '@mui/styles'
import { Box } from '@mui/material'

const useStyles = makeStyles(theme => ({
  mainColumn: {
    position: 'relative',
    width: '100%',
  },
  content: {
    height: '100vh',
    overflow: 'auto',
  },
}))

export const Basic = ({
  children,
  sectionTitle,
  subDrawer,
  topBarActions,
  goBackButtonLink,
  topBarWithBackground,
  showSidebar = true,
  topBarComponent,
}: any) => {
  const theme = useTheme()
  const classes = useStyles()

  return (
    <MainWrapper>
      {showSidebar && <MainSideBar subDrawer={subDrawer} />}
      <Box
        className={classes.mainColumn}
        sx={{
          color: theme.palette.text.primary,
          backgroundColor: theme.palette.background.paper,
        }}
      >
        {/* <TopBar onClickTab={onClickTab} activeTab={activeTab} /> */}
        {topBarComponent}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.4 }}
          className={clsx({ [classes.content]: true })}
        >
          {sectionTitle ? (
            <Box
              sx={{
                marginLeft: '20px',
              }}
            >
              <TopBar
                headline={sectionTitle}
                actions={topBarActions}
                goBackButtonLink={goBackButtonLink}
                withBackground={topBarWithBackground}
              />
            </Box>
          ) : null}
          {/* <main> */}
          {children}
          {/* </main> */}
        </motion.div>
      </Box>
    </MainWrapper>
  )
}
