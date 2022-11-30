import React from 'react'
import { useIntl } from 'react-intl'
import Container from '@mui/material/Container'

import { Unauthenticated as LayoutUnauthenticated } from '../../layouts'

import LoginBox from './components/LoginBox'

const LoginPage = () => {
  const { formatMessage: i18n } = useIntl()
  const i18nNs = 'pages.login'

  return (
    <LayoutUnauthenticated sectionTitle={i18n({ id: `${i18nNs}.appbar-title` })}>
      <Container component="main" maxWidth="xs">
        <LoginBox />
      </Container>
    </LayoutUnauthenticated>
  )
}

export default LoginPage
