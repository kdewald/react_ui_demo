import { memo, ReactElement } from 'react'
import Grid from '@mui/material/Grid'
import { IconButton, Tooltip } from '@mui/material'
import CircularProgressWithLabel from '../Loaders/CircularProgressWithLabel'

type Props = {
  buttonIcon: ReactElement
  value: number
  total?: number
  progressTextType?: 'percentage' | 'fraction'
  onProgressTooltip?: string
  onDoneTooltip?: string
  handleClick: any
}

const ProgressButton = ({
  buttonIcon,
  value,
  progressTextType = 'percentage',
  onProgressTooltip = 'In progress',
  onDoneTooltip = 'Done',
  total = 100,
  handleClick,
}: Props) => {
  const end = total > 0 ? value >= total : true
  return (
    <Grid container direction="column" justifyContent="center" alignItems="center" spacing={2}>
      <Grid item>
        <Tooltip title={end ? onDoneTooltip : onProgressTooltip}>
          <IconButton
            aria-label="open-new"
            //   size="small"
            disabled={!end}
            onClick={handleClick}
          >
            {end ? (
              buttonIcon
            ) : (
              <CircularProgressWithLabel
                value={value}
                total={total}
                progressTextType={progressTextType}
              />
            )}
          </IconButton>
        </Tooltip>
      </Grid>
    </Grid>
  )
}

export default memo(ProgressButton)
