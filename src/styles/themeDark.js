import { createTheme } from '@mui/material/styles'
import themeCommon from './themeCommon'
import { darkblue, lightblue, pink } from './variables'

const theme = createTheme({
  ...themeCommon,
  palette: {
    mode: 'dark',
    common: {
      black: 'rgba(0, 0, 0, 0.84)',
      white: '#fff',
    },
    background: {
      default: '#222222',
      paper: '#282828',
    },
    primary: { main: darkblue },
    secondary: { main: pink },
    info: { main: lightblue },
    success: {
      main: '#6ac16e',
    },
    error: {
      main: '#f1564b',
    },
    text: {
      primary: '#bcbcbc',
    },
  },
  custom: {
    reactJsonView: 'monokai',
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
      default: 'rgba(0, 0, 0, 0.38)',
      main: '#85929E',
    },
    cards: {
      default: 'rgba(0, 0, 0, 0.87)',
      //contrastText: 'rgba(0, 0, 0, 0.87)',
    },
    background: {
      default: '#85929E',
      darkBox: '#222222',
      lightBox: '#282828',
    },
  },
  props: {
    MuiIconButton: {
      disableTouchRipple: true,
      disableFocusRipple: true,
    },
    MuiButtonBase: {
      disableTouchRipple: true,
    },
    MuiTooltip: {
      placement: 'right',
      arrow: true,
    },
    MuiTextField: {
      margin: 'dense',
    },
    MuiMenuItem: {
      dense: true,
    },
    MuiSelect: {
      disableUnderline: true,
    },
    MuiFab: {
      backgroundColor: pink,
    },
  },
  components: {
    ...themeCommon.components,
    MuiGrid: {
      styleOverrides: {
        root: {
          ...themeCommon.components.MuiGrid.styleOverrides.root,
          '& .MuiCard-root': {
            '&:hover': {
              cursor: 'pointer',
              boxShadow: 'rgb(255 255 255 / 48%) 0px 4px 8px -4px',
            },
          },
        },
      },
    },
    MuiFab: {
      styleOverrides: {
        primary: {
          background: pink,
        },
      },
    },
  },
})

export default createTheme({
  ...theme,
  overrides: {
    MuiPaper: {
      root: {
        padding: '10px',
        marginBottom: '10px',
        background: 'red',
        backgroundColor: 'red',
      },
    },
    MuiCssBaseline: {
      '@global': {
        body: {
          fontFamily: 'IBM Plex Sans, sans-serif',
          backgroundColor: theme.palette.background.paper,
          overflow: 'hidden',
          height: '100vh',
        },
        '*::-webkit-scrollbar': {
          width: '7px',
          height: '7px',
        },
        '*::-webkit-scrollbar-track': {
          boxShadow: 'inset 7px 10px 12px #282828',
          backgroundColor: '#222222',
          borderRadius: '10px',
        },
        '*::-webkit-scrollbar-thumb': {
          backgroundColor: '#4a4a4a',
          borderRadius: '10px',
        },
        '*::-webkit-scrollbar-thumb:hover': {
          backgroundColor: '#606060',
        },
      },
    },
    MuiSvgIcon: {
      fontSizeSmall: {
        fontSize: 16,
        verticalAlign: 'middle',
      },
    },
    MuiIconButton: {
      root: {
        color: theme.palette.grey[300],
        background: theme.palette.background.paper,
        borderRadius: 4,
        '&:hover': {
          backgroundColor: theme.palette.grey.A700,
          pointer: 'cursor',
        },
        '&:active': {
          backgroundColor: theme.palette.grey[600],
        },
        '&$disabled': {
          color: theme.palette.grey[500],
        },
      },
    },
    MuiButton: {
      root: {
        textTransform: 'none',
        color: theme.palette.grey[300],
        background: theme.palette.background.paper,
        borderRadius: 4,
        '&:hover': {
          backgroundColor: theme.palette.grey.A700,
          pointer: 'cursor',
        },
        '&:active': {
          backgroundColor: theme.palette.grey[600],
        },
        '&$disabled': {
          color: theme.palette.grey[500],
        },
      },
    },
    MuiTooltip: {
      tooltip: {
        fontSize: 12,
        backgroundColor: theme.palette.grey.A700,
        border: `1px solid ${theme.palette.grey[500]}`,
        boxShadow: theme.shadows[2],
      },
      arrow: {
        color: theme.palette.grey[500],
      },
    },
    MuiListItem: {
      // gutters: {
      //   paddingTop: theme.spacing(1),
      //   paddingBottom: theme.spacing(1),
      //   paddingLeft: theme.spacing(4),
      //   paddingRight: theme.spacing(4),
      // },
    },
    MuiMenuItem: {
      root: {
        height: 25,
        display: 'flex',
        alignItems: 'center',
      },
    },
    MuiButtonGroup: {
      root: {
        height: 25,
      },
    },
    MuiSlider: {
      root: {
        width: 'calc(100% - 18px)',
        marginLeft: 9,
        color: theme.palette.grey[200],
      },
      thumb: {
        width: 15,
        height: 15,
        marginTop: -7,
        marginLeft: -8,
        backgroundColor: theme.palette.background.default,
        border: `2px solid ${theme.palette.grey[200]}`,
        boxShadow: `0px 0px 0px 3px ${theme.palette.background.default}`,
        '&:focus, &:hover, &$active': {
          boxShadow: `0px 0px 0px 3px ${theme.palette.background.default}`,
        },
        '&:hover': {
          borderColor: theme.palette.grey[100],
        },
      },
      valueLabel: {
        left: 'calc(-50% - 5px)',
        '&>span': {
          backgroundColor: theme.palette.grey.A700,
          border: `1px solid ${theme.palette.grey[500]}`,
          boxShadow: theme.shadows[2],
          '&>span': {
            color: theme.palette.text.primary,
          },
        },
      },
      track: {
        height: 2,
        marginLeft: -8,
        width: 'calc(100% + 16px)',
        borderRadius: 1,
      },
      rail: {
        height: 2,
        marginLeft: -8,
        width: 'calc(100% + 16px)',
        borderRadius: 1,
      },
    },
    MuiSelect: {
      select: {
        '&:focus': {
          backgroundColor: theme.palette.grey[800],
        },
      },
    },
  },
})

// export default themeDark;
