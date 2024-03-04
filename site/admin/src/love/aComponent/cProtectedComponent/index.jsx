import React from 'react'

const ProtectedComponent = ({ children }) => {
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  )
}

export default ProtectedComponent