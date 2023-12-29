import React, { useState } from 'react'
import './index.css';

import SidebarComponent2 from './component/bSidebarComponent2';


const AuthorisedComponent = ({ ReduxUltimate, children }) => {
  // JSX
  return (
    <React.Fragment>
      <SidebarComponent2 ReduxUltimate={ReduxUltimate} >
        { children }
      </SidebarComponent2>
    </React.Fragment>
  )
}

export default AuthorisedComponent