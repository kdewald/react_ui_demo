import React from 'react'
import { useIntl } from 'react-intl'

import Container from '@mui/material/Container'
import Grid from '@mui/material/Grid'
import Typography from '@mui/material/Typography'
import { Unauthenticated as LayoutUnauthenticated } from '../layouts'

const i18nNs = 'pages.logout'

const LogoutPage = () => {
  const { formatMessage: i18n } = useIntl()

  return (
    <LayoutUnauthenticated
    // sectionTitle={i18n({ id: `${i18nNs}.appbar-title` })}
    >
      <Container maxWidth="xs">
        <Grid container spacing={3}>
          <Grid item xs={12} md={12} lg={12}>
            <Typography variant="h5" component="h1" align="center">
              {i18n({ id: `${i18nNs}.title` }, { displayName: 'Kevin' })}
            </Typography>
          </Grid>
        </Grid>
      </Container>
    </LayoutUnauthenticated>
  )
}

export default LogoutPage
