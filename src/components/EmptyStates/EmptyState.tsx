import { memo, ReactElement } from 'react'
import Grid from '@mui/material/Grid'
import { Typography } from '@mui/material'

type Props = {
  imageComponent: ReactElement
  main?: string | ReactElement
  secondary?: string | ReactElement
  actionsComponent?: ReactElement
  marginTop?: number
}

const EmptyState = ({
  imageComponent,
  main = '',
  secondary = '',
  actionsComponent,
  marginTop = 10,
}: Props) => {
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <Grid item marginTop={marginTop}>
        {imageComponent}
      </Grid>
      <Grid item>
        {typeof main === 'string' ? <Typography variant="h5">{main}</Typography> : main}
      </Grid>
      <Grid item>
        {typeof secondary === 'string' ? (
          <Typography variant="subtitle1">{secondary}</Typography>
        ) : (
          secondary
        )}
      </Grid>
      <Grid item>{actionsComponent}</Grid>
    </Grid>
  )
}

export default memo(EmptyState)
