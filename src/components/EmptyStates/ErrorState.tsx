import { memo, ReactElement } from 'react'
import EmptyState from './EmptyState'
import { ReactComponent as ServerErrorImg } from '../../images/server_error.svg'

type Props = {
  main?: string | ReactElement
  secondary?: string | ReactElement
  actionsComponent?: ReactElement
}

const ServerError = ({ main = '', secondary = '', actionsComponent }: Props) => {
  return (
    <EmptyState
      imageComponent={<ServerErrorImg style={{ maxHeight: 300 }} />}
      main={main}
      secondary={secondary}
      actionsComponent={actionsComponent}
    />
  )
}

export default memo(ServerError)
