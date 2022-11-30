import { memo } from 'react'
import { styled } from '@mui/styles'
import { Tooltip, tooltipClasses, TooltipProps } from '@mui/material'

export const HtmlTooltip = memo(
  styled(({ className, ...props }: TooltipProps) => (
    <Tooltip {...props} classes={{ popper: className }} />
  ))(({ theme }) => ({
    [`& .${tooltipClasses.tooltip}`]: {
      backgroundColor:
        theme.palette.mode === 'dark'
          ? theme.palette.background.default[900]
          : theme.palette.grey[200],
      color: theme.palette.text.secondary,
      border: `1 px solid ${
        theme.palette.mode === 'dark' ? theme.palette.background.default : theme.palette.grey[400]
      }`,
      maxWidth: 750,
    },
  })),
)
