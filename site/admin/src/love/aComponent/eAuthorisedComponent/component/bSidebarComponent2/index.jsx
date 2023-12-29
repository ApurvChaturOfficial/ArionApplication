import React, { useState } from 'react'
import { setMiniSidenav, useMaterialUIController } from 'src/love/iTemplate/context';
import routes from "src/love/iTemplate/routes";
import brandWhite from "src/love/iTemplate/assets/images/logo-ct.png";
import brandDark from "src/love/iTemplate/assets/images/logo-ct-dark.png";
import Sidenav from 'src/love/iTemplate/examples/Sidenav';
import DashboardLayout from 'src/love/iTemplate/examples/LayoutContainers/DashboardLayout';
import DashboardNavbar from 'src/love/iTemplate/examples/Navbars/DashboardNavbar';
import brand from 'src/love/dFunction/gBrand';

const SidebarComponent2 = ({ ReduxUltimate, children }) => {
  const [controller, dispatch] = useMaterialUIController();
  const {
    miniSidenav,
    sidenavColor,
    transparentSidenav,
    whiteSidenav,
    darkMode,
  } = controller;
  const [onMouseEnter, setOnMouseEnter] = useState(false);

  // Open sidenav when mouse enter on mini sidenav
  const handleOnMouseEnter = () => {
    if (miniSidenav && !onMouseEnter) {
      setMiniSidenav(dispatch, false);
      setOnMouseEnter(true);
    }
  };

  // Close sidenav when mouse leave mini sidenav
  const handleOnMouseLeave = () => {
    if (onMouseEnter) {
      setMiniSidenav(dispatch, true);
      setOnMouseEnter(false);
    }
  };

  // JSX
  return (
    <React.Fragment>
      <Sidenav
        color={sidenavColor}
        brand={(transparentSidenav && !darkMode) || whiteSidenav ? brand().logo : brand().logo}
        brandName={brand().name}
        brandApp={brand().app}
        routes={routes}
        onMouseEnter={handleOnMouseEnter}
        onMouseLeave={handleOnMouseLeave}
        ReduxUltimate={ReduxUltimate}
      />

      <DashboardLayout>
        <DashboardNavbar ReduxUltimate={ReduxUltimate} />
        { children }
      </DashboardLayout>
    </React.Fragment>
  )
}

export default SidebarComponent2