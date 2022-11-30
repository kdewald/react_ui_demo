import { createTheme } from '@mui/material/styles'

import lightTheme from './themeLight'
import darkTheme from './themeDark'

const CustomTheme = (type = 'light') => {
  const theme = type === 'light' ? lightTheme : darkTheme
  return createTheme({
    ...theme,
  })
}

export default CustomTheme
