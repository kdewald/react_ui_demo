import { memo, ReactElement } from 'react'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import Button from '@mui/material/Button'

type Props = {
  open: boolean
  handleClose: () => void
  title: string
  content: string | ReactElement
  okText?: string
  cancelText?: string
  handleOk: () => void
  disableOk?: boolean
}

const BaseDialog = ({
  open,
  handleClose,
  title = '',
  content = '',
  okText = 'Ok',
  cancelText = 'Cancel',
  handleOk,
  disableOk = false,
}: Props) => {
  return (
    <Dialog
      fullWidth
      open={open}
      onClose={handleClose}
      aria-labelledby="alert-dialog-title"
      aria-describedby="alert-dialog-description"
    >
      <DialogTitle id="alert-dialog-title">{title}</DialogTitle>
      <DialogContent>
        {typeof content === 'string' ? (
          <DialogContentText id="alert-dialog-description">{content}</DialogContentText>
        ) : (
          content
        )}
      </DialogContent>
      <DialogActions>
        <Button onClick={handleClose}>{cancelText}</Button>
        <Button disabled={disableOk} onClick={handleOk} autoFocus>
          {okText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default memo(BaseDialog)
