import React from 'react'

const UnprotectedComponent = ({ children }) => {
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  )
}

export default UnprotectedComponent