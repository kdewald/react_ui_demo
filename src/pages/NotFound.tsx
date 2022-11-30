import { Typography } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'
import { Unauthenticated as LayoutUnauthenticated } from '../layouts'

const NotFoundPage = () => {
  const { formatMessage: i18n } = useIntl()
  const i18nNs = 'pages.404'

  return (
    <LayoutUnauthenticated>
      <div>
        <Typography variant="h6">{i18n({ id: `${i18nNs}.appbar-title` })}</Typography>
        <div>
          <pre>{i18n({ id: `${i18nNs}.content` })}</pre>
        </div>
      </div>
    </LayoutUnauthenticated>
  )
}

export default NotFoundPage
