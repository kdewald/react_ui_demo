import { memo, useState, useEffect } from 'react'
import TextField from '@mui/material/TextField'
import BaseDialog from './BaseDialog'

type Props = {
  open: boolean
  handleClose: () => void
  title: string
  inputLabel: string
  inputRequired?: boolean
  initialValue?: string
  okText?: string
  cancelText?: string
  handleOk: (result?: string) => void
  multiline?: boolean
  rows?: number
}

const InputDialog = ({
  open,
  handleClose,
  title = '',
  inputLabel = '',
  okText = 'Ok',
  cancelText = 'Cancel',
  handleOk,
  inputRequired = false,
  multiline = true,
  rows = 5,
  initialValue = '',
}: Props) => {
  const [value, setValue] = useState(initialValue || '')
  const [disable, setDisable] = useState(inputRequired)

  const onValue = (event: any) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    setDisable(inputRequired ? !value : false)
  }, [value, inputRequired])

  const handleDone = () => {
    if (inputRequired) {
      if (value) {
        handleOk(value)
      }
    } else {
      handleOk(value)
    }
  }
  return (
    <BaseDialog
      open={open}
      title={title}
      content={
        <TextField
          sx={{ marginTop: 2 }}
          fullWidth
          required={inputRequired}
          multiline={multiline}
          rows={rows}
          label={inputLabel}
          value={value}
          onChange={onValue}
        />
      }
      okText={okText}
      cancelText={cancelText}
      handleOk={handleDone}
      handleClose={handleClose}
      disableOk={disable}
    />
  )
}

export default memo(InputDialog)
