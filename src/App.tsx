import getTheme from './styles/getTheme'
import CssBaseline from '@mui/material/CssBaseline'
import { BrowserRouter as Router } from 'react-router-dom'
import {
  ThemeProvider as MuiThemeProvider,
  Theme,
  StyledEngineProvider,
} from '@mui/material/styles'



import IntlProvider from './intl/IntlProvider'
import Routes from './Routes'
import DarkModeProvider from './providers/DarkModeProvider'

import './App.css'

import { createGenerateClassName, StylesProvider } from '@mui/styles'

declare module '@mui/styles/defaultTheme' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  interface DefaultTheme extends Theme {}
}

const darkModeConfig = {
  useLocalStorage: true,
}

const generateClassName = createGenerateClassName({
  seed: 'BO-',
})

const App = () => {



  return (
        <StylesProvider generateClassName={generateClassName}>
          <CssBaseline />
          <Router>
            <DarkModeProvider config={darkModeConfig}>
              {([colorScheme]) => (
                <StyledEngineProvider injectFirst>
                  <MuiThemeProvider
                    //key={colorScheme}
                    theme={getTheme(colorScheme)}
                  >
                    <IntlProvider>
                      <Routes />
                    </IntlProvider>
                  </MuiThemeProvider>
                </StyledEngineProvider>
              )}
            </DarkModeProvider>
          </Router>
        </StylesProvider>
  )
}

export default App
