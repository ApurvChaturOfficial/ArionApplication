import React from 'react'

const AuthenticatedComponent = ({ children }) => {
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  )
}

export default AuthenticatedComponent