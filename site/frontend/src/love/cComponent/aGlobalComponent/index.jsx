import React from 'react'

// Component
// import HeaderComponent from './component/aHeaderComponent';
import brand from '@/love/dFunction/gBrand';


const GlobalComponent = ({ Redux, LogoutAPICall, children }) => {
  // JSX
  return (
    <React.Fragment>
      {/* <HeaderComponent
        Redux={Redux} LogoutAPICall={LogoutAPICall}
        brand={brand()}
        routes={routes}
        // action={{
        //   type: "external",
        //   route: "https://www.creative-tim.com/product/material-kit-react",
        //   label: "free download",
        //   color: "info",
        // }}
        // sticky
        transparent
        light
      /> */}
      { children }
    </React.Fragment>
  )
}

export default GlobalComponent