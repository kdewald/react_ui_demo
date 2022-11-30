import { memo, ReactElement } from 'react'
import EmptyState from './EmptyState'
import { ReactComponent as Fireworks } from '../../images/fireworks.svg'

type Props = {
  main?: string | ReactElement
  secondary?: string | ReactElement
  actionsComponent?: ReactElement
}

const DoneState = ({ main = '', secondary = '', actionsComponent }: Props) => {
  return (
    <EmptyState
      imageComponent={<Fireworks style={{ maxHeight: 300 }} />}
      main={main}
      secondary={secondary}
      actionsComponent={actionsComponent}
    />
  )
}

export default memo(DoneState)
