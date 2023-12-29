import React from 'react'
import HeadAndFoot from './component/aHeadAndFoot'

const AuthenticatedComponent = ({ children }) => {
  return (
    <React.Fragment>
      <HeadAndFoot>
        { children }
      </HeadAndFoot>
    </React.Fragment>
  )
}

export default AuthenticatedComponent