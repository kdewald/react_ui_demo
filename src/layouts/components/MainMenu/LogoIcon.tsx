import { memo } from 'react'

import makeStyles from '@mui/styles/makeStyles'

const useStyles = makeStyles({
  root: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    height: 46,
    width: 56,
    fontFamily: 'Lato',
    fontStyle: 'italic',
    fontWeight: 900,
    fontSize: 24,
    backgroundImage: 'url(https://global-uploads.webflow.com/5e157547d6f791d34ea4e2bf/6087f2b060c7a92408bac811_logo.svg)',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: '60%',
    // lineHeight: 29
  },
})

function LogoIcon() {
  const classes = useStyles()
  return <div className={classes.root}></div>
}

export default memo(LogoIcon)
