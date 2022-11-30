import React, { useCallback } from 'react'

import Icon from '@mui/material/Icon'

const MaterialIcon = ({ icon, ...props }: any) => {
  const pascalCaseToSnakeCase = useCallback<any>(() => {
    return icon
      .replace(/(?:^|\.?)([A-Z])/g, (_x: string, y: string) => {
        return '_' + y.toLowerCase()
      })
      .replace(/^_/, '')
  }, [icon])

  return <Icon {...props}>{pascalCaseToSnakeCase(icon)}</Icon>
}

export default MaterialIcon
