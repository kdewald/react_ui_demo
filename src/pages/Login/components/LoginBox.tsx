import React from 'react'

import { useIntl } from 'react-intl'
import Avatar from '@mui/material/Avatar'
import Box from '@mui/material/Box'
import LockOutlinedIcon from '@mui/icons-material/LockOutlined'
import Typography from '@mui/material/Typography'



const LoginBox = () => {
  const { formatMessage: i18n } = useIntl()
  const i18nNs = 'pages.login'
  return (
    <Box
      sx={{
        marginTop: 8,
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
        <LockOutlinedIcon />
      </Avatar>
      <Typography component="h1" variant="h5">
        {i18n({ id: `${i18nNs}.title-no-auth` })}
      </Typography>
    
    </Box>
  )
}

export default LoginBox
