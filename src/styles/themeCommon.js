const themeCommon = {
  typography: {
    fontFamily: [
      '"Lato"',
      '-apple-system',
      'BlinkMacSystemFont',
      '"Segoe UI"',
      'Roboto',
      '"Helvetica Neue"',
      'Arial',
      'sans-serif',
      '"Apple Color Emoji"',
      '"Segoe UI Emoji"',
      '"Segoe UI Symbol"',
    ].join(','),
  },
  reactJsonView: 'rjv-default',
  components: {
    MuiPaper: {
      styleOverrides: {
        root: {
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
    MuiDataGrid: {
      styleOverrides: {
        main: {
          marginTop: 4,
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
  },
}

export default themeCommon
