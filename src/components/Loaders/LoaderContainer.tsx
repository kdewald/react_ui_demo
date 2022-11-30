import { memo, ReactElement } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

type Props = {
  imageComponent?: ReactElement
  loader: ReactElement
  main?: string
  marginTop?: number
  marginTopLoader?: number
}

const LoaderContainer = ({
  imageComponent,
  main,
  loader,
  marginTop = 10,
  marginTopLoader = 5,
}: Props) => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
      {imageComponent && (
        <Grid item marginTop={marginTop}>
          {imageComponent}
        </Grid>
      )}
      <Grid item marginTop={marginTopLoader}>
        {loader}
      </Grid>
      <Grid item>
        {typeof main === 'string' ? <Typography variant="subtitle1">{main}</Typography> : main}
      </Grid>
    </Grid>
  )
}

export default memo(LoaderContainer)
