import themeCommon from './themeCommon'
import { pink, purple, darkblue, accentPink } from './variables'

const themeLight = {
  ...themeCommon,
  custom: {
    needReviewTypePastel: {
      qa: '#2E86C1',
      qaSpotter: '#A569BD',
    },
    errorPastel: {
      light: '#FFCDD2',
      main: '#EF9A9A',
      dark: '#EF5350',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    warningPastel: {
      light: '#FFF59D',
      main: '#FFE0B2',
      dark: '#FFCC80',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    successPastel: {
      light: '#C8E6C9',
      main: '#A5D6A7',
      dark: '#81C784',
      contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    columns: {
      default: '#E5E7E9',
      main: '#FFF59D',
    },
    cards: {
      default: '#ffe4e1',
    },
    background: {
      default: '#E5E7E9',
      darkBox: '#F0F0F0',
      lightBox: 'FFFFFF',
    },
  },
  palette: {
    mode: 'light',
    common: {
      black: 'rgba(0, 0, 0, 0.87)',
      white: '#FFFFFF',
    },
    background: {
      paper: 'rgb(245, 245, 245)',
      default: '#fafafa',
    },
    primary: {
      main: purple,
      contrastText: '#fff',
    },
    secondary: {
      main: pink,
      contrastText: '#fff',
    },
    success: {
      main: '#6ac16e',
      contrastText: '#fff',
    },
    error: {
      main: '#f1564b',
      contrastText: '#fff',
    },
    info: {
      main: darkblue,
      contrastText: '#fff',
    },
  },
  components: {
    // Style sheet name ⚛️
    MuiIconButton: {
      // Name of the rule
      root: {
        // Some CSS
        color: '#90A4AE',
        padding: 8,
      },
    },
    MuiPaper: {
      styleOverrides: {
        root: {
          background: '#FFF',
          border: 'none',
          boxShadow: 'rgb(0 0 0 / 16%) 0px 12px 60px -12px',
        },
      },
    },
    MuiDrawer: {
      styleOverrides: {
        root: {
          border: 'none',
          boxShadow: 'rgb(0 0 0 / 16%) 0px 12px 60px -12px',
        },
        paper: {
          border: 'none',
          boxShadow: 'none',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          boxShadow: 'none',
        },
        containedSecondary: {
          backgroundImage: `linear-gradient(-45deg,${accentPink},${pink} 99.9%)`,
          boxShadow: `${pink} 0px 4px 12px -4px`,
          '&:hover': {
            boxShadow: `${pink} 0px 4px 18px -4px`,
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        primary: {
          backgroundImage: `linear-gradient(-45deg,${accentPink},${pink} 99.9%)`,
          boxShadow: `${pink} 0px 4px 12px -4px`,
          '&:hover': {
            boxShadow: `${pink} 0px 4px 18px -4px`,
          },
        },
      },
    },
    MuiDataGrid: {
      styleOverrides: {
        main: {
          marginTop: 4,
          backgroundColor: '#FFF',
          borderRadius: '10px',
        },
        root: {
          border: 'none',
          backgroundColor: 'transparent',
        },
      },
    },
    MuiGrid: {
      styleOverrides: {
        root: {
          '& .MuiCard-root': {
            boxShadow: 'rgb(0 0 0 / 16%) 0px 4px 8px -4px',
            '&:hover': {
              cursor: 'pointer',
              boxShadow: 'rgb(0 0 0 / 48%) 0px 4px 8px -4px',
            },
          },
        },
      },
    },
    MuiInputBase: {
      styleOverrides: {
        root: {
          background: '#FFF',
        },
      },
    },
    MuiToggleButton: {
      styleOverrides: {
        root: {
          background: '#FFF',
        },
      },
    },
  },
}

export default themeLight
