import React from 'react'
import Header from './component/bHeader'
import Footer from './component/cFooter'


const GlobalComponent = ({ Redux, LogoutAPICall, children }) => {
  return (
    <React.Fragment>
      <div className="relative flex min-h-screen flex-col bg-background">
        <Header Redux={Redux} LogoutAPICall={LogoutAPICall} />
        { children }
        {/* <Footer /> */}
      </div>
    </React.Fragment>
  )
}

export default GlobalComponent