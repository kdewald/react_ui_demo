import { memo, useState } from 'react'
import Checkbox from '@mui/material/Checkbox'
import BaseDialog from './BaseDialog'
import FormControlLabel from '@mui/material/FormControlLabel'

type Props = {
  open: boolean
  handleClose: () => void
  title: string
  inputLabel: string
  initialValue?: boolean
  okText?: string
  cancelText?: string
  handleOk: (result?: boolean) => void
  disabledCheckbox?: boolean
}

const CheckboxDialog = ({
  open,
  handleClose,
  title = '',
  okText = 'Ok',
  cancelText = 'Cancel',
  handleOk,
  initialValue = false,
  inputLabel = '',
  disabledCheckbox = false,
}: Props) => {
  const [value, setValue] = useState(initialValue)

  const onValue = (event: any) => {
    !disabledCheckbox && setValue(event.target.checked)
  }

  const handleDone = () => {
    handleOk(value)
  }
  return (
    <BaseDialog
      open={open}
      title={title}
      content={
        <FormControlLabel
          control={
            <Checkbox
              disabled={disabledCheckbox}
              aria-label={inputLabel}
              checked={value}
              onChange={onValue}
            />
          }
          label={inputLabel}
        />
      }
      okText={okText}
      cancelText={cancelText}
      handleOk={handleDone}
      handleClose={handleClose}
      disableOk={false}
    />
  )
}

export default memo(CheckboxDialog)
