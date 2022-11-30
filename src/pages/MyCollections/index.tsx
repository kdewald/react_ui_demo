import React from 'react'
import { useIntl } from 'react-intl'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import { Basic as Layout } from '../../layouts'
import { useTheme } from '@mui/system'
import MyCollections from './components/MyCollections'

const ManagePage = () => {
  const { formatMessage: i18n } = useIntl()
  const i18nNs = 'pages.myCollections'
  const theme = useTheme()
  return (
    <Layout sectionTitle={i18n({ id: `${i18nNs}.appbar-title` })}>
      <Container
        maxWidth={false}
        sx={{
          // backgroundColor: theme.palette.background.paper,
          height: 'calc(100vh -20px)',
          color: theme.palette.text.primary,
        }}
      >
        <Grid container spacing={0}>
          <Grid item xs={12}>
            <MyCollections />
          </Grid>
        </Grid>
      </Container>
    </Layout>
  )
}

export default ManagePage
