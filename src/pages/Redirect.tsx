import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'

function Redirect() {
  const history = useHistory()

  useEffect(() => {
    history.push(`/dashboard`)
  }, [history])

  return <div>{'Redirecting...'}</div>
}

export default Redirect
