import { memo, useState, useEffect } from 'react'
import Select from '@mui/material/Select'
import MenuItem from '@mui/material/MenuItem'
import BaseDialog from './BaseDialog'

type Props = {
  open: boolean
  handleClose: () => void
  title: string
  inputRequired?: boolean
  initialValue?: string
  options: { label: string; value: string }[]
  okText?: string
  inputLabel?: string
  cancelText?: string
  handleOk: (result?: string) => void
}

const SelectDialog = ({
  open,
  handleClose,
  title = '',
  okText = 'Ok',
  cancelText = 'Cancel',
  handleOk,
  inputRequired = false,
  initialValue = '',
  options = [],
}: Props) => {
  const [value, setValue] = useState(initialValue || options?.[0]?.value || '')
  const [disable, setDisable] = useState(inputRequired)

  const onValue = (event: any) => {
    setValue(event.target.value)
  }

  useEffect(() => {
    setDisable(!value)
  }, [value])

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
        <Select id={`dialog-select`} size="small" fullWidth value={value} onChange={onValue}>
          {options.map(p => (
            <MenuItem key={`dialog-select-${p.label}`} value={p.value}>
              {p.label}
            </MenuItem>
          ))}
        </Select>
      }
      okText={okText}
      cancelText={cancelText}
      handleOk={handleDone}
      handleClose={handleClose}
      disableOk={disable}
    />
  )
}

export default memo(SelectDialog)
