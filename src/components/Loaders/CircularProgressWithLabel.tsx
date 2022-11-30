import CircularProgress, { CircularProgressProps } from '@mui/material/CircularProgress'
import Typography from '@mui/material/Typography'
import Box from '@mui/material/Box'

function CircularProgressWithLabel(
  props: CircularProgressProps & {
    value: number
    total?: number
    progressTextType?: 'percentage' | 'fraction'
  },
) {
  const { value, total = 100, progressTextType = 'percentage', ...restProps } = props
  const percentageValue = Math.round((value / (total === 0 ? 1 : total)) * 100)
  const textValue = progressTextType === 'percentage' ? `${percentageValue}%` : `${value}/${total}`
  return (
    <Box sx={{ position: 'relative', display: 'inline-flex' }}>
      <CircularProgress variant="determinate" {...restProps} value={percentageValue} />
      <Box
        sx={{
          top: 0,
          left: 0,
          bottom: 0,
          right: 0,
          position: 'absolute',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Typography variant="caption" component="div" color="text.secondary">
          {textValue}
        </Typography>
      </Box>
    </Box>
  )
}

export default CircularProgressWithLabel
