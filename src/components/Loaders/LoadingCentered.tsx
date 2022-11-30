import { Box, CircularProgress, Typography, useTheme } from '@mui/material'

type Props = {
  main?: string
  secondary?: string
  noMargin?: boolean
}
const LoadingCentered = ({ main, secondary, noMargin = false }: Props) => {
  const theme = useTheme()
  return (
    <Box
      sx={{ width: '100%', marginTop: noMargin ? 0 : theme.spacing(8) }}
      textAlign="center"
      p={5}
    >
      <CircularProgress />
      {main && (
        <Typography align="center" variant="h5">
          {main}
        </Typography>
      )}
      {secondary && (
        <Typography align="center" variant="caption">
          {secondary}
        </Typography>
      )}
    </Box>
  )
}

export default LoadingCentered
