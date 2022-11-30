import { Typography } from '@mui/material'
import React from 'react'
import { useIntl } from 'react-intl'
import { Basic as LayoutBasic } from '../layouts'

const NotAuthorizedPage = () => {
  const { formatMessage: i18n } = useIntl()
  const i18nNs = 'pages.403'

  return (
    <LayoutBasic>
      <div>
        <Typography variant="h6">{i18n({ id: `${i18nNs}.appbar-title` })}</Typography>
        <div>
          <pre>{i18n({ id: `${i18nNs}.content` })}</pre>
        </div>
      </div>
    </LayoutBasic>
  )
}

export default NotAuthorizedPage
