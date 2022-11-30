import React, { memo, useEffect, useState } from 'react'
import { useIntl, FormattedMessage } from 'react-intl'
import { isEmpty } from 'lodash'

import Button from '@mui/material/Button'
import Dialog from '@mui/material/Dialog'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'
import LoadingButton from '@mui/lab/LoadingButton'

import { Form } from 'react-final-form'
import { Avatar, Box } from '@mui/material'
import makeStyles from '@mui/styles/makeStyles'
import LoadingCentered from '../Loaders/LoadingCentered'

const useStyles = makeStyles(theme => ({
  deleteButton: {
    marginRight: 'auto',
    color: '#F44336',
  },
}))

type Props = {
  disableSubmit?: boolean
  headline: string
  contextText?: string
  open: boolean
  isSaving?: boolean
  onClose: any
  onSubmit: any
  onDelete?: any
  debug?: any
  initialValues?: any
  formFields: any
  validate: any
  decorators?: any
  avatar?: { src: string; alt: string }
  enableJSONPreview?: boolean
  dropdownValues?: string[]
  setIsDropdownType?: React.Dispatch<React.SetStateAction<boolean>>
  setDropdownValues?: React.Dispatch<React.SetStateAction<string[]>>
}

const FormDialog = ({
  disableSubmit = false,
  headline,
  contextText,
  open,
  isSaving = false,
  onClose,
  onSubmit,
  debug,
  initialValues,
  formFields,
  validate,
  decorators,
  onDelete,
  avatar,
  enableJSONPreview = true,
  dropdownValues,
  setIsDropdownType,
  setDropdownValues,
}: Props) => {
  const { formatMessage: i18n } = useIntl()
  const i18nNs = 'components.form-dialog'
  const classes = useStyles()
  const [updatedDropdownValues, setUpdatedDropdownValues] = useState<string[]>(
    initialValues?.dropdownValues || [],
  )

  useEffect(() => {
    if (dropdownValues) {
      setUpdatedDropdownValues(dropdownValues)
    }
  }, [dropdownValues])

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
      decorators={decorators || []}
      debug={e => debug && debug(e)}
      render={({ handleSubmit, values, submitting, pristine }: any) => {
        return (
          <Dialog
            maxWidth={'md'}
            open={open}
            onClose={onClose}
            aria-labelledby="form-dialog-title"
            sx={{ minWidth: '450px' }}
          >
            {!isSaving ? (
              <form onSubmit={handleSubmit} noValidate>
                <DialogTitle id="form-dialog-title">{headline}</DialogTitle>
                <DialogContent>
                  {contextText && <DialogContentText>{contextText}</DialogContentText>}
                  {!isEmpty(avatar) && (
                    <Box
                      sx={{
                        margin: 1,
                        display: 'flex',
                        justifyContent: 'center',
                        alignItems: 'center',
                      }}
                    >
                      <Avatar
                        alt={`${avatar?.alt}`}
                        src={`${avatar?.src}`}
                        sx={{ width: 156, height: 156 }}
                      />
                    </Box>
                  )}
                  {formFields.map((item: any, idx: number) => {
                    if (typeof item === 'function') return item(values)
                    return item
                  })}
                  {enableJSONPreview && values && Object.keys(values).length ? (
                    <pre>
                      {JSON.stringify(
                        values.type === 'dropdown'
                          ? {
                              ...values,
                              dropdownValues: updatedDropdownValues,
                            }
                          : values,
                        null,
                        2,
                      )}
                    </pre>
                  ) : null}
                </DialogContent>

                <DialogActions>
                  {onDelete && (
                    <Button
                      onClick={onDelete}
                      color="error"
                      className={classes.deleteButton}
                      sx={{ marginRight: 'auto' }}
                    >
                      <FormattedMessage id={`${i18nNs}.buttons.delete`} />
                    </Button>
                  )}
                  <Button onClick={onClose} color="primary">
                    {i18n({ id: `${i18nNs}.buttons.cancel` })}
                  </Button>
                  <LoadingButton type="submit" disabled={submitting} loading={disableSubmit}>
                    {i18n({ id: `${i18nNs}.buttons.submit` })}
                  </LoadingButton>
                </DialogActions>
              </form>
            ) : (
              <Box width={450}>
                <LoadingCentered main="Saving..." noMargin />
              </Box>
            )}
          </Dialog>
        )
      }}
    />
  )
}

export default memo(FormDialog)
