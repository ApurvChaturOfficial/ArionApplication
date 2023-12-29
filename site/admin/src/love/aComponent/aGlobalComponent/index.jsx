import React from 'react'


const GlobalComponent = ({ Redux, LogoutAPICall, children }) => {
  return (
    <React.Fragment>
      { children }
    </React.Fragment>
  )
}

export default GlobalComponent