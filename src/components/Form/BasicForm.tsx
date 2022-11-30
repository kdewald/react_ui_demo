import React, { Dispatch, SetStateAction } from 'react'
import { useIntl, FormattedMessage } from 'react-intl'

import Button from '@mui/material/Button'
import DialogActions from '@mui/material/DialogActions'
import DialogContent from '@mui/material/DialogContent'
import DialogContentText from '@mui/material/DialogContentText'
import DialogTitle from '@mui/material/DialogTitle'

import { Form } from 'react-final-form'
import makeStyles from '@mui/styles/makeStyles'
import { Alert, Box, CircularProgress, Typography } from '@mui/material'

const useStyles = makeStyles(theme => ({
  deleteButton: {
    marginRight: 'auto',
    color: '#F44336',
  },
}))

type Props = {
  headline: string
  contextText?: string
  onClose?: any
  onSubmit: any
  onDelete?: any
  initialValues: any
  formFields: any
  validate: any
  decorators?: any
  hasErrorOnSubmit: boolean
  setHasErrorOnSubmit: Dispatch<SetStateAction<boolean>>
}

const BasicForm = ({
  headline,
  contextText,
  onClose,
  onSubmit,
  initialValues,
  formFields,
  validate,
  decorators,
  onDelete,
  hasErrorOnSubmit,
  setHasErrorOnSubmit,
}: Props) => {
  const { formatMessage: i18n } = useIntl()
  const i18nNs = 'components.form-dialog'
  const classes = useStyles()

  return (
    <Form
      onSubmit={onSubmit}
      initialValues={initialValues}
      validate={validate}
      decorators={decorators || []}
      render={({ handleSubmit, values, submitting, pristine, form }) => {
        return (
          <form onSubmit={handleSubmit} noValidate>
            <DialogTitle id="form-dialog-title">{headline}</DialogTitle>
            <DialogContent>
              {contextText && <DialogContentText>{contextText}</DialogContentText>}

              {formFields.map((item: any, idx: number) =>
                typeof item === 'function' ? item(values, form) : item,
              )}
            </DialogContent>
            {hasErrorOnSubmit && (
              <Alert
                variant="filled"
                severity="error"
                sx={{ m: 2 }}
                onClose={() => {
                  setHasErrorOnSubmit(false)
                }}
              >
                <Box sx={{ display: 'flex', flexDirection: 'column' }}>
                  <Typography sx={{ marginBottom: 1 }}>An error has occurred</Typography>
                </Box>
              </Alert>
            )}

            <DialogActions>
              {onDelete && (
                <Button onClick={onDelete} color="primary" className={classes.deleteButton}>
                  <FormattedMessage id={`${i18nNs}.buttons.delete`} />
                </Button>
              )}
              {onClose && (
                <Button onClick={onClose} color="primary" disabled={submitting}>
                  {i18n({ id: `${i18nNs}.buttons.cancel` })}
                </Button>
              )}
              <Button type="submit" color="primary" disabled={submitting}>
                {i18n({ id: `${i18nNs}.buttons.submit` })}
              </Button>
              {submitting && <CircularProgress size={30} />}
            </DialogActions>
          </form>
        )
      }}
    />
  )
}

export default BasicForm
